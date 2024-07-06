const router = require('express').Router();
const { createCategory, findAllCategory, getOneCategory, categoryUpdate, categoryDelete } = require('../controller/categorycontroller');
const validate = require('../middleware/validator.midlleware')
const { categorySchema } = require('../joischema/categoryValidator')

router.post('/createcategory', validate(categorySchema), createCategory);
router.get('/categories', findAllCategory);
router.get('/categories/:id', getOneCategory);
router.post('/updatecategory/:id', validate(categorySchema), categoryUpdate);
router.get('/deletecategory/:id', categoryDelete);

module.exports = router;