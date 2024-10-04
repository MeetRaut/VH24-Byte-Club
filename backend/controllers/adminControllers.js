const User = require('../models/user-model');
const Institute = require('../models/institute-model');

// Fetch all user names for admin
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'name'); // Fetch only 'username' field
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users', error: error.message });
    }
};

// Fetch all institute names for admin
const getAllInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.find({}, 'name'); // Fetch only 'name' field
        res.json(institutes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve institutes', error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getAllInstitutes,
};
