const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    query: String,
    results: Array,
}, { timestamps: true });

module.exports = mongoose.model('Search', searchSchema);
