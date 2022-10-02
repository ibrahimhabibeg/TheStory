const db = require("../models");
const topicsModel = db.topic;
const genreModel = db.genre;
const { isInt } = require("../utils/dataTypes");

const getTopicsWithGenreTitle = (req, res) => {
  const order = getOrder(req);
  const limit = getLimit(req);
  const offset = getOffset(req, limit);
  const count = getTopicsCount();
  const topics = getTopicsWithParametersAndGenreTitle(order, offset, limit);
  const formattedMessage = getFormattedMessage(topics, count);
  return res.status(200).send(formattedMessage);
};

const getOrder = (req) => {
  let { order, orderBy } = req.body;
  if (order !== "ASC" && order !== "DESC") {
    order = "ASC";
  }
  if (orderBy !== "id" && orderBy !== "title") {
    orderBy = "id";
  }
  return [[orderBy, order]];
};

const getLimit = (req) => {
  let { pageSize } = req.body;
  if (!isInt(pageSize)) {
    pageSize = 30;
  }
  return pageSize;
};

const getOffset = (req, limit) => {
  let { page } = req.body;
  if(!isInt(page)){
    page = 0;
  }
  return page * limit;
};

const getTopicsCount = async () => {
  return await topicsModel.count();
};

const getTopicsWithParametersAndGenreTitle = async (order, offset, limit) => {
  const attributes = ["id", "title"];
  const genreAttributes = ["name"];
  return await topicsModel.findAll({
    attributes,
    order,
    offset,
    limit,
    include: { model: genreModel, attributes: genreAttributes },
  });
};

const getFormattedMessage = (topics, count) => {
  return {
    topics,
    count,
    message: "Topics found successfully",
    severity: "success",
  };
};

module.exports = { getTopicsWithGenreTitle };
