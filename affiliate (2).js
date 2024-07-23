// D:\my-webapp\api\affiliate.js

const express = require('express');
const router = express.Router();
const affiliateController = require('../controllers/affiliateController');
const authMiddleware = require('../middleware/authMiddleware');

// Secure routes with authentication middleware
router.post('/track-referral', authMiddleware, affiliateController.trackReferral);
router.get('/get-earnings', authMiddleware, affiliateController.getEarnings);

module.exports = router;
