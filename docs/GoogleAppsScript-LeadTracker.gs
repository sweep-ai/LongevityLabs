/**
 * Lead Tracker Web App (Dwayne Dunning)
 *
 * IMPORTANT: Create this script FROM the sheet (Extensions → Apps Script) so it's bound
 * to the correct spreadsheet. The SPREADSHEET_ID below must match your sheet's ID from the URL:
 * docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
 *
 * Deploy: Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone
 * Copy the Web app URL (https://script.google.com/macros/s/.../exec) into .env.local as GOOGLE_SHEETS_WEB_APP_URL
 *
 * Sheet: Row 1 = header. New submissions are inserted as Row 2 (latest on top).
 * Accepts both "Apply for Coaching" and "Free Resource" / "Newsletter" (lead-magnet, email) submissions.
 */

var SPREADSHEET_ID = '1swSCwBtZgO8Vgt6pAVxH04g9T0eRNlg_shRmI50Rhvg';
var COLS = 11; // Timestamp, Source, Fitness Experience, Fitness Goals, First Name, Last Name, Email, Phone, Instagram, Resource, Resource Name

function doPost(e) {
  try {
    var rawBody = e.postData && e.postData.contents ? e.postData.contents : null;
    if (!rawBody || typeof rawBody !== 'string') {
      return createResponse(400, { error: 'Invalid or missing JSON body' });
    }
    var json = JSON.parse(rawBody);

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];

    // Ensure header row exists (Row 1) — 11 columns for all lead types
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, COLS).setValues([[
        'Timestamp',
        'Source',
        'Fitness Experience',
        'Fitness Goals',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Instagram',
        'Resource URL',
        'Resource Name'
      ]]);
      sheet.getRange(1, 1, 1, COLS).setFontWeight('bold');
    }

    // Insert new row at row 2 so latest submission is always at top
    // getRange(row, col, numRows, numCols)
    sheet.insertRowBefore(2);
    sheet.getRange(2, 1, 1, COLS).setValues([[
      json.timestamp || new Date().toISOString(),
      json.source || '',
      json.fitnessExperience || '',
      json.fitnessGoals || '',
      json.firstName || '',
      json.lastName || '',
      json.email || '',
      json.phone || '',
      json.instagram || '',
      json.resource || '',
      json.resourceName || ''
    ]]);

    return createResponse(200, { success: true });
  } catch (err) {
    return createResponse(500, { error: String(err.message) });
  }
}

function doGet(e) {
  return createResponse(200, { status: 'ok', app: 'Lead Tracker' });
}

function createResponse(code, obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run this once from the Apps Script editor (Run → testWrite) to confirm the script can write to the sheet. */
function testWrite() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, COLS).setValues([[
      'Timestamp', 'Source', 'Fitness Experience', 'Fitness Goals', 'First Name', 'Last Name', 'Email', 'Phone', 'Instagram', 'Resource URL', 'Resource Name'
    ]]);
    sheet.getRange(1, 1, 1, COLS).setFontWeight('bold');
  }
  sheet.insertRowBefore(2);
  sheet.getRange(2, 1, 1, COLS).setValues([[
    new Date().toISOString(), 'Free Resource', 'Test', 'Test', 'Test', 'User', 'test@example.com', '', '', '', 'TRT Optimization Checklist'
  ]]);
  Logger.log('Test row written to ' + ss.getName());
}
