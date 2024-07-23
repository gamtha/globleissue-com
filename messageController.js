const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, text } = req.body;
        let media = null;
        if (req.file) {
            media = req.file.path;
        }

        const newMessage = new Message({ sender, receiver, text, media });
        await newMessage.save();

        res.json(newMessage);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getMessages = async (req, res) => {
    try {
        const { sender, receiver } = req.params;
        const messages = await Message.find({ 
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ] 
        }).sort({ timestamp: 1 });

        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
