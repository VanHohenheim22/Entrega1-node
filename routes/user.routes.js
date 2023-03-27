const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .get(userController.findAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.findSingle)
  .patch(userController.uppdata)
  .delete(userController.delete);

module.exports = router;
