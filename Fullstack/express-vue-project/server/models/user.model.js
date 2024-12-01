import Sequelize from 'sequelize';

export default (sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.UUIDV4
    },
    userName: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    userInfo: {
      type: Sequelize.STRING
    },
    isEnable: {
      type: Sequelize.INTEGER
    }
  });

  return User;
};
