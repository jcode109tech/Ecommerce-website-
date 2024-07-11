const jwt = require('jsonwebtoken');
const configVariable = require('../config/config');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const user = await jwt.verify(token, configVariable.JWT_SECRET);
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid Token' });
    }
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.role === 'Admin') {
            next();
        } else {
            res.status(403).json({ message: 'Access forbidden: Admins only' });
        }
    });
};

module.exports = { verifyToken, verifyAdmin };
