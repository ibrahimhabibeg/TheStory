const {
  initializeWriting,
  updateWriting,
  getWriting
} = require("../controllers/writing.controller");

const {
  isWritingIdProvidedAndSetIt,
  isWritingValidAndSetWriting,
  isUserAuthorOfWriting,
  isTextAndTitleProvidedAndSetThem,
} = require("../middleware/writing.middleware");

const {
  getAndSetToken,
  validateToken,
} = require("../middleware/token.middleware");

module.exports = (app) => {
  app.post(
    "/writing/initialize",
    [getAndSetToken, validateToken],
    initializeWriting
  );

  app.post(
    "/writing/update",
    [
      getAndSetToken,
      validateToken,
      isWritingIdProvidedAndSetIt,
      isWritingValidAndSetWriting,
      isUserAuthorOfWriting,
      isTextAndTitleProvidedAndSetThem,
    ],
    updateWriting
  );

  app.get(
    "/writing/get/:writingId",
    getWriting
  );
};
