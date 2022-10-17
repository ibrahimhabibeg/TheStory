const {
  getAndSetToken,
  validateToken,
} = require("../middleware/token.middleware");
const { createAndSendToken } = require("../controllers/auth.controller");

module.exports = (app) => {
  app.post("/token/validate", [getAndSetToken, validateToken], createAndSendToken);
};
