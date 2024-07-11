const router = require('express').Router();
const { createCategory, findAllCategory, getOneCategory, categoryUpdate, categoryDelete } = require('../controller/categorycontroller');
const validate = require('../middleware/validator.midlleware')
const { categorySchema } = require('../joischema/categoryValidator')

router.post('/create', validate(categorySchema), createCategory);
router.get('/', findAllCategory);
router.get('/categories/:id', getOneCategory);
router.post('/update/:id', validate(categorySchema), categoryUpdate);
router.get('/delete/:id', categoryDelete);

module.exports = router;