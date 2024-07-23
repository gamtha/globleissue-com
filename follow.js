function followUser(currentUser, targetUser) {
    fetch('/api/users/follow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentUser, targetUser })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}

function unfollowUser(currentUser, targetUser) {
    fetch('/api/users/unfollow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentUser, targetUser })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}
