const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false } // Add this line

}, {
    timestamps: true,
});

module.exports = mongoose.model('Admin', adminSchema);
