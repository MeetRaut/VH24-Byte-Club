const express = require('express');
const { protect, isInstituteOrAdmin,isAdmin } = require('../middleware/authMiddleware');
const {
    postDonationNeed,
    getDonationNeeds,
    donateToInstitute,
    getDonationsForAdmin,
} = require('../controllers/donation-controller');

const router = express.Router();

router.post('/donation-need', protect, isInstituteOrAdmin, postDonationNeed);
router.get('/donation-needs', protect, isInstituteOrAdmin, getDonationNeeds);
router.post('/donate', protect, donateToInstitute);
router.get('/admin/donations', protect, isAdmin, getDonationsForAdmin);

module.exports = router;
