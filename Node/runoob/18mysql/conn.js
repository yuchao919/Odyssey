var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'Qwer@1234',
    database: 'nodejs'
});

module.exports = connection;