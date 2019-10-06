const Sequelize = require('sequelize');

const sequelize = new Sequelize('twelve', 'sa', 'Qwer@1234', {
  host: '192.168.1.101',
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

const Students = sequelize.define(
  'students',
  {
    ID: {
      type: Sequelize.BIGINT,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING
    },
    Gender: {
      type: Sequelize.STRING
    },
    Age: {
      type: Sequelize.INTEGER
    },
    IsPassed: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false
  }
);

const Scores = sequelize.define(
  'scores',
  {
    ID: {
      type: Sequelize.BIGINT
    },
    Subject: {
      type: Sequelize.STRING
    },
    Score: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

// Students.hasOne(Scores, { foreignKey: 'ID' });
Students.hasMany(Scores, { foreignKey: 'ID' });

// Students.findAll().then(data => {
//   console.log(data);
// });

// Scores.findAll().then(data => {
//   console.log(data);
// });

Students.findAll({
  include: [Scores],
  limit: 2
}).then(data => {
  data[0].getScores().then(sd => {
    console.log(sd);
  });
});
