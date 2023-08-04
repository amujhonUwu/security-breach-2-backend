const express = require("express");
const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conectar(){
    await client.connect(err => {
        if (err) throw err;
        console.log("Conexión a la base de datos establecida con éxito.");
    });      
}


// var client = require("./config/database");



// Configs
app.set('port', 5000);
app.use(express.json());

require('dotenv').config();

// Routes
// app.use("/users", userRoutes);
// app.use("/wallets", walletRoutes);
// app.use("/transactions", transactionRoutes);

app.use("/", (req, res) => {
    res.send("Api - Proyecto de Sistemas distribuidos v1.0");   
})

app.listen(app.get("port"), ()=> {
    console.log(`Servidor corriendo. http://127.0.0.1:${app.get('port')}`);
})