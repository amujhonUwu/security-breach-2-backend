const db = require('../config/database');

exports.createWallet = (req, res) => {
    const { user_id } = req.body;
    db.query('INSERT INTO Wallets (user_id) VALUES (?)', [user_id], (error, results) => {
        if (error) throw error;
        res.json({ success: true, walletId: results.insertId });
    });
};

exports.getBalance = (req, res) => {
    const { wallet_id } = req.params;
    db.query('SELECT balance FROM Wallets WHERE wallet_id = ?', [wallet_id], (error, results) => {
        if (error) throw error;
        res.json({ success: true, balance: results[0].balance });
    });
};

exports.getAllWallets = (req, res) => {
    const { user_id } = req.params;
    db.query('SELECT * FROM Wallets WHERE user_id = ?', [user_id], (error, results) => {
        if (error) throw error;
        res.json({ success: true, wallets: results });
    });
};
