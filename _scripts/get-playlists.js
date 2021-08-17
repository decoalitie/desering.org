const SpotifyWebApi = require('spotify-web-api-node');
const { stringify } = require('yaml');
const fs = require('fs/promises');
const path = require('path');
const { differenceInDays } = require('date-fns');

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

var spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET
});

const asyncMap = async (array, mapFn) => {
    const result = [];

    for (const entry of array) {
        result.push(await mapFn(entry));
    }

    return result;
}

async function main() {
    try {
        const { body: { access_token } = {} } = await spotifyApi.clientCredentialsGrant();
        if (!access_token) {
            throw new Error('Missing access token');
        }

        spotifyApi.setAccessToken(access_token);
    } catch (e) {
        console.log('Could not authenticate with Spotify');
        process.exit(2);
    }

    console.log(`Fetch user playlists: flut1`);
    const { body: { items } = {} } = await spotifyApi.getUserPlaylists('flut1', { limit: 50 });
    if (!items) {
        console.log('Could not fetch playlists');
        process.exit(3);
    }

    const testTafelPlaylists = items.filter(playlist => playlist.public && playlist.name.startsWith('TestTafel'));

    const allUnpopulairArtists = [];
    const artistCache = {};

    const data = await asyncMap(testTafelPlaylists, async playlist => {
        console.log(`Fetch playlist: ${playlist.name}`);
        const { body: details } = await spotifyApi.getPlaylist(playlist.id, {
            fields: `
                description,
                tracks.items(
                    added_at,
                    track(
                        artists(
                            name,
                            external_urls,
                            uri,
                            id
                        ),
                        album(
                            images,
                            name,
                            release_date,
                            release_date_precision
                        ),
                        href,
                        popularity,
                        duration_ms,
                        preview_url
                    )
                )
                `.replace(/\s/g, '')
        });

        const tracks = details.tracks.items.map(entry => {

            return {
                ...entry,
                age: differenceInDays(new Date(entry.added_at), new Date(entry.track.album.release_date))
            }
        });

        tracks.sort((a, b) => a.age - b.age);
        const newMusic = tracks.filter(entry => entry.age < 8);
        const newMusicArtists = newMusic
            .reduce((artists, entry) => {
                const artist = entry.track.artists[0];
                if (!artists.some(({ id }) => artist.id === id)) {
                    return [...artists, artist];
                }

                return artists;
            }, [])
            .slice(0, 3);


        tracks.sort((a, b) => a.track.popularity - b.track.popularity);

        const unpopularTracksArtists = await asyncMap(
            tracks
                .filter(entry => ![...allUnpopulairArtists, ...newMusicArtists].some(({ id }) => id === entry.track.artists[0].id))
                .slice(0, 10)
                .map(entry => entry.track.artists[0]),
            async artist => {
                const { body: details } = artistCache[artist.id] || await (async () => {
                    console.log(`Fetch artist: ${artist.name}`);
                    const result = await spotifyApi.getArtist(artist.id);
                    artistCache[artist.id] = result;
                    return result;
                })();
                return {
                    ...artist,
                    popularity: details.popularity
                };
            }
        );

        unpopularTracksArtists.sort((a, b) => a.popularity - b.popularity);

        const unpopularArtists = unpopularTracksArtists
            .slice(0, Math.max(2, 5 - newMusicArtists.length));

        allUnpopulairArtists.push(...unpopularArtists);

        return {
            ...Object.fromEntries(Object.entries(playlist).filter(([key]) => ['external_urls', 'name', 'tracks', 'uri'].includes(key))),
            newMusicArtists,
            unpopularArtists
        }
    });

    await fs.writeFile(
        path.join(__dirname, '../_data/testtafel_playlists.yml'),
        stringify(data),
        { encoding: 'utf8' }
    );
}

main();
