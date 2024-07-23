const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { username, name, bio, profilePicture } = req.body;
        const user = await User.findOneAndUpdate(
            { username: req.params.username },
            { name, bio, profilePicture },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
