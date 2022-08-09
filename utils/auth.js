const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

module.exports = {
  signToken: function ({ id, email }) {
    const payload = { email, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: "2h" });
  },
};
