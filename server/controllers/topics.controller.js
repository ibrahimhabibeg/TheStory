const db = require("../models");
const topicsModel = db.topic;
const genreModel = db.genre;
const { isInt } = require("../utils/dataTypes");
const getFormattedTopics = require("../data/formatedTopics");

const addPredefinedTopics = async() => {
  const predefinedTopics = getFormattedTopics();
  const rows = createRowsForPredefinedTopics(predefinedTopics);
  const addedRows = await topicsModel.bulkCreate(rows);
}

const createRowsForPredefinedTopics = (predefinedTopics) => {
  const maxId = topicsModel.max("id");
  const rows = [];
  for (let i = 0; i < predefinedTopics.length; i++) {
    rows.push({id:maxId+1+i, title:predefinedTopics[i]});
  }
  return rows;
}
const getTopicsWithGenreTitle = async (req, res) => {
  const order = getOrder(req);
  const limit = getLimit(req);
  const offset = getOffset(req, limit);
  const count = await getTopicsCount();
  const topics = await getTopicsWithParametersAndGenreTitle(order, offset, limit);
  const formattedMessage = getFormattedMessage(topics, count);
  return res.status(200).send(formattedMessage);
};

const getOrder = (req) => {
  let { order, orderBy } = req.body;
  if (order !== "asc" && order !== "desc") {
    order = "asc";
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
  const genreAttributes = ["title"];
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

module.exports = { getTopicsWithGenreTitle, addPredefinedTopics };
