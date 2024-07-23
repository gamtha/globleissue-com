const User = require('../models/User');

exports.searchUsers = async (req, res) => {
    const { query } = req.body;
    try {
        const users = await User.find({ username: { $regex: query, $options: 'i' } });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.followUser = async (req, res) => {
    const { userId, targetId } = req.body;
    try {
        const user = await User.findById(userId);
        const targetUser = await User.findById(targetId);

        if (!user.following.includes(targetId)) {
            user.following.push(targetId);
            targetUser.followers.push(userId);
        }

        await user.save();
        await targetUser.save();

        res.json({ message: 'Successfully followed' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.unfollowUser = async (req, res) => {
    const { userId, targetId } = req.body;
    try {
        const user = await User.findById(userId);
        const targetUser = await User.findById(targetId);

        user.following = user.following.filter(id => id.toString() !== targetId);
        targetUser.followers = targetUser.followers.filter(id => id.toString() !== userId);

        await user.save();
        await targetUser.save();

        res.json({ message: 'Successfully unfollowed' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
