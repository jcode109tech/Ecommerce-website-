const router = require('express').Router();
const { createProduct, getAllProducts, getOneProduct, productUpdate, deleteProduct } = require('../controller/product.controller');
const joiValidator = require('../middleware/validator.midlleware');
const { productSchema } = require('../joischema/productValidator');
const validateObjectId = require('../middleware/verifyID.middleware')

router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/product/:id', validateObjectId, getOneProduct);
router.post('/update/:id', validateObjectId, productUpdate);
router.get('/delete/:id', validateObjectId, deleteProduct);
module.exports = router;