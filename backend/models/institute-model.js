const mongoose = require('mongoose');

const instituteSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isInstitute: { type: Boolean, default: false } // Add this line
}, {
    timestamps: true,
});

module.exports = mongoose.model('Institute', instituteSchema);
