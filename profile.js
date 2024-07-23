// Initialize Cropper instance
let cropper;

// Function to preview selected image before uploading
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Destroy previous cropper instance if exists
        if (cropper) {
            cropper.destroy();
        }

        // Replace profile picture with cropper view
        const image = document.getElementById('profile-picture');
        image.src = e.target.result;

        // Initialize cropper
        const cropperElement = document.getElementById('profile-picture');
        cropper = new Cropper(cropperElement, {
            aspectRatio: 1, // Crop aspect ratio (square)
            viewMode: 1,    // Display mode (cropper inside container)
            dragMode: 'move', // Move mode
            crop: function(event) {
                // Optional: You can handle crop events here if needed
            }
        });

        // Show the cropper container
        cropperElement.parentElement.style.display = 'block';
    };

    // Read file as data URL
    reader.readAsDataURL(file);
}

// Function to handle cropping and saving cropped image
function cropImage() {
    // Get cropped canvas data
    const canvas = cropper.getCroppedCanvas({
        width: 200, // Final image width (adjust as needed)
        height: 200, // Final image height (adjust as needed)
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high'
    });

    // Convert canvas to data URL
    const croppedImage = canvas.toDataURL('image/png');

    // Optionally, render the cropped image as a circular profile picture
    renderCircularImage(croppedImage);

    // You can now send 'croppedImage' to your backend for saving or further processing
}

// Function to render a circular profile picture
function renderCircularImage(imageData) {
    const profileImage = document.getElementById('profile-picture');
    profileImage.src = imageData;
    profileImage.style.borderRadius = '50%';
}

// Function to open file input for changing profile photo
function openFileInput() {
    document.getElementById('file-input').click();
}

// Example function to simulate saving the cropped image (you should implement this function as needed)
function saveCroppedImage() {
    // Simulate saving image to backend
    alert('Saving profile picture...'); // Replace with actual save logic
}
