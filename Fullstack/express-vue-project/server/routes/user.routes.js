import express from 'express';
import * as userController from '../controllers/user.controller.js';

export default (app) => {

  const router = express.Router();

  router.post('/create', userController.create);

  router.post('/getAll', userController.getAll);

  router.post('/update', userController.update);

  router.post('/remove', userController.remove);

  app.use('/api/user', router);
};
