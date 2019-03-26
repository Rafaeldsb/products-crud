var db = require('../config/dbconnection');

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.get = (req, res, next) => {
    res.status(200).send('Visualizaçãos!!!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.listAll = (req, res, next) => {
    var results = db.query("SELECT * FROM produto", null,function (error, results, fields){
        if(error){
            res.json(error);
        }
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);

        res.json(resultJson);
    });
};