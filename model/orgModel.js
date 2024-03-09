const query = require("../sql/query");
class OrgModel {
  //查询用户所有组织
  async getUser(userId) {
    return await query(`
    SELECT * FROM organize JOIN user_org ON organize.id = user_org.org_id
    WHERE user_org.user_id = '${userId}';
    `);
  }
  //添加组织
  async addOrg(org) {
    `INSERT INTO organize(name, type, introduce, leader_id,leader_name,leader_phone) VALUES('${org.name}', '${org.type}', '${org.introduce}','${org.leader_id}','${org.leader_name}','${org.leader_phone}')`;
  }
}
module.exports = new OrgModel();
