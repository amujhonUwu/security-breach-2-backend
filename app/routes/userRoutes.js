const express = require('express');
const Controller = require("../controllers/userController")
const router = express.Router();


//router.get("/", Controller.getAllUsuarios);

router.get("/:id", Controller.getUsuarioById);

router.put('/:id', Controller.updateUsuario);

router.delete('/:id', Controller.deleteUsuario);


module.exports = router;