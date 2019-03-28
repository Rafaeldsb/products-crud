var express = require("express");

var port = process.env.PORT || 8888;

var bodyParser = require('body-parser');

var index = require('./routes/index');
var product = require('./routes/product');
var category = require('./routes/category');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/products', product);
app.use('/categories', category);

console.log("Servidor escutando na porta " + port);

const server = app.listen(port);
module.exports = server;