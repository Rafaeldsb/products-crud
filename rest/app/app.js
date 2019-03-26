var express = require("express");
var bodyParser = require('body-parser');

var index = require('./routes/index');
var product = require('./routes/product');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/products', product);

app.listen(8888);