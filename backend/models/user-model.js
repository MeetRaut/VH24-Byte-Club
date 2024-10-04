const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isUser: { type: Boolean, default: false } // Add this line

}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
