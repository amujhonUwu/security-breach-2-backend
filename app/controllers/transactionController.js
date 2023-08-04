const db = require("../config/database");
const collectionName = "transactions";


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
    const { id, nombre, correo, celular, usuario, contrasena } = req.body;
    const newUser = {
        id,
        nombre,
        correo,
        celular,
        usuario,
        contrasena,
    };
    collection.insertOne(newUser, (err) => {
        if (err) throw err;
        res.sendStatus(201);
    });
};

exports.update = (req, res) => {
    const collection = db.collection(collectionName);
    const { id } = req.params;
    const { idFrom, idTo, date, value } = req.body;
    collection.updateOne({ id }, { $set: { idFrom, idTo, date, value } }, (err) => {
        if (err) throw err;
        res.sendStatus(200);
    });
};

exports.delete = (req, res) => {
    const collection = db.collection(collectionName);
    const { id } = req.params;
    collection.deleteOne({ id }, (err) => {
        if (err) throw err;
        res.sendStatus(204);
    });
};