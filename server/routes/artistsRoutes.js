const router = require('express').Router();
const userController = require('../controllers/user');
const authMiddleware = require('../middlewares/authMiddlewares');



router.post("/add", authMiddleware, userController.addArtists),
router.get("/", authMiddleware, userController.getArtists),



module.exports = router;