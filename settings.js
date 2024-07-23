// Example JavaScript for settings page functionality

// Simulated user data
const userData = {
    username: "example_user",
    email: "user@example.com",
    emailNotifications: true,
    pushNotifications: false
};

// Function to populate form with user data
function populateForm() {
    document.getElementById('username').value = userData.username;
    document.getElementById('email').value = userData.email;
    document.getElementById('email-notifications').checked = userData.emailNotifications;
    document.getElementById('push-notifications').checked = userData.pushNotifications;
}

// Function to enable editing of account settings
function editAccount() {
    document.getElementById('username').disabled = false;
    document.getElementById('email').disabled = false;
    document.querySelector('#account-settings-form button[type="submit"]').style.display = "inline-block";
}

// Function to handle saving changes to account settings
document.getElementById('account-settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const updatedUsername = document.getElementById('username').value;
    const updatedEmail = document.getElementById('email').value;
    // Simulated API call to update user data
    // Replace with actual API call in your application
    console.log("Updating user data...");
    console.log("New Username:", updatedUsername);
    console.log("New Email:", updatedEmail);
    // Simulate success message
    alert("Account settings updated successfully!");
    // Disable inputs and hide save button after saving
    document.getElementById('username').disabled = true;
    document.getElementById('email').disabled = true;
    document.querySelector('#account-settings-form button[type="submit"]').style.display = "none";
});

// Function to handle saving notification settings
document.getElementById('notification-settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailNotifications = document.getElementById('email-notifications').checked;
    const pushNotifications = document.getElementById('push-notifications').checked;
    // Simulated API call to update notification settings
    // Replace with actual API call in your application
    console.log("Updating notification settings...");
    console.log("Email Notifications:", emailNotifications);
    console.log("Push Notifications:", pushNotifications);
    // Simulate success message
    alert("Notification settings updated successfully!");
});
