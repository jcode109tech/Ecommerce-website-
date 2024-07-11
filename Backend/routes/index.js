const express = require('express');
const router = express.Router();
const categoryRoute =  require('./category');
const productRoute = require('./product');
const authRoute = require('./auth');
const userRoute = require('./user')

router.use('/api/categories', categoryRoute );
router.use('/api/products', productRoute);
router.use('/api/auth', authRoute);
router.use('/api/users', userRoute)

module.exports = router;