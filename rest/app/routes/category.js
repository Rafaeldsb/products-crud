const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController');

/**
 * @api {get} /categories Listar
 * @apiGroup Categorias
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    [
 *       {
 *           "id": 1,
 *           "nome": "Informática",
 *           "juros": 5,
 *           "created_at": 0,
 *           "updated_at": 0
 *       },
 *       {
 *           "id": 2,
 *           "nome": "Automotivo",
 *           "juros": 2.5,
 *           "created_at": 0,
 *           "updated_at": 0
 *       },
 *       {
 *           "id": 3,
 *           "nome": "Móveis",
 *           "juros": 1,
 *           "created_at": 0,
 *           "updated_at": 0
 *       }
 *    ]
 *
 */
router.get('/', controller.getAll);

/**
 * @api {post} /categories Inserir
 * @apiGroup Categorias
 *
 * @apiParamExample {json} Categoria
 *       {
 *           "nome": "Móveis",
 *           "juros": 1,
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
 * @api {get} /categories/:id Visualizar
 * @apiGroup Categorias
 * @apiParam {Number} id Id da categoria
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *       {
 *           "id": 3,
 *           "nome": "Móveis",
 *           "juros": 1,
 *           "created_at": 0,
 *           "updated_at": 0
 *       }
 *
 */
router.get('/:id', controller.getOne);

/**
 * @api {put} /categories/:id Atualizar
 * @apiGroup Categorias
 * @apiParam {Number} id Id da categoria
 *
 * @apiParamExample {json} Categoria
 *       {
 *           "nome": "Móveis",
 *           "juros": 1,
 *       }
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
 * @api {delete} /categories/:id Deletar
 * @apiGroup Categorias
 * @apiParam {Number} id Id da categoria
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "message": "Dados apagados com sucesso."
 *    }
 *
 */
router.delete('/:id', controller.delete);
module.exports = router;