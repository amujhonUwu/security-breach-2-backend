const express = require('express');
const Controller = require('../controllers/authController');
const Validator = require("../validators/userValidator");
const router = express.Router();


router.post('/login', Controller.login);

router.post('/register', Validator.validateCreate, Controller.register);

module.exports = router;
