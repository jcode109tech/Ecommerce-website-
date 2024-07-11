const router = require('express').Router();
const { register, verifyEmail, loginUser } = require('../controller/auth.controller');

router.post('/register', register);
router.post('/verify-otp', verifyEmail);
router.post('/login', loginUser);

module.exports = router;