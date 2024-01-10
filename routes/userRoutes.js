const express = require('express');
const {home, createUser, loginUser} = require('../controllers/userController.js')


const router = express.Router();

router.get('/', home);
router.post('/createuser', createUser)
router.post('/login', loginUser);

module.exports = router;