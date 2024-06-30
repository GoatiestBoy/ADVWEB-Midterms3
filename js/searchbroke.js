function scrollToItem(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Toggle the checkbox to indicate searching has started
    var searchToggle = document.getElementById('search-toggle');
    searchToggle.checked = true;

    // Get the search input value
    var searchValue = document.getElementById('search').value.trim();

    if (!searchValue) {
        alert("Please enter an item ID or class to search.");
        searchToggle.checked = false;
        return false;
    }

    // Attempt to find the element by ID
    var targetElement = document.getElementById(searchValue);

    // If not found by ID, attempt to find by class name
    if (!targetElement) {
        targetElement = document.querySelector('.' + searchValue);
    }

    if (targetElement) {
    	// Toggle the checkbox to hide the background
        searchToggle.checked = false;
        // Wait for a short period before scrolling
        setTimeout(() => {
          // Scroll to the element
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 1000); // 1s delay (testing)
    } else {
        alert("Item not found.");
        // Toggle the checkbox to indicate searching has ended
        //searchToggle.checked = false;
    }

    return false; // Prevent form from submitting
}
