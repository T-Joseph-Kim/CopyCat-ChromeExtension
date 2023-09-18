let clipboardHistory = [];

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'storeClipboardData' && request.data) {
    clipboardHistory.push(request.data);

    if (clipboardHistory.length > 5) {
      clipboardHistory.shift();
    }
  }
});