// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'exportTabs') {
    handleExportTabs().then(sendResponse);
    return true; // Will respond asynchronously
  }
});

// Main function to handle tab export
async function handleExportTabs() {
  try {
    // Step 1: Get OAuth token
    const token = await getAuthToken();
    if (!token) {
      return { success: false, error: 'Failed to authenticate with Google' };
    }

    // Step 2: Get all tabs in current window
    const tabs = await getAllTabs();
    if (tabs.length === 0) {
      return { success: false, error: 'No tabs found' };
    }

    // Step 3: Create new Google Sheet
    const spreadsheetId = await createSpreadsheet(token, tabs);
    if (!spreadsheetId) {
      return { success: false, error: 'Failed to create spreadsheet' };
    }

    // Step 4: Populate the sheet with tab data
    await populateSheet(token, spreadsheetId, tabs);

    // Step 5: Return the sheet URL
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
    return { success: true, sheetUrl };

  } catch (error) {
    console.error('Error exporting tabs:', error);
    return { success: false, error: error.message };
  }
}

// Get OAuth token using Chrome Identity API
function getAuthToken() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError) {
        console.error('Auth error:', chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
      } else {
        resolve(token);
      }
    });
  });
}

// Get all tabs in the current window
async function getAllTabs() {
  return new Promise((resolve) => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      resolve(tabs);
    });
  });
}

// Create a new Google Spreadsheet
async function createSpreadsheet(token, tabs) {
  const timestamp = new Date().toLocaleString();
  const spreadsheet = {
    properties: {
      title: `Browser Tabs Export - ${timestamp}`
    },
    sheets: [{
      properties: {
        title: 'Exported Tabs',
        gridProperties: {
          rowCount: tabs.length + 1,
          columnCount: 3
        }
      }
    }]
  };

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(spreadsheet)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create spreadsheet: ${error}`);
  }

  const data = await response.json();
  return data.spreadsheetId;
}

// Populate the sheet with tab data
async function populateSheet(token, spreadsheetId, tabs) {
  // Prepare the data rows
  const values = [
    ['Title', 'URL', 'Export Time'] // Header row
  ];

  const exportTime = new Date().toLocaleString();

  tabs.forEach(tab => {
    values.push([
      tab.title || 'Untitled',
      tab.url || '',
      exportTime
    ]);
  });

  // Update the sheet with data
  const range = 'Exported Tabs!A1';
  const valueInputOption = 'RAW';

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?valueInputOption=${valueInputOption}`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ values })
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to populate sheet: ${error}`);
  }

  // Format the header row (make it bold)
  await formatHeader(token, spreadsheetId);
}

// Format the header row to be bold
async function formatHeader(token, spreadsheetId) {
  const requests = [{
    repeatCell: {
      range: {
        sheetId: 0,
        startRowIndex: 0,
        endRowIndex: 1
      },
      cell: {
        userEnteredFormat: {
          textFormat: {
            bold: true
          },
          backgroundColor: {
            red: 0.9,
            green: 0.9,
            blue: 0.9
          }
        }
      },
      fields: 'userEnteredFormat(textFormat,backgroundColor)'
    }
  }];

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ requests })
    }
  );
}
