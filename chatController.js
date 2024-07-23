const chatService = require('../services/chatService');

exports.sendMessage = async (req, res) => {
    try {
        const { recipientId, message } = req.body;
        const senderId = req.user.id;
        const chatMessage = await chatService.sendMessage(senderId, recipientId, message);
        res.status(200).json(chatMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const userId = req.user.id;
        const otherUserId = req.params.userId;
        const messages = await chatService.getMessages(userId, otherUserId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
