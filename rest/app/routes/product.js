const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

/**
 * @api {get} /products Listar
 * @apiGroup Produtos
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    [
 *       {
 *           "id": 1,
 *           "idCategoria": 1,
 *           "nome": "Info 1.1",
 *           "descricao": "Desc info 1",
 *           "valor": 10,
 *           "created_at": 1553731343,
 *           "updated_at": 1553731343
 *       },
 *       {
 *           "id": 2,
 *           "idCategoria": 2,
 *           "nome": "Auto 2.1",
 *           "descricao": "Teste",
 *           "valor": 46.5,
 *           "created_at": 1553731343,
 *           "updated_at": 1553731343
 *       },
 *       {
 *           "id": 4,
 *           "idCategoria": 2,
 *           "nome": "Auto 2.1",
 *           "descricao": "Teste",
 *           "valor": 46.5,
 *           "created_at": 1553731343,
 *           "updated_at": 1553731343
 *       }
 *    ]
 *
 */
router.get('/', controller.getAll);

/**
 * @api {post} /products Inserir
 * @apiGroup Produtos
 *
 * @apiParamExample {json} Produto
 *       {
 *           "idCategoria": 2,
 *           "nome": "Auto 2.1",
 *           "descricao": "Teste",
 *           "valor": 46.5,
 *       }
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "message": "Dados inseridos com sucesso.",
 *       "id": 5
 *    }
 */
router.post('/', controller.insert);

/**
 * @api {get} /products/:id Visualizar
 * @apiGroup Produtos
 * @apiParam {Number} id Id do produto
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *       {
 *           "id": 1,
 *           "idCategoria": 1,
 *           "nome": "Info 1.1",
 *           "descricao": "Desc info 1",
 *           "valor": 10,
 *           "created_at": 1553731343,
 *           "updated_at": 1553731343
 *       }
 *
 */
router.get('/:id', controller.getOne);

/**
 * @api {put} /products/:id Atualizar
 * @apiGroup Produtos
 * @apiParam {Number} id Id do produto
 *
 * @apiParamExample {json} Produto
 *  {
 *      "idCategoria": 2,
 *      "nome": "Auto 2.1",
 *      "descricao": "Teste",
 *      "valor": 46.5,
 *  }
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "message": "Atualizado com sucesso."
 *    }
 *
 */
router.put('/:id', controller.update);

/**
 * @api {delete} /products/:id Deletar
 * @apiGroup Produtos
 * @apiParam {Number} id Id do produto
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "message": "Dados apagados com sucesso."
 *    }
 *
 */
router.delete('/:id', controller.delete);

/**
 * @api {get} /products/:id/parcela/:qtd Parcelas
 * @apiGroup Produtos
 * @apiParam {Number} id Id do produto
 * @apiParam {Number} qtd Quantidade de parcelas sobre o produto
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "product": {
 *           "id": 1,
 *           "nome": "Info 1.1",
 *           "descricao": "Desc info 1",
 *           "valor": 10,
 *           "created_at": 0,
 *           "updated_at": 0
 *       },
 *       "parcela": {
 *           "quantidade": "7",
 *           "juros": 5,
 *           "valor": 1.728198184461707
 *       }
 *    }
 *
 */
router.get('/:id/parcelas/:qtd', controller.getParcela);
module.exports = router;