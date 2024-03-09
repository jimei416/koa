const jwtUser = require("../utils/jwt");

const getID = (ctx) => {
  const token = ctx.header.authorization.split(" ")[1];
  if (token.length > 0) {
    const user = jwtUser.decodeUser(token);
    return user;
  }
};

module.exports = getID;
