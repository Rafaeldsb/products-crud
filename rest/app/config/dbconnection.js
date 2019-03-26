var mysql = require('mysql');
var host = process.env.DATABASE_HOST || 'localhost';

var connection = mysql.createConnection({
    host: host,
    port: 3306,
    user: 'root',
    password: 'timo#timo',
    database: 'crud-simple',
    insecureAuth: true
});

connection.connect();

module.exports = connection;