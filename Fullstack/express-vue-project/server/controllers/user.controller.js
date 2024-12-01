import { where } from 'sequelize';
import db from '../models/index.js';
import { v4 as uuidv4 } from 'uuid';

const Op = db.Sequelize.Op;
const UserDao = db.users;


export function getAll(req, res) {
  const userName = req.query.userName;
  var condition = userName ? { userName: { [Op.like]: `%${userName}%` } } : null;

  UserDao.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

export function create(req, res) {
  // Validate request
  if (!req.body.userName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  UserDao.create({
    userId: uuidv4(),
    userName: req.body.userName,
    password: req.body.password,
    userInfo: req.body.userInfo,
    isEnable: req.body.isEnable
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  });

};

export function remove(req, res) {
  if (!req.body.userId) {
    res.status(400).send({
      message: "UserId can not be empty!"
    });
    return;
  }

  UserDao.destroy({
    where: { userId: req.body.userId }
  }).then(data => {
    res.send({
      message: "User was deleted successfully!"
    });
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing the User."
    });
  });

};

export function update(req, res) {
  if (!req.body.userId) {
    res.status(400).send({
      message: "UserId can not be empty!"
    });
    return;
  }


  UserDao.update({ isEnable: req.body.isEnable }, {
    where: { userId: req.body.userId }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "User was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update user with id=${id}. Maybe the user was not found!`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating the User."
    });
  });
};

