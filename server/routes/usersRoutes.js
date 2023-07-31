const router = require('express').Router();
const userController = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddlewares');




router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/current-user',authMiddleware, userController.getCurrentUser)


module.exports = router;