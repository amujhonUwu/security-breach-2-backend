
const db = require('../config/database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const key = process.env.KEY || 'tu_clave_secreta'; // Asegúrate de que esta clave coincida con la de index.php

exports.login = (req, res) => {
    const { usuario, contrasena } = req.body;
    const hash = crypto.createHash('sha256').update(contrasena).digest('hex');

    db.query('SELECT * FROM usuario WHERE usuario = ? AND contrasena = ?', [usuario, hash], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            const user = results[0];
            const token = jwt.sign({ id: user.id }, key, { expiresIn: '1h' });

            res.json({ success: true, message: 'Login successful.', token: token });
        } else {
            res.json({ success: false, message: 'Invalid username or password.' });
        }
    });
};

// Resto del código para el registro y otros métodos
