// controllers/searchController.js

const User = require('../models/User');

async function searchUsers(query) {
    try {
        const results = await User.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } },
            ]
        });
        return results;
    } catch (error) {
        console.error('Error searching users:', error);
        throw new Error('Error searching users');
    }
}

module.exports = {
    searchUsers
};
