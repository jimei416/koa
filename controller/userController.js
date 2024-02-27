const User = require("../model/userModel");

class UserController {
  // 用户注册
  async register(ctx) {
    let { name, phone, password } = ctx.request.body;
    console.log(ctx.request.body);

    const names = await User.getUser(name); //用户名是否重复
    const tels = await User.getPhone(phone); //手机号是否重复
    if (tels.length > 0) {
      ctx.body = { type: "warning", message: "该手机号已注册" };
    } else {
      if (names.length > 0) {
        ctx.body = { type: "error", message: "用户名已存在" };
      } else {
        await User.insert(name, phone, password);
        ctx.body = { type: "success", code: 0, message: "注册成功" };
      }
    }
  }
}
module.exports = new UserController();
