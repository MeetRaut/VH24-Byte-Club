const express = require('express');
const { getAllUsers, getAllInstitutes } = require('../controllers/adminControllers');
const { protect, isAdmin } = require('../middleware/authMiddleware'); // Import protect and isAdmin

const router = express.Router();

// Route to get all user names for admin
router.get('/users', protect, isAdmin, getAllUsers);

// Route to get all institute names for admin
router.get('/institutes', protect, isAdmin, getAllInstitutes);

module.exports = router;
