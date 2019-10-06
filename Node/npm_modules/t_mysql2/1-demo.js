// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '192.168.1.100',
  user: 'sa',
  password: 'Qwer@1234',
  database: 'Runoob'
});

// simple query
connection.query('SELECT * FROM `employee_tbl`', function(
  err,
  results,
  fields
) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

// with placeholder
connection.query(
  'SELECT * FROM `employee_tbl` WHERE `name` = ? AND `singin` > ?',
  ['小王', 3],
  function(err, results) {
    console.log(results);
  }
);
