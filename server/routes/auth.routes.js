const { createAndSendToken } = require("../controllers/auth.controller");
const {
  checkSigninDataAreProvided,
  setSignInData,
  checkUserExistsAndSetUser,
  checkPasswordIsCorrect,
} = require("../middleware/auth.middleware");

module.exports = (app) => {
  app.post(
    "/auth/signin",
    [
      checkSigninDataAreProvided,
      setSignInData,
      checkUserExistsAndSetUser,
      checkPasswordIsCorrect,
    ],
    createAndSendToken
  );
};
