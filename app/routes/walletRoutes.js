const express = require('express');
const WalletController = require('../controllers/walletController');
const router = express.Router();

router.post('/wallet/create', WalletController.createWallet);
router.get('/wallet/balance/:walletId', WalletController.getBalance);
router.get('/wallets/:userId', WalletController.getAllWallets);

module.exports = router;
