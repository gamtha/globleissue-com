// server.js (Node.js/Express)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/signup', (req, res) => {
    const { email, password } = req.body;

    // Add logic to handle signup, such as saving to a database
    if (email && password) {
        // Assuming signup is successful
        res.status(200).json({ message: 'Signup successful' });
    } else {
        res.status(400).json({ message: 'Signup failed' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
