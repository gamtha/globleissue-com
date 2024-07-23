const { sendEmail } = require('../services/emailService');
const { User } = require('../models/User');
const crypto = require('crypto');

const sendResetEmail = async (email) => {
    const token = crypto.randomBytes(20).toString('hex');
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `http://yourdomain.com/reset-password?token=${token}`;
    const message = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                    Please click on the following link, or paste this into your browser to complete the process:\n\n
                    ${resetUrl}\n\n
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`;

    await sendEmail({
        to: email,
        subject: 'Password Reset',
        text: message
    });
};

const resetPassword = async (token, newPassword) => {
    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        throw new Error('Password reset token is invalid or has expired');
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
};

module.exports = {
    sendResetEmail,
    resetPassword
};
