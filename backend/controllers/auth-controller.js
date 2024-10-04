const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin-model');
const User = require('../models/user-model');
const Institute = require('../models/institute-model');
const generateToken = require('../utils/generateToken');

// Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    if (user) {
        res.status(201).json({ _id: user._id, name: user.name, email: user.email, token: generateToken(user._id) });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ _id: user._id, name: user.name, email: user.email, token: generateToken(user._id) });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// Register Institute
const registerInstitute = async (req, res) => {
    const { name, email, password } = req.body;

    const instituteExists = await Institute.findOne({ email });
    if (instituteExists) {
        return res.status(400).json({ message: 'Institute already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const institute = await Institute.create({ name, email, password: hashedPassword });

    if (institute) {
        res.status(201).json({ _id: institute._id, name: institute.name, email: institute.email, token: generateToken(institute._id) });
    } else {
        res.status(400).json({ message: 'Invalid institute data' });
    }
};

// Login Institute
const loginInstitute = async (req, res) => {
    const { email, password } = req.body;

    const institute = await Institute.findOne({ email });
    if (institute && (await bcrypt.compare(password, institute.password))) {
        res.json({ _id: institute._id, name: institute.name, email: institute.email, token: generateToken(institute._id) });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// Register Admin
const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
        return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, email, password: hashedPassword });

    if (admin) {
        res.status(201).json({ _id: admin._id, name: admin.name, email: admin.email, token: generateToken(admin._id) });
    } else {
        res.status(400).json({ message: 'Invalid admin data' });
    }
};

// Login Admin
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({ _id: admin._id, name: admin.name, email: admin.email, token: generateToken(admin._id) });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    registerInstitute,
    loginInstitute,
    registerAdmin,
    loginAdmin,
};
