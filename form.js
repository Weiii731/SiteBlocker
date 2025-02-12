document.getElementById('siteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get existing sites first
    chrome.storage.sync.get(['sites'], function(result) {
        const existingSites = result.sites ? result.sites.split(',') : [];
        const newSite = document.getElementById('site_name').value;
        
        // Add new site to the array
        existingSites.push(newSite);
        
        // Save updated sites array
        chrome.storage.sync.set({ sites: existingSites.join(',') }, () => {
            document.getElementById('siteForm').reset();
            displaySites(); // Refresh the display
        });
    });
});

// Function to display sites
function displaySites() {
    chrome.storage.sync.get(['sites'], function(result) {
        const sitesDisplay = document.getElementById('sitesDisplay');
        const sites = result.sites ? result.sites.split(',') : [];
        
        // Clear current display
        sitesDisplay.innerHTML = '';
        
        // Create list of sites
        if (sites.length > 0) {
            const ul = document.createElement('ul');
            sites.forEach((site, index) => {
                const li = document.createElement('li');
                
                // Create site text
                const siteText = document.createElement('span');
                siteText.textContent = site;
                
                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.onclick = function() {
                    // Remove the site from array
                    sites.splice(index, 1);
                    
                    // Save updated sites back to storage
                    chrome.storage.sync.set({ sites: sites.join(',') }, () => {
                        displaySites(); // Refresh the display
                    });
                };
                
                // Add elements to li
                li.appendChild(siteText);
                li.appendChild(deleteBtn);
                ul.appendChild(li);
            });
            sitesDisplay.appendChild(ul);
        } else {
            sitesDisplay.textContent = 'No sites added yet.';
        }
    });
}

// Load and display sites when page opens
window.addEventListener('load', displaySites);