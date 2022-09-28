const { createAndSendToken } = require("../controllers/auth.controller");
const {
  checkSigninDataAreProvided,
  saveSignInDataToReq,
  checkUserExistsAndSetUser,
  checkPasswordIsCorrect,
  checkEmailIsRedundant,
  checkUsernameIsRedundant,
  checkSignupDataAreProvided,
  saveNewUserDataToReq,
  createNewUserAndSaveToReq,
} = require("../middleware/auth.middleware");

module.exports = (app) => {
  app.post("/auth/signin", [
    checkSigninDataAreProvided,
    saveSignInDataToReq,
    checkUserExistsAndSetUser,
    checkPasswordIsCorrect,
    createAndSendToken,
  ]);
  app.post("/auth/signup", [
    checkSignupDataAreProvided,
    checkEmailIsRedundant,
    checkUsernameIsRedundant,
    saveNewUserDataToReq,
    createNewUserAndSaveToReq,
    createAndSendToken,
  ]);
};
