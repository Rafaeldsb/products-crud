const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
router.post('/', controller.post);
router.get('/', controller.listAll);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
module.exports = router;