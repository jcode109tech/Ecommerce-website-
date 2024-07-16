const express = require('express');
const router = express.Router();
const categoryRoute =  require('./category');
const productRoute = require('./product');
const authRoute = require('./auth');
const userRoute = require('./user')
const cors = require('cors');
const cartRoute = require('./cart')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.use('/api/categories', categoryRoute );
router.use('/api/products', productRoute);
router.use('/api/auth', authRoute);
router.use('/api/users', userRoute);
router.use('/api/carts', cartRoute);

module.exports = router;