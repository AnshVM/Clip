const Router = require('express').Router();
const userController = require('../controllers/User');
const auth = require('../middlewares/auth')

Router.post('/', userController.signup)
Router.post('/login', userController.login)
Router.get('/', auth, userController.getCurrentUser)
Router.get('/:id', auth, userController.getUserById)

module.exports = Router;
