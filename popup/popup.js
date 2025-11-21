document.addEventListener('DOMContentLoaded', () => {
  const exportBtn = document.getElementById('exportBtn');
  const statusDiv = document.getElementById('status');
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
  const sheetLink = document.getElementById('sheetLink');

  exportBtn.addEventListener('click', async () => {
    try {
      // Disable button and show status
      exportBtn.disabled = true;
      hideAllMessages();
      showStatus('Collecting tabs...');

      // Send message to background script to export tabs
      const response = await chrome.runtime.sendMessage({ action: 'exportTabs' });

      if (response.success) {
        hideStatus();
        showResult(response.sheetUrl);
      } else {
        hideStatus();
        showError(response.error || 'Failed to export tabs');
      }
    } catch (error) {
      hideStatus();
      showError(`Error: ${error.message}`);
    } finally {
      exportBtn.disabled = false;
    }
  });

  function showStatus(message) {
    statusDiv.textContent = message;
    statusDiv.classList.remove('hidden');
  }

  function hideStatus() {
    statusDiv.classList.add('hidden');
  }

  function showResult(url) {
    sheetLink.href = url;
    resultDiv.classList.remove('hidden');
  }

  function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
  }

  function hideAllMessages() {
    statusDiv.classList.add('hidden');
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
  }
});
