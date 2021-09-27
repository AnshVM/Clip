const Router = require('express').Router();
const userController = require('../controllers/User');

Router.post('/',userController.signup)

module.exports = Router;
