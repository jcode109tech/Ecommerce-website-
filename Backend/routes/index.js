const express = require('express');
const router = express.Router();
const categoryRoute =  require('./category');
const productRoute = require('./product');

router.use('/api/categorys', categoryRoute );
router.use('/api/products', productRoute);

module.exports = router;