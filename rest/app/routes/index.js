
var express = require('express');
var router = express.Router();

/* GET REST API Index. */
router.get('/', function(req, res, next) {
    res.send({ message: 'CRUD Simples para REST API de gerenciamento de produtos e categorias' });
});

module.exports = router;