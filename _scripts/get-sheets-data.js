const fs = require('fs/promises');
const { readFileSync } = require('fs');
const {google} = require('googleapis');
const {stringify} = require('yaml');
const path = require('path');

const { EVENT_SHEET_ID } = process.env;

let googleCredentials;
if (process.env.GOOGLE_SHEETS_KEY) {
    googleCredentials = JSON.parse(process.env.GOOGLE_SHEETS_KEY);
} else {
    googleCredentials = JSON.parse(readFileSync(path.join(__dirname, '../key.json'), { encoding: 'utf8' }))
}

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
    const { rawValues, data } = await getTabularData(EVENT_SHEET_ID, 'Agenda - TestTafels', (head) => ({
        'Datum': 'date',
        'Volgeboekt': 'fullyBooked',
        'Publiceer op website': 'public',
        'Website status': 'websiteStatus',
    }[head]));

    const updateValueRange = {
        ...rawValues,
        range: rawValues.range.replace('Agenda - TestTafels', '__website')
    };

    const result = data
        .filter(event => event.date && event.public)
        .map(({ date, fullyBooked }) => ({
            date,
            fullyBooked
        }));

    await fs.writeFile(
        path.join(__dirname, '../_data/testtafels.yml'),
        stringify(result),
        { encoding: 'utf8' }
    );

    await sheets.spreadsheets.values.update({
        spreadsheetId: EVENT_SHEET_ID,
        valueInputOption: 'USER_ENTERED',
        range: updateValueRange.range,
        requestBody: updateValueRange
    });
}

main();
