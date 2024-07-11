const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, deleteUser, userUpdate } = require('../controller/user.controller');
const validateObjectId = require('../middleware/verifyID.middleware')

router.get('/', getAllUsers);
router.get('/user/:id', validateObjectId, getOneUser);
router.delete('/delete/:id', validateObjectId, deleteUser);
router.put('/update/:id', validateObjectId, userUpdate);

module.exports = router;
