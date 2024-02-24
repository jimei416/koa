const User = require("../model/userModel");

class UserController {
  // 用户注册
  async register(ctx) {
    const names = await User.getUser(); //用户名是否重复
    ctx.body = names;
  }
}
module.exports = new UserController();
