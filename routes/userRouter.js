const { Router } = require('express');
const authController = require('../controllers/userController');
const router = Router();

router.get('/listUser', authController.getAllUsers)
router.get('/user/:user_id', authController.getUsersDetail)

module.exports = router;