const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const Institute = require('../models/institute-model');
const Admin = require('../models/admin-model');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id) || await Institute.findById(decoded.id) || await Admin.findById(decoded.id);
            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found' }); // Add return here
            }

            next(); 
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};
const isInstituteOrAdmin = (req, res, next) => {
    if (req.user && (req.user.isInstitute || req.user.isAdmin)) {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an institute or admin' });
    }
};


const isInstitute = (req, res, next) => {
    if (req.user && req.user.isInstitute) {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an institute' });
    }
};

module.exports = {
    protect,
    isAdmin,
    isInstituteOrAdmin,
};
