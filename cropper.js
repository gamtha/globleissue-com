let cropper;
const fileInput = document.getElementById('file-input');
const profilePicture = document.getElementById('profile-picture');
const cropModal = document.getElementById('crop-modal');
const imageToCrop = document.getElementById('image-to-crop');

function openFileInput() {
    fileInput.click();
}

function loadImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageToCrop.src = e.target.result;
            cropModal.style.display = 'block';
            cropper = new Cropper(imageToCrop, {
                aspectRatio: 1,
                viewMode: 1,
                background: false,
            });
        };
        reader.readAsDataURL(file);
    }
}

function cropImage() {
    const canvas = cropper.getCroppedCanvas({
        width: 150,
        height: 150,
    });
    profilePicture.src = canvas.toDataURL('image/png');
    closeModal();
    saveProfilePicture(profilePicture.src); // Save the cropped image
}

function closeModal() {
    cropModal.style.display = 'none';
    cropper.destroy();
}

function saveProfilePicture(imageData) {
    // Function to save the cropped profile picture to the server
    fetch('/api/user/profile-picture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ profilePicture: imageData })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Profile picture updated successfully.');
        } else {
            alert('Failed to update profile picture.');
        }
    })
    .catch(error => {
        console.error('Error updating profile picture:', error);
    });
}
