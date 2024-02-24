const Router = require("@koa/router");
const router = new Router();

const UserController = require("../controller/userController");

router.post("/register", UserController.register);

module.exports = router;
