const Router = require("@koa/router");
const router = new Router();

const UserController = require("../controller/userController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/getTime", UserController.getTime);

module.exports = router;
