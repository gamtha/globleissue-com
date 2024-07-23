document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mocking the server response
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Signup successful!';
    messageDiv.style.color = 'green';
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
});

document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mocking the server response
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Login successful!';
    messageDiv.style.color = 'green';
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
});

document.getElementById('forgotPasswordForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Mocking the server response
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Continue with Any Password!';
    messageDiv.style.color = 'green';
    setTimeout(() => window.location.href = 'login.html', 2000);
});
