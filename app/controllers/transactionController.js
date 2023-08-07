const db = require('../config/database');

exports.createTransaction = (req, res) => {
    const { sender_wallet_id, receiver_wallet_id, amount, description } = req.body;

    // Utilizamos promesas para manejar la transacción
    db.beginTransaction()
        .then(() => {
            // Deduct amount from sender's wallet
            return db.query('UPDATE Wallets SET balance = balance - ? WHERE wallet_id = ?', [amount, sender_wallet_id]);
        })
        .then(() => {
            // Add amount to receiver's wallet
            return db.query('UPDATE Wallets SET balance = balance + ? WHERE wallet_id = ?', [amount, receiver_wallet_id]);
        })
        .then(() => {
            // Create transaction record
            return db.query('INSERT INTO Transactions (sender_wallet_id, receiver_wallet_id, amount, description) VALUES (?, ?, ?, ?)', [sender_wallet_id, receiver_wallet_id, amount, description]);
        })
        .then(results => {
            // Commit the transaction
            return db.commit().then(() => results);
        })
        .then(results => {
            res.json({ success: true, transactionId: results.insertId });
        })
        .catch(error => {
            // Rollback the transaction in case of any error
            db.rollback();
            throw error;
        });
};


exports.getTransactionHistory = (req, res) => {
    const { wallet_id } = req.params;
    db.query('SELECT * FROM Transactions WHERE sender_wallet_id = ? OR receiver_wallet_id = ?', [wallet_id, wallet_id], (error, results) => {
        if (error) throw error;
        res.json({ success: true, transactions: results });
    });
};
