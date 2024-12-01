import Sequelize from 'sequelize';

import dbConfig from '../configs/db.config.js';
import userModel from './user.model.js';

const sequelize = new Sequelize(dbConfig);

export default {
  Sequelize,
  sequelize,
  users: userModel(sequelize)
};
