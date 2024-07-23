// api/search.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Search users by name or other criteria
router.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const results = await User.find({ $or: [{ name: query }, { email: query }] });
        res.json(results);
    } catch (error) {
        console.error('Error searching users:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
