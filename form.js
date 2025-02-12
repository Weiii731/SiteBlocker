document.getElementById('siteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = {
      sites: document.getElementById('site_name').value
  };
  console.log(formData);
  
  // Save to Chrome storage
  chrome.storage.sync.set(formData, () => {
      alert('Information saved successfully!');
  });

  document.getElementById('siteForm').reset();
});

// // Load saved data when page opens
// window.addEventListener('load', () => {
//   chrome.storage.sync.get([
//       'sites'
//   ], (data) => {
//       Object.keys(data).forEach(key => {
//           const element = document.getElementById(key);
//           if (element) {
//               element.value = data[key] || '';
//           }
//       });
//   });
// }); 

// // grabbing saved sites
// chrome.storage.sync.get(['sites'], function(result) {
//   const sites = result.sites || [];
//   console.log(sites);
//   // const sitelist = sites.split('\n');
//   // console.log(sitelist);
// });