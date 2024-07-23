// affiliateController.js

const express = require('express');
const router = express.Router();
const { getAffiliateStats, generateAffiliateLink, trackReferral } = require('../services/affiliateService');

// GET affiliate statistics
router.get('/stats', async (req, res) => {
    try {
        const stats = await getAffiliateStats(req.user.id);  // Example: Fetch stats for logged-in user
        res.json(stats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST generate affiliate link
router.post('/generate-link', async (req, res) => {
    try {
        const link = await generateAffiliateLink(req.user.id, req.body.productID);  // Example: Generate link for a specific product
        res.json({ link });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST track referral
router.post('/track-referral', async (req, res) => {
    try {
        await trackReferral(req.body.referralCode, req.user.id);  // Example: Track referral with referral code
        res.status(200).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
