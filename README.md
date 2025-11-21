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

## Quick Start

1. **Set up Google Cloud Project** with OAuth2 credentials
2. **Add your Client ID** to `manifest.json`
3. **Load extension** in Chrome (`chrome://extensions/`)
4. **Start exporting** your tabs to Google Sheets!

For detailed setup instructions, see the [Setup Guide](docs/SETUP_GUIDE.md) in the `docs/` folder.

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

## Documentation

Additional guides are available in the `docs/` folder:

- **[SETUP_GUIDE.md](docs/SETUP_GUIDE.md)** - Detailed step-by-step setup instructions
- **[PUBLISHING_GUIDE.md](docs/PUBLISHING_GUIDE.md)** - How to publish to Chrome Web Store
- **[PUBLISHING_CHECKLIST.md](docs/PUBLISHING_CHECKLIST.md)** - Publishing progress tracker
- **[QUICK_START.md](docs/QUICK_START.md)** - Fast track setup with commands

## Publishing

Want to make your extension public? See the [Publishing Guide](docs/PUBLISHING_GUIDE.md) for complete instructions on:
- Creating store listing assets
- Registering as Chrome Web Store developer ($5 one-time fee)
- Submitting for review
- Promoting your extension

## Development

To modify the extension:

1. Make changes to the relevant files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## Security

- Uses official Chrome Identity API for OAuth2
- Tokens are handled securely by Chrome
- No credentials stored in the extension
- Requires explicit user consent for Google access

## License

MIT License - Feel free to use and modify

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
