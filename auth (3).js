const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { sendResetEmail, resetPassword } = require('../controllers/authController');

router.use(bodyParser.json());

router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        await sendResetEmail(email);
        res.status(200).json({ message: 'Password reset link sent!' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending reset link' });
    }
});

router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        await resetPassword(token, newPassword);
        res.status(200).json({ message: 'Password has been reset successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password' });
    }
});

module.exports = router;
