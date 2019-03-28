var db = require('../config/dbconnection');

var Category = {
    getAll: (req, res) => {
        db.query("SELECT * FROM categoria", (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }

            res.status(200).json(results);
        });
    },

    getOne: (req, res) => {
        let id = req.params.id;
        db.query("SELECT * FROM categoria WHERE id = ?", id, (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            if(results.length > 0)
                res.status(200).json(results[0]);
            else
                res.status(404).json({message: "Categoria não encontrada."});

        });
    },
    update: (req, res) => {
        let id = req.params.id;
        var params = req.body;
        Object.assign(params, {updated_at: ~~(Date.now() / 1000)});
        db.query("UPDATE categoria SET ? WHERE id = ?", [req.body, id], (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            if(results.changedRows > 0)
                res.status(200).json({message:"Atualizado com sucesso."});
            else
                res.status(500).json({message:"Houve algum erro na atualização da categoria."});

        });
    },
    insert: (req, res) => {
        var params = req.body;
        let timestamp = ~~(Date.now() / 1000);
        Object.assign(params, {updated_at: timestamp, created_at: timestamp});
        console.log(params);
        db.query("INSERT INTO categoria SET ?", [params], (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            console.log(results);
            if(results.affectedRows > 0)
                res.status(200).json({message:"Dados inseridos com sucesso.", id: results.insertId});
            else
                res.status(500).json({message:"Houve algum erro na inserção da categoria."});
        });
    },

    delete: (req, res) => {
        let id = req.params.id;
        db.query("DELETE FROM categoria WHERE id = ?", id, (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            console.log(results);
            if(results.affectedRows > 0)
                res.status(200).json({message:"Dados apagados com sucesso."});
            else
                res.status(500).json({message:"Houve algum erro ao tentar deletar a categoria."});
        });
    },
};

module.exports = Category;