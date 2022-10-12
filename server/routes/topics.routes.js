const { getTopics } = require("../controllers/topics.controller");

module.exports = (app) => {
  app.post("/topics/get", getTopics);
};
