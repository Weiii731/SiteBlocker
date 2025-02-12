// // Listen for tab updates
// console.log("here");
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log("now i'm on the inside");
//   console.log(changeInfo.status);
//   console.log("taburl" + tab.url);
//   if (tab.url) {
//     // Get stored sites from storage
//     chrome.storage.sync.get(['sites'], function(result) {
//       const sites = result.sites || [];
//       // Check if current URL contains any of the stored sites
//       console.log(sites);
//     });
//   }
// });