var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.1.101',
  user: 'sa',
  password: 'Qwer@1234',
  database: 'Runoob'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();