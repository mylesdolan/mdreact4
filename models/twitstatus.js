const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TwitStatusSchema = new Schema({
    statusid: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = TwitStatus = mongoose.model('TwitStatus', TwitStatusSchema);
