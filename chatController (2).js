const Chat = require('../models/Chat');

exports.sendMessage = async (req, res) => {
    const { chatId, senderId, message } = req.body;
    try {
        const chat = await Chat.findById(chatId);
        chat.messages.push({ sender: senderId, message });
        await chat.save();
        res.json(chat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMessages = async (req, res) => {
    const { chatId } = req.params;
    try {
        const chat = await Chat.findById(chatId).populate('messages.sender', 'username profilePicture');
        res.json(chat.messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
