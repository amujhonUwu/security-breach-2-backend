// usuarioController.js
const db = require('../config/database');
const crypto = require('crypto');

exports.getAllUsuarios = (req, res) => {
  db.query('SELECT * FROM usuario', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

exports.getUsuarioById = (req, res) => {
  db.query('SELECT * FROM usuario WHERE id = ?', [req.params.id], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
};

exports.createUsuario = (req, res) => {
  const { nombre, correo, celular, usuario, contrasena } = req.body;
  const hash = crypto.createHash('sha256').update(contrasena).digest('hex');
  db.query('INSERT INTO usuario (nombre, correo, celular, usuario, contrasena) VALUES (?, ?, ?, ?, ?)',
    [nombre, correo, celular, usuario, contrasena], 
    (error, results) => {
      if (error) throw error;
      res.json({ id: results.insertId });
    });
};

exports.updateUsuario = (req, res) => {
  const { nombre, correo, celular, usuario, contrasena } = req.body;
  db.query(
    'UPDATE usuario SET nombre = ?, correo = ?, celular = ?, usuario = ?, contrasena = ? WHERE id = ?',
    [nombre, correo, celular, usuario, contrasena, req.params.id],
    (error, results) => {
      if (error) throw error;
      res.json({ affectedRows: results.affectedRows });
    });
};

exports.deleteUsuario = (req, res) => {
  db.query('DELETE FROM usuario WHERE id = ?', [req.params.id], (error, results) => {
    if (error) throw error;
    res.json({ affectedRows: results.affectedRows });
  });
};
