const profileService = require('../services/profileService');

exports.getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const profile = await profileService.getProfile(userId);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const profileData = req.body;
        const updatedProfile = await profileService.updateProfile(userId, profileData);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAffiliateInfo = async (req, res) => {
    try {
        const userId = req.params.id;
        const affiliateInfo = await profileService.getAffiliateInfo(userId);
        res.status(200).json(affiliateInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
