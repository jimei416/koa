const query = require("../sql/query");
class UserModel {
  //获取用户
  async getUser(name) {
    return await query(`SELECT * FROM user WHERE name = '${name}'`);
  }
  //获取用户手机号
  async getPhone(phone) {
    return await query(`SELECT * FROM user WHERE phone = '${phone}'`);
  }
  //用户注册
  async insert(name, phone, password) {
    return await query(
      `INSERT INTO user(name, phone, password) VALUES('${name}', '${phone}', '${password}')`
    );
  }
}
module.exports = new UserModel();
