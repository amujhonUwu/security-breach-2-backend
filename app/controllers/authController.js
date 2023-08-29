
const db = require('../config/database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const key = process.env.KEY; // Asegúrate de que esta clave coincida con la de index.php

exports.login = (req, res) => {
    const { usuario, contrasena } = req.body;
    const hash = crypto.createHash('sha256').update(contrasena).digest('hex');

    db.query('SELECT * FROM usuario WHERE usuario = ? AND contrasena = ?', [usuario, hash], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            const user = results[0];
            const token = jwt.sign({ id: user.id }, key, { expiresIn: '1h' });

            res.json({ success: true, message: 'Inicio de sesión exitoso', token: token });
        } else {
            res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    });
};

exports.register = (req, res) => {
    const { nombre, correo, celular, usuario, contrasena } = req.body;

    const hash = crypto.createHash('sha256').update(contrasena).digest('hex');

    db.query('INSERT INTO usuario (nombre, correo, celular, usuario, contrasena) VALUES (?, ?, ?, ?, ?)', [nombre, correo, celular, usuario, hash], (error, results) => {
        if (error) {
          res.json({ success: false, message: 'Error registrando al usuario'});
          throw error;
        }
        res.json({ success: true, message: 'Registro exitoso', userId: results.insertId });
    });
};
