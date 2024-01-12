const { Sequelize, DataTypes, Op, col } = require('sequelize');
const { version } = require('./config.js');


const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: `./test_${version}.db`,
}); // Example for sqlite

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

(async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");

        const jane = User.build({ firstName: "Jane", lastName: "World" });
        await jane.save();
        console.log('Jane was saved to the database!');

        const jerry = User.build({ firstName: "Jerry", lastName: "World" });
        jerry.save();

        for (let i = 0; i < 11; i++) {
            User.create({ firstName: "XXX" + i, lastName: "YYY" + (i % 2) });
        }

        const condition = {
            where: {
                [Op.or]: {
                    firstName: { [Op.like]: "%1", },
                    lastName: { [Op.like]: "%2" }
                }

            }
        };
        const { count, rows } = await User.findAndCountAll(condition);

        console.log(`count: ${count}`);

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();