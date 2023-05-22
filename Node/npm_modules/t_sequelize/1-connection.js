const { Sequelize, Op, Model, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("twelve", "sa", "Qwer@1234", {
//   host: "192.168.1.100",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },
// });

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./test.db",
});

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,
    // I don't want createdAt
    createdAt: false,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: "updateTimestamp",
  }
);

(async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    sequelize.sync({ force: true });

    await User.create({ firstName: "hello", lastName: "World" });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// sequelize
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// // Options is an object with the following keys:
// sequelize
//   .query("SELECT 1", {
//     // A function (or false) for logging your queries
//     // Will get called for every SQL query that gets send
//     // to the server.
//     logging: console.log,

//     // If plain is true, then sequelize will only return the first
//     // record of the result set. In case of false it will all records.
//     plain: false,

//     // Set this to true if you don't have a model definition for your query.
//     raw: false,

//     // The type of query you are executing. The query type affects how results are formatted before they are passed back.
//     type: Sequelize.QueryTypes.SELECT,
//   })
//   .then((val) => {
//     debugger;
//   });
