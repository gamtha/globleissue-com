const mongoose = require('mongoose');
const config = require('./index');

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
