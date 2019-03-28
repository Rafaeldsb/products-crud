const db = require('../config/dbconnection');
const helper = require('../utils/helper');



var Product = {
    getAll: (req, res) => {
        db.query("SELECT * FROM produto", (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }

            res.status(200).json(results);
        });
    },

    getOne: (req, res) => {
        let id = req.params.id;
        db.query("SELECT * FROM produto WHERE id = ?", id, (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            if(results.length > 0)
                res.status(200).json(results[0]);
            else
                res.status(404).json({message: "Produto não encontrado."});

        });
    },
    update: (req, res) => {
        let id = req.params.id;
        var params = req.body;
        Object.assign(params, {updated_at: ~~(Date.now() / 1000)});
        db.query("UPDATE produto SET ? WHERE id = ?", [req.body, id], (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            if(results.changedRows > 0)
                res.status(200).json({message:"Atualizado com sucesso."});
            else
                res.status(500).json({message:"Houve algum erro na atualização do produto."});

        });
    },
    insert: (req, res) => {
        var params = req.body;
        let timestamp = ~~(Date.now() / 1000);
        Object.assign(params, {updated_at: timestamp, created_at: timestamp});
        console.log(params);
        db.query("INSERT INTO produto SET ?", [params], (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            console.log(results);
            if(results.affectedRows > 0)
                res.status(200).json({message:"Dados inseridos com sucesso.", id: results.insertId});
            else
                res.status(500).json({message:"Houve algum erro na inserção do produto."});
        });
    },


    delete: (req, res) => {
        let id = req.params.id;
        db.query("DELETE FROM produto WHERE id = ?", id, (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            console.log(results);
            if(results.affectedRows > 0)
                res.status(200).json({message:"Dados apagados com sucesso."});
            else
                res.status(500).json({message:"Houve algum erro ao tentar deletar o produto."});
        });
    },

    getParcela: (req, res) => {
        let id = req.params.id;
        let qtd = req.params.qtd;
        db.query("SELECT p.id, p.nome, p.descricao, p.valor, p.created_at, p.updated_at, c.juros FROM produto AS p LEFT JOIN categoria AS c on c.id = p.idCategoria WHERE p.id = ?", id, (error, results, fields) => {
            if(error){
                res.status(500).json(error);
            }
            if(results.length > 0) {
                var produto = results[0];
                res.status(200).json({
                    product: {
                        id: produto.id,
                        nome:produto.nome,
                        descricao:produto.descricao,
                        valor: produto.valor,
                        created_at: produto.created_at,
                        updated_at: produto.updated_at
                    }, parcela: {
                        quantidade: qtd,
                        juros: produto.juros,
                        valor: helper.compoundInterest(produto.valor, produto.juros / 100.0, qtd)
                    }
                });
            }
            else
                res.status(404).json({message: "Produto não encontrado."});

        });

    }
};

module.exports = Product;