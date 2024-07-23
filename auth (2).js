document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    console.log('Form submitted');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Sign up successful! Redirecting to dashboard...');
            console.log('Redirecting to ../private/dashboard.html'); // Debug message
            window.location.href = '/private/dashboard.html';
        } else {
            alert(result.message || 'Error during sign up');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});
