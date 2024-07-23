const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mkv/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimeType && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type.'));
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 10000000 }, // 10 MB limit
    fileFilter
});

module.exports = upload;
