# Tab Exporter to Google Sheets

A Chrome extension that exports all open tabs in the current window to a new Google Sheet.

## Features

- Export all open tabs with one click
- Creates a new Google Sheet automatically
- Saves tab titles, URLs, and export timestamp
- Beautiful, modern UI
- Secure Google OAuth2 authentication

## Project Structure

```
tab-exporter/
├── manifest.json              # Extension configuration
├── popup/
│   ├── popup.html            # Extension popup UI
│   ├── popup.js              # Popup logic
│   └── popup.css             # Popup styling
├── background/
│   └── background.js         # Service worker & Google Sheets API integration
├── icons/                    # Extension icons (16x16, 48x48, 128x128)
└── README.md
```



## Usage

1. Click the extension icon in Chrome toolbar
2. Click **Export Tabs to Google Sheet** button
3. Authorize Google access (first time only)
4. Wait for the export to complete
5. Click **Open Google Sheet** to view your exported tabs

## How It Works

1. **User clicks export** → Popup sends message to background service worker
2. **Authentication** → Uses Chrome Identity API to get Google OAuth token
3. **Tab collection** → Queries all tabs in current window using Chrome Tabs API
4. **Sheet creation** → Creates new Google Sheet via Google Sheets API
5. **Data population** → Writes tab data (title, URL, timestamp) to the sheet
6. **Result** → Returns sheet URL to popup for user access

## Architecture

- **Manifest V3**: Modern Chrome extension standard
- **Service Worker**: Handles background tasks and API calls
- **Chrome Identity API**: Manages OAuth2 authentication
- **Google Sheets API v4**: Creates and populates spreadsheets
- **Popup Interface**: Simple, user-friendly UI

## Permissions Explained

- `tabs`: Read tab information (titles and URLs)
- `identity`: Google OAuth2 authentication
- `https://www.googleapis.com/*`: Access Google APIs
- `https://sheets.googleapis.com/*`: Access Google Sheets API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request and tag @anshuman-dev
