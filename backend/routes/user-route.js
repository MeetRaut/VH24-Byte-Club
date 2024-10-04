const express = require('express');
const {
    registerUser,
    loginUser,
    registerInstitute,
    loginInstitute,
    registerAdmin,
    loginAdmin,
} = require('../controllers/auth-controller');

const router = express.Router();

router.post('/register/user', registerUser);
router.post('/login/user', loginUser);
router.post('/register/institute', registerInstitute);
router.post('/login/institute', loginInstitute);
router.post('/register/admin', registerAdmin);
router.post('/login/admin', loginAdmin);

module.exports = router;
