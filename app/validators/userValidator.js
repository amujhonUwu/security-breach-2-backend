const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreate = [
    check("nombre")
    .exists().not().isEmpty(),

    check("correo")
    .exists().not().isEmpty()
    .isEmail(),

    check("celular")
    .exists().not().isEmpty()
    .isNumeric(),

    check("usuario")
    .exists().not().isEmpty(),

    check("contrasena")
    .exists().not().isEmpty(),
    
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateCreate}