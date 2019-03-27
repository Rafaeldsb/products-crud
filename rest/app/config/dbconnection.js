var mysql = require('mysql');
var host = process.env.DATABASE_HOST || 'localhost';
var user = process.env.DATABASE_USER || 'root';
var password = process.env.DATABASE_PASSWORD || 'root';
var database = process.env.DATABASE_SCHEMA || 'crud-simples';

var connection = mysql.createConnection({
    host: host,
    port: 3306,
    user: user,
    password: password,
    database: database,
    insecureAuth: true
});

connection.connect();

module.exports = connection;