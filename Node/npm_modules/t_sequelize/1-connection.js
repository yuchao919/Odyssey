const Sequelize = require('sequelize');

const sequelize = new Sequelize('twelve', 'sa', 'Qwer@1234', {
  host: '192.168.1.100',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Options is an object with the following keys:
sequelize
  .query('SELECT 1', {
    // A function (or false) for logging your queries
    // Will get called for every SQL query that gets send
    // to the server.
    logging: console.log,

    // If plain is true, then sequelize will only return the first
    // record of the result set. In case of false it will all records.
    plain: false,

    // Set this to true if you don't have a model definition for your query.
    raw: false,

    // The type of query you are executing. The query type affects how results are formatted before they are passed back.
    type: Sequelize.QueryTypes.SELECT
  })
  .then(val => {
    debugger;
  });
