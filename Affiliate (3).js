// Affiliate.js

const mongoose = require('mongoose');

const affiliateSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tokensEarned: {
        type: Number,
        default: 0
    },
    referrals: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Affiliate', affiliateSchema);
