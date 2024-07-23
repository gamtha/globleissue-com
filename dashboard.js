document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard JS Loaded');

    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '/login.html';
        return;
    }

    // Example: Fetch user data
    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
            const userData = await response.json();
            console.log('User Data:', userData);
            // Render user data
            document.getElementById('username').textContent = userData.username;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    fetchUserData();
});