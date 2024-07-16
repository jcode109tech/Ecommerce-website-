const router = require('express').Router();
const { createCategory, findAllCategory, getOneCategory, categoryUpdate, categoryDelete } = require('../controller/categorycontroller');
const validate = require('../middleware/validator.midlleware')
const { categorySchema } = require('../joischema/categoryValidator')
const { verifyToken, verifyAdmin } = require('../middleware/authorization.middleware');

router.post('/create', validate(categorySchema), verifyAdmin, createCategory);
router.get('/', findAllCategory);
router.get('/category/:id', getOneCategory);
router.put('/update/:id', validate(categorySchema), verifyAdmin, categoryUpdate);
router.delete('/delete/:id', verifyAdmin, categoryDelete);

module.exports = router;