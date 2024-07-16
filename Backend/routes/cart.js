const router = require('express').Router()
const { addToCart } = require('../controller/cart.controller');
const { verifyToken, verifyAdmin, verifyTokenAndAdmin} = require('../middleware/authorization.middleware')

router.post('/create', verifyToken, addToCart);

module.exports = router