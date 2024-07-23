// Example function to create a new affiliate
async function createAffiliate(name, email) {
    try {
        const response = await fetch('/api/affiliates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('New affiliate created:', data);
    } catch (error) {
        console.error('Error creating affiliate:', error);
    }
}

// Example function to fetch all affiliates
async function getAllAffiliates() {
    try {
        const response = await fetch('/api/affiliates');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('All affiliates:', data);
    } catch (error) {
        console.error('Error fetching affiliates:', error);
    }
}

// Usage examples
createAffiliate('John Doe', 'john@example.com');
getAllAffiliates();
