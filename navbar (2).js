// Example function in navbar.js
function logout() {
    localStorage.removeItem('token');
    window.location.href = '/login.html'; // Redirect to login page after logout
}
