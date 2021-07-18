const fs = require('fs/promises');
const {google} = require('googleapis');
const {stringify} = require('yaml');
const path = require('path');

const { EVENT_SHEET_ID } = process.env;
const googleCredentials = JSON.parse(process.env.GOOGLE_SHEETS_KEY);

const auth = new google.auth.GoogleAuth({
    credentials: googleCredentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({
    version: 'v4',
    auth
});

async function getTabularData(spreadsheetId, sheetName, mapHeaders, headerRow = 0, firstEntryRow = 1) {
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        valueRenderOption: 'UNFORMATTED_VALUE',
        dateTimeRenderOption: 'FORMATTED_STRING',
        range: `'${sheetName}'`
    });
    
    const headers = response.data.values[headerRow];
    const entries = response.data.values.slice(firstEntryRow);

    return {
        rawValues: response.data,
        data: entries.map(entry => Object.fromEntries(
            headers.map((head, index) => [
                mapHeaders(head, index),
                entry[index],
            ])
        ))
    };
}

async function main() {
    const { rawValues, data } = await getTabularData(EVENT_SHEET_ID, 'Edities', (head) => ({
        'Datum': 'date',
        'Status': 'status',
        'Publiceer op website': 'public',
        'Website status': 'websiteStatus',
    }[head]));

    const updateValueRange = {
        ...rawValues,
        range: rawValues.range.replace('Edities', 'Website')
    };

    const result = data
        .filter(event => event.date && event.public)
        .map(({ date, status }) => ({
            date,
            status: !!status
        }));

    // await fs.writeFile(
    //     path.join(__dirname, '../_data/testtafels.yml'),
    //     stringify(result),
    //     { encoding: 'utf8' }
    // );
    console.log(result);

    await sheets.spreadsheets.values.update({
        spreadsheetId: EVENT_SHEET_ID,
        valueInputOption: 'USER_ENTERED',
        range: updateValueRange.range,
        requestBody: updateValueRange
    });

    await sheets.spreadsheets.values.clear({
        spreadsheetId: EVENT_SHEET_ID,
        range: 'Edities!H5'
    });
}

main();
