const { getTopicsWithGenreTitle } = require("../controllers/topics.controller");

module.exports = (app) => {
  app.post("/topics/getWithGenreTitle", getTopicsWithGenreTitle);
};
