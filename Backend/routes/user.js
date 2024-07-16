const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, deleteUser, userUpdate } = require('../controller/user.controller');
const validateObjectId = require('../middleware/verifyID.middleware')
const { verifyToken, verifyAdmin } = require('../middleware/authorization.middleware')

router.get('/', verifyAdmin, getAllUsers);
router.get('/user/:id', validateObjectId, verifyToken, getOneUser);
router.delete('/delete/:id', validateObjectId, verifyToken, deleteUser);
router.put('/update/:id', validateObjectId, userUpdate);

module.exports = router;
