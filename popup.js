document.getElementById('addsite').addEventListener('click', () => {
  const url = chrome.runtime.getURL('addsite.html');
  window.open(url, '_blank');
});