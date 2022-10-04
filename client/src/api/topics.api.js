import axios from "axios";
import config from "../config";

const getTopicsWithGenreTitle = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/topics/getWithGenreTitle", data)
      .then(resolve)
      .catch(reject);
  });
};

export { getTopicsWithGenreTitle };
