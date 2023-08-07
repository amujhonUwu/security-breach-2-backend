const express = require('express');
const Controller = require('../controllers/authController');
const router = express.Router();


router.post('/login', Controller.login);

router.post('/register', Controller.register);

module.exports = router;
