var db = require('../config/dbconnection');

var Product = {
    getAll: (req, res) => {
        db.query("SELECT * FROM produto", (error, results, fields) => {
            if(error){
                res.json(error);
            }
            var resultJson = JSON.stringify(results);
            resultJson = JSON.parse(resultJson);

            res.status(200).json(resultJson);
        });
    },

    getOne: (req, res) => {
        let id = req.params.id;
        db.query("SELECT * FROM produto WHERE id = ?", id, (error, results, fields) => {
            if(error){
                res.json(error);
            }
            var resultJson = JSON.stringify(results[0]);
            resultJson = JSON.parse(resultJson);

            res.status(200).json(resultJson);
        });
    },
    update: (req, res) => {
        let id = req.params.id;
        var params = req.body;
        Object.assign(params, {updated_at: ~~(Date.now() / 1000)});
        db.query("UPDATE produto SET ? WHERE id = ?", [req.body, id], (error, results, fields) => {
            if(error){
                res.json(error);
            }

            res.status(200).json({message:"Atualizado com sucesso"});
        });
    },
    insert: (req, res) => {
        var params = req.body;
        let timestamp = ~~(Date.now() / 1000);
        Object.assign(params, {updated_at: timestamp, created_at: timestamp});
        console.log(params);
        db.query("INSERT INTO produto SET ?", [params], (error, results, fields) => {
            if(error){
                res.json(error);
            }

            res.status(200).json({message:"Dados inseridos com sucesso"});
        });
    },

    delete: (req, res) => {
        let id = req.params.id;
        db.query("DELETE FROM produto WHERE id = ?", id, (error, results, fields) => {
            if(error){
                res.json(error);
            }

            res.status(200).json({message:"Dados apagados com sucesso"});
        });
    },
};

module.exports = Product;