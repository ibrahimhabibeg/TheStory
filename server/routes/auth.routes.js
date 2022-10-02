const {
  createAndSendToken,
  checkSigninDataAreProvided,
  saveSignInDataToReq,
  checkUserExistsAndSetUser,
  checkPasswordIsCorrect,
  checkEmailIsRedundant,
  checkUsernameIsRedundant,
  checkSignupDataAreProvided,
  saveNewUserDataToReq,
  createNewUserAndSaveToReq,
} = require("../controllers/auth.controller");

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
