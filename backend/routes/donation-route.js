const express = require('express');
const { getDonationsForAdmin } = require('../controllers/donation-controller');
const { protect, isAdmin } = require('../middleware/authMiddleware');
const { getDonationSummary } = require('../controllers/donation-controller');

const router = express.Router();

// Admin Donation routes
router.get('/admin/donations', protect, isAdmin, getDonationsForAdmin); // Admin sees all donations
router.get('/donation-summary', getDonationSummary);
module.exports = router;
