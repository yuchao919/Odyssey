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

module.exports = sequelize;
