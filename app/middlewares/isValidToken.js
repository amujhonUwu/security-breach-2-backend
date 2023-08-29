const jwt = require('jsonwebtoken');
require("dotenv").config();


const validateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    jwt.verify(token, process.env.KEY, (err, id) => {
        if (err) {
            return res.status(403).json({ message: 'Token no válido' });
        }
        req.id = id;
        next();
    });
};

module.exports = {validateToken};
