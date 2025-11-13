const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/users', userController.getAllUser);
router.get('/users/:Id', userController.getUser);
router.delete('/users/:Id', userController.DeleteUser);


module.exports = router;