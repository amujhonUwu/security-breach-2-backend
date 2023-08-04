const db = require("../config/database");
const collectionName = "wallets";


exports.getAll = (req, res) => {

    const collection = db.collection(collectionName);
    collection.find({}).toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
    });
}

exports.getOne = (req, res) => {

    const collection = db.collection(collectionName);
    const { id } = req.params;
    collection.findOne({ id }, (err, doc) => {
        if (err) throw err;
        res.send(doc);
    });

};

exports.create = (req, res) => {
    const collection = db.collection(collectionName);
    const { id, idUser } = req.body;
    const balance = 0;
    const newUser = {
        id,
        idUser,
        walletName,
        balance
    };
    collection.insertOne(newUser, (err) => {
        if (err) throw err;
        res.sendStatus(201);
    });
};

exports.update = (req, res) => {
    const collection = db.collection(collectionName);
    const { id } = req.params;
    const { idUser, balance, walletName } = req.body;
    collection.updateOne({ id }, { $set: { idUser, balance, walletName } }, (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
};

exports.delete = (req, res) => {};