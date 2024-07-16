const router = require('express').Router();
const { createProduct, getAllProducts, getOneProduct, productUpdate, deleteProduct } = require('../controller/product.controller');
const joiValidator = require('../middleware/validator.midlleware');
const { productSchema } = require('../joischema/productValidator');
const validateObjectId = require('../middleware/verifyID.middleware')
const { verifyToken, verifyAdmin, verifyTokenAndAdmin } = require('../middleware/authorization.middleware')

router.post('/create', verifyTokenAndAdmin, createProduct);
router.get('/', getAllProducts);
router.get('/product/:id', validateObjectId, getOneProduct);
router.put('/update/:id', validateObjectId, verifyTokenAndAdmin, productUpdate);
router.delete('/delete/:id', validateObjectId, verifyTokenAndAdmin, deleteProduct);
module.exports = router;