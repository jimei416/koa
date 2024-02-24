const Router = require("@koa/router");
const router = new Router();

class User {
  async getName(ctx) {
    ctx.body = {
      code: 200,
      message: "xixji",
      type: "waring",
    };
  }
}

const djj = new User();

router.get("/register", djj.getName);

module.exports = router;
