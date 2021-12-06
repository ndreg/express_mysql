const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/all', userController.getUserAll);

router.get('/user/add', userController.getAddUser);
router.post('/user/add', userController.postAddUser);

router.get('/user/delete/:id', userController.getDeleteUser);
router.post('/user/delete/:id', userController.postDeleteUser);

router.get('/user/update/:id', userController.getUpdateUser);
router.post('/user/update/:id', userController.postUpdateUser);

module.exports = router;
