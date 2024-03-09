const jsonwebtoken = require("jsonwebtoken");
const config = require("../config");

class jwtUser {
  signUser(id) {
    return jsonwebtoken.sign({ id: id }, config.jwt.SECRET, {
      expiresIn: 60 * 60,
    });
  }
  decodeUser(token) {
    return jsonwebtoken.decode(token);
  }
}

module.exports = new jwtUser();
