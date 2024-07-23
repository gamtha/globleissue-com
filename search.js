// frontend/assets/js/search.js

function searchUsers(query) {
    fetch(`/api/search?query=${query}`)
        .then(response => response.json())
        .then(users => displaySearchResults(users))
        .catch(error => console.error('Error searching users:', error));
}

function displaySearchResults(users) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = user.name;
        resultsContainer.appendChild(userElement);
    });
}
