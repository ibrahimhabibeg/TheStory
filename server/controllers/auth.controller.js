const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

const SECONDS_PER_DAY = 86400;

const createAndSendToken = (req, res) => {
  const user = req.user;
  const token = jwt.sign({
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.fName,
    lastName: user.lName,
  }, jwtConfig.secret, {
    expiresIn: SECONDS_PER_DAY * jwtConfig.DAYS_TILL_SIGNIN_TOKEN_EXPIRES,
  });
  return res.status(200).send({
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.fName,
      lastName: user.lName,
    },
    message: "Signned in successfully",
    severity: "success",
  });
};

module.exports = { createAndSendToken };
