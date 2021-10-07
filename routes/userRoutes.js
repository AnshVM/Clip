const Router = require('express').Router();
const userController = require('../controllers/User');
const auth = require('../middlewares/auth')

Router.post('/', userController.signup)
Router.post('/login', userController.login)
Router.get('/', auth, userController.getCurrentUser)
Router.get('/:id', auth, userController.getUserById)
Router.put('/follow/:id',auth,userController.follow)
Router.put('/unfollow/:id',auth,userController.unfollow)

module.exports = Router;
