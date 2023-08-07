const express = require('express');
const TransactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/transaction/create', TransactionController.createTransaction);
router.get('/transactions/:walletId', TransactionController.getTransactionHistory);

module.exports = router;
