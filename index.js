const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const chatController = require('../controllers/chatController');

router.post('/users/search', userController.searchUsers);
router.post('/users/follow', userController.followUser);
router.post('/users/unfollow', userController.unfollowUser);
router.post('/chats/send', chatController.sendMessage);
router.get('/chats/:chatId', chatController.getMessages);

module.exports = router;
