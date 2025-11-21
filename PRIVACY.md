# Privacy Policy for Tab Exporter

**Last updated:** January 2025

## Overview

Tab Exporter is a Chrome extension that exports your browser tabs to Google Sheets. This privacy policy explains how we handle your information.

## Information We Collect

Tab Exporter collects and processes:
- **Browser tab information**: Titles and URLs of tabs in your current browser window
- **Export timestamps**: Date and time when you export tabs

## How We Use Information

- Tab information is sent **directly to YOUR Google Sheets** via the Google Sheets API
- We do **NOT** store, collect, or transmit your data to any third-party servers
- All data flows directly from your browser to your Google account
- We have no access to your exported data

## Data Storage

- **No data is stored** by Tab Exporter on any servers
- OAuth authentication tokens are managed securely by Chrome's Identity API
- All exported data goes directly to **YOUR** Google Drive account
- We do not maintain any databases or collect analytics

## Google API Services

This extension uses Google API Services (Google Sheets API and Google Drive API) and complies with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

### Google Scopes Used

- `https://www.googleapis.com/auth/spreadsheets` - To create and write to Google Sheets
- `https://www.googleapis.com/auth/drive.file` - To save created sheets to your Google Drive

## Third-Party Access

- We do **NOT** sell, trade, or share your data with any third parties
- Only **YOU** have access to your exported Google Sheets
- Google's privacy policy applies to data stored in your Google account
- No advertising or tracking services are used

## Permissions Explained

The extension requires these permissions:

### `tabs`
- **Purpose**: Read tab titles and URLs from your current browser window
- **Usage**: Only accessed when you click the export button
- **Scope**: Only tabs in the current window, not across all windows

### `identity`
- **Purpose**: Authenticate with your Google account using OAuth 2.0
- **Usage**: Securely connect to Google Sheets API
- **Scope**: Managed by Chrome's secure identity system

### Host Permissions
- `https://www.googleapis.com/*` and `https://sheets.googleapis.com/*`
- **Purpose**: Make API requests to Google Sheets
- **Usage**: Only when creating and populating spreadsheets

## Security

- Uses the official Chrome Identity API for secure OAuth 2.0 authentication
- All connections to Google APIs use HTTPS encryption
- No passwords or credentials are stored in the extension
- OAuth tokens are handled exclusively by Chrome
- No local storage of sensitive information

## Data Retention

- **We do not retain any data** because we don't collect any data
- Tab information is processed in memory only during export
- Once sent to Google Sheets, the data is cleared from extension memory

## Your Rights

You have the right to:
- **Access**: View your data in your Google Sheets
- **Delete**: Remove exported sheets from your Google Drive
- **Revoke**: Remove extension access via Google Account settings
- **Export**: Download your Google Sheets at any time

### How to Revoke Access

1. Go to [Google Account Permissions](https://myaccount.google.com/permissions)
2. Find "Tab Exporter" in the list
3. Click "Remove Access"

## Children's Privacy

This extension is not directed at children under 13. We do not knowingly collect information from children.

## Changes to Privacy Policy

We may update this privacy policy from time to time. Changes will be:
- Posted in this document
- Noted in the Chrome Web Store listing
- Reflected in the "Last updated" date above

Continued use of the extension after changes constitutes acceptance of the updated policy.

## Data Breach Protocol

In the unlikely event of a data breach:
- We will notify affected users within 72 hours
- However, since we don't store any data, the risk is minimal

## Compliance

This extension complies with:
- Google Chrome Web Store Developer Program Policies
- Google API Services User Data Policy
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)

## Contact Information

For questions, concerns, or requests regarding this privacy policy:

- **GitHub Issues**: [Create an issue](https://github.com/anshuman-dev/link-scrape-sheet/issues)
- **Email**: mailsinghanshuman@gmail.com

We aim to respond to all inquiries within 48 hours.

## Consent

By installing and using Tab Exporter, you consent to:
- This privacy policy
- The collection and processing of tab information as described
- The use of Google API Services as outlined above

You can withdraw consent at any time by uninstalling the extension.

---

## Summary (TL;DR)

- ✅ Your tab data goes **directly** to **YOUR** Google Sheets
- ✅ We **don't store** or **collect** any of your data
- ✅ We have **no access** to your information
- ✅ You control everything through your Google account
- ✅ Secure OAuth 2.0 authentication
- ✅ No third-party sharing
- ✅ No tracking or analytics
- ✅ You can revoke access anytime

---

**This extension is designed with privacy as a priority. Your data belongs to you and stays with you.**
