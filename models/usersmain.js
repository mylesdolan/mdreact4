const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsersMainSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    avatar: {
        type: String
    },

    instatoken: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = UsersMain = mongoose.model('usersmain', UsersMainSchema);
