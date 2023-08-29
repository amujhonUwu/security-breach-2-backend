// usuarioController.js
const db = require('../config/database');
const crypto = require('crypto');
  

exports.getUserInfo = (req, res) => {
  const userId = req.id;
  console.log(userId);

  db.query('SELECT * FROM usuario WHERE id = ?', [userId], (error, results) => {
    if (error) throw error;
    res.status(200).json(results[0]);
  });
};

exports.updateUserInfo = (req, res) => {
  const userId = req.user.id;

  const { nombre, correo, celular } = req.body;

  // Actualizar en la base de datos
  db.query('UPDATE usuario SET nombre = ?, correo = ?, celular = ? WHERE id = ?', 
  [nombre, correo, celular, userId], (error, results) => {

    if (error) throw error;
    res.json({ success: true, affectedRows: results.affectedRows});
  });
};

exports.deleteUsuario = (req, res) => {
  db.query('DELETE FROM usuario WHERE id = ?', 
  [req.params.id], (error, results) => {
    
    if (error) throw error;
    res.json({ affectedRows: results.affectedRows });
  });
};

exports.updateUsuario = (req, res) => {
  const { nombre, correo, celular, usuario, contrasena } = req.body;
  db.query(
    'UPDATE usuario SET nombre = ?, correo = ?, celular = ?, usuario = ?, contrasena = ? WHERE id = ?',
    [nombre, correo, celular, usuario, contrasena, req.params.id],
    (error, results) => {
      if (error) throw error;
      res.json({  });
    });
};

// exports.getAllUsuarios = (req, res) => {
//   db.query('SELECT * FROM usuario', (error, results) => {
//     if (error) throw error;
//     res.json(results);
//   });
// };

