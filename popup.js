document.addEventListener('DOMContentLoaded', function () {
    const clipboardHistory = [];
  
    function updateClipboardHistory() {
      const historyList = document.getElementById('clipboard-history');
      historyList.innerHTML = '';
  
      const recentItems = clipboardHistory.slice(-5).reverse();
      recentItems.forEach(function (item, index) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
      });
    }
    let lastClipboardText = '';
    // Listen for the 'copy' event
    document.addEventListener('copy', function (event) {
      navigator.clipboard.readText().then(function (clipboardText) {
        if (clipboardText && clipboardText.trim() !== '' && clipboardText !== lastClipboardText) {
          clipboardHistory.push(clipboardText);
  
          if (clipboardHistory.length > 5) {
            clipboardHistory.shift();
          }
          lastClipboardText = clipboardText;
          updateClipboardHistory();
        }
      });
    });
  });

// document.addEventListener('DOMContentLoaded', function () {
//     const clipboardHistory = [];
  
//     function updateClipboardHistory() {
//       const historyList = document.getElementById('clipboard-history');
//       historyList.innerHTML = '';
  
//       const recentItems = clipboardHistory.slice(-5).reverse();
//       recentItems.forEach(function (item, index) {
//         const listItem = document.createElement('li');
//         listItem.textContent = item;
//         historyList.appendChild(listItem);
//       });
//     }
  
//     setInterval(function () {
//       navigator.clipboard.readText().then(function (clipboardText) {
//         if (clipboardText && clipboardText.trim() !== '') {
//           clipboardHistory.push(clipboardText);
  
//           if (clipboardHistory.length > 5) {
//             clipboardHistory.shift();
//           }
  
//           updateClipboardHistory();
//         }
//       });
//     }, 3000);
//   });