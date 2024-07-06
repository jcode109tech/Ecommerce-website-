const router = require('express').Router();
const { createProduct, getAllProducts, getOneProduct } = require('../controller/product.controller');
const joiValidator = require('../middleware/validator.midlleware');
const { productSchema } = require('../joischema/productValidator');

router.post('/createproduct', joiValidator(productSchema), createProduct);
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
module.exports = router;