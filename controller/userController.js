const User = require("../model/userModel");
const jwtUser = require("../utils/jwt");
const getID = require("../utils/getID");

class UserController {
  // 用户注册
  async register(ctx) {
    let { name, phone, password } = ctx.request.body;
    const names = await User.getUser(name); //用户名是否重复
    const tels = await User.getPhone(phone); //手机号是否重复
    if (tels.length > 0) {
      ctx.body = { type: "error", code: 0, message: "该手机号已注册" };
    } else {
      if (names.length > 0) {
        ctx.body = { type: "error", code: 0, message: "用户名已存在" };
      } else {
        await User.insert(name, phone, password);
        ctx.body = { type: "success", code: 1, message: "注册成功" };
      }
    }
  }

  async login(ctx) {
    let { name, password } = ctx.request.body;
    const res = await User.getUser(name);
    if (res.length > 0 && res[0].password == password) {
      const token = jwtUser.signUser(res[0].id);
      ctx.body = {
        type: "success",
        code: 1,
        message: "登录成功",
        data: { token },
      };
    } else {
      ctx.body = { type: "error", code: 0, message: "登录失败" };
    }
  }

  async getTime(ctx) {
    console.log(new Date().getTime());
    ctx.body = { state: 201, type: "success", time: new Date().getTime() };
  }
}
module.exports = new UserController();
