const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('../config');

exports.registerUser = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Email already in use');
    }

    const user = new User({ name, email, password });
    await user.save();
    return user;
};

exports.authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    return token;
};

exports.sendPasswordResetEmail = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Email not found');
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
    // Simulate sending email with token (implementation depends on email service)
    console.log(`Password reset token: ${token}`);
    // Example: await emailService.sendPasswordResetEmail(user.email, token);
};

exports.resetPassword = async (token, newPassword) => {
    let decoded;
    try {
        decoded = jwt.verify(token, config.jwtSecret);
    } catch (error) {
        throw new Error('Invalid or expired token');
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.password = newPassword;
    await user.save();
};
