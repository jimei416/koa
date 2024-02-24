const query = require("../sql/query");
class UserModel {
  //获取用户
  async getUser(name) {
    return await query(`SELECT * FROM user `);
  }
}
module.exports = new UserModel();
