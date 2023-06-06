# Cookie Pop-up Rejector

This Chrome extension automatically rejects all cookie pop-ups before they are rendered on the user's screen.

## Installation Instructions

1. Download the extension files from the repository.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner of the extensions page.
4. Click "Load unpacked" and select the downloaded extension folder.
5. The extension should now be installed and active in your browser.

## Usage Instructions

The extension runs in the background and automatically rejects cookie pop-ups on web pages without any user input. No additional user interactions are required.

## Error Handling

1. If the extension encounters an error while blocking a cookie pop-up, it logs the error in the console and continues to the next pop-up.
2. If the extension fails to load or initialize, an error message is displayed to the user with instructions for troubleshooting.

## Dependencies

1. Node.js: Provides the runtime environment for the extension's JavaScript code.
2. npm: Manages the installation and updating of JavaScript libraries and dependencies.
3. Chrome extension APIs: Enables the extension to interact with web pages, block cookie pop-ups, and manage extension settings.