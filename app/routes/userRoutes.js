const express = require('express');
const Controller = require("../controllers/userController")
const Validator = require("../validators/userValidator");
const TokenValidator = require("../middlewares/isValidToken");
const router = express.Router();


// router.delete('/:id', Controller.deleteUsuario);

// router.get('/:id', Controller.getUserInfo);

// router.put('/', Controller.updateUserInfo);


 router.delete('/:id', Controller.deleteUsuario);
 router.get('/', TokenValidator.validateToken, Controller.getUserInfo);
 router.put('/', Controller.updateUserInfo);

module.exports = router;