const { removeDuplicates } = require("../utils/arrays");
const topics = require("./topics");

const getFormattedTopics = () => {
  const regexp = /(?<=\[).+?(?=\])/; // anything between two brackets
  let topicsArr = topics.split(regexp);
  topicsArr = removeDuplicates(topicsArr);
  for (let i = 0; i < topicsArr.length; i++) {
    topicsArr[i] = topicsArr[i].replace("[", "");
    topicsArr[i] = topicsArr[i].replace("]", "");
  }
  topicsArr.splice(0,1);
  return topicsArr;
};

module.exports = getFormattedTopics;
