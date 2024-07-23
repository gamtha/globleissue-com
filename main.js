// Example: Initialize main functionalities
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components or set up event listeners
    // Example: Initialize navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            toggleMenu();
        });
    }
});

// Example: Global function to toggle menu
function toggleMenu() {
    const menu = document.querySelector('.dropdown-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}
