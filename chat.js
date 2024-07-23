// Initialize Socket.IO for real-time messaging
const socket = io();

// Function to search for a user by code or ID
function searchUser() {
    const searchInput = document.getElementById('search-input').value;
    // Perform search logic here (replace with actual backend API call)
    fetch(`/api/user/search?query=${encodeURIComponent(searchInput)}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = ''; // Clear previous results
            if (data && data.length > 0) {
                data.forEach(user => {
                    const userElement = document.createElement('div');
                    userElement.classList.add('user');
                    userElement.textContent = user.username;
                    userElement.addEventListener('click', () => {
                        // Example: Open chat with selected user
                        openChat(user.username);
                    });
                    searchResults.appendChild(userElement);
                });
            } else {
                searchResults.innerHTML = '<div>No users found.</div>';
            }
        })
        .catch(error => {
            console.error('Error searching users:', error);
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = '<div>Error fetching users.</div>';
        });
}

// Function to open a chat with a selected user
function openChat(username) {
    // Example: Fetch chat history with selected user from backend
    fetch(`/api/chat/history?user=${encodeURIComponent(username)}`)
        .then(response => response.json())
        .then(messages => {
            const chatWindow = document.getElementById('chat-window');
            chatWindow.innerHTML = ''; // Clear previous chat
            if (messages && messages.length > 0) {
                messages.forEach(message => {
                    appendMessage(message.sender, message.text);
                });
            } else {
                chatWindow.innerHTML = '<div>No messages yet.</div>';
            }
        })
        .catch(error => {
            console.error('Error fetching chat history:', error);
            const chatWindow = document.getElementById('chat-window');
            chatWindow.innerHTML = '<div>Error fetching chat history.</div>';
        });
}

// Function to send a message
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('chat-message').value;
    const recipient = document.getElementById('chat-recipient').value; // Assuming you have a recipient field
    // Send message logic here (replace with actual backend API call)
    fetch('/api/chat/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            recipient: recipient,
            message: messageInput
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            appendMessage('You', messageInput); // Append message locally for instant feedback
            document.getElementById('chat-message').value = ''; // Clear input field after sending
        } else {
            console.error('Message sending failed:', data.error);
            // Handle error if message sending fails
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
        // Handle error if fetch request fails
    });
});

// Function to receive and display a message
socket.on('chat message', function(message) {
    appendMessage(message.sender, message.text);
});

// Function to append message to chat window
function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
}
