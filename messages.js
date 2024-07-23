const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const upload = require('../config/multerConfig');

router.post('/', upload.single('media'), messageController.sendMessage);
router.get('/:sender/:receiver', messageController.getMessages);

module.exports = router;
