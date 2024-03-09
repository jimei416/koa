const Org = require("../model/orgModel");
const User = require("../model/userModel");
const message = require("../utils/message");
class OrgController {
  // 查询用户组织
  async selUserOrg(ctx) {
    const userId = getID(ctx);
    const orgList = await Org.getUser(userId);
    if (orgList.length > 0) {
      ctx.body = message.success("查询成功", orgList);
    } else {
      ctx.body = message.err("用户当前没有组织");
    }
  }
  // 创建组织
  async createOrg(ctx) {
    const userId = getID(ctx);
    const { name, type, introduce } = ctx.request.body;
    const user = User.getAllUser(userId)[0];
    const flag = await addOrg({
      name,
      type,
      introduce,
      leader_id: user.id,
      leader_name: user.name,
      leader_phone: user.phone,
    });
  }
}
module.exports = new OrgController();
