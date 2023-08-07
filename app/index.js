const express = require("express");
const cors = require('cors');
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();

var con = require("./config/database");

// Configs
app.set('port', 5000);
app.use(express.json());
app.use(cors());

require('dotenv').config();

// Routes

app.use("/users", userRoutes);
app.use("", authRoutes)
app.use(morgan("dev"));

// app.use("/wallets", walletRoutes);
// app.use("/transactions", transactionRoutes);

app.use("/", (req, res) => {
    res.send("Api - Proyecto de Sistemas distribuidos v1.0");   
})

app.listen(app.get("port"), ()=> {
    console.log(`Servidor corriendo. http://127.0.0.1:${app.get('port')}`);
})