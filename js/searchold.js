document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector('.search__form');
    const searchInput = document.querySelector('.search__input');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
		
		var searchToggle = document.getElementById('search-toggle');
		searchToggle.checked = true;
		
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            alert("Please enter a search term");
			searchToggle.checked = false;
            return;
        }

        const found = searchAndScrollToItem(searchTerm);
        if (!found) {
            alert("Not Found");
        }
    });

    function searchAndScrollToItem(searchTerm) {
        const items = document.querySelectorAll('body *');  // Adjust the selector based on where the items are
        for (let item of items) {
            if (item.textContent.trim().toLowerCase().includes(searchTerm)) {
                item.scrollIntoView({ behavior: 'smooth'});
                searchToggle.checked = false;
                return true;
            }
        }
        return false;
    }
});
