// Function to copy affiliate link to clipboard
function copyAffiliateLink() {
    const affiliateLink = document.getElementById('affiliateLink').value;
    navigator.clipboard.writeText(affiliateLink);
    alert('Affiliate link copied to clipboard!');
}

// Function to share promotional message on social media
function shareOnSocialMedia() {
    const affiliateLink = document.getElementById('affiliateLink').value;
    const promoMessage = document.getElementById('promoMessage').value;
    // Simulate opening social media with prefilled message
    const socialMediaUrl = `https://gamtha.github.io/globleissue-com/{encodeURIComponent(promoMessage)}&link=${encodeURIComponent(affiliateLink)}`;
    window.open(socialMediaUrl, '_blank');
}

// Function to send promotional email
function sendEmail() {
    const affiliateLink = document.getElementById('affiliateLink').value;
    const promoMessage = document.getElementById('promoMessage').value;
    // Simulate sending email
    alert(`Sending email:\n${promoMessage}\nLink: ${affiliateLink}`);
}

// Function to handle logout
function logout() {
    alert('Logging out...');
    // Implement logout functionality here
}

// Function to fetch and update affiliate stats
async function fetchAffiliateStats() {
    try {
        const response = await fetch('/api/affiliate/stats', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch affiliate stats');
        }
        const stats = await response.json();
        document.getElementById('earnings').textContent = stats.earnings.toFixed(2);
        document.getElementById('referrals').textContent = stats.referrals;
        document.getElementById('conversionRate').textContent = `${stats.conversionRate}%`;
        document.getElementById('affiliateLink').value = stats.affiliateLink;
    } catch (error) {
        console.error('Error fetching affiliate stats:', error);
        // Handle error: Display a message to the user or retry fetching
    }
}

// Fetch affiliate stats on page load
window.addEventListener('DOMContentLoaded', fetchAffiliateStats);
