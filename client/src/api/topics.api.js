import axios from "axios";
import config from "../config";

let source = axios.CancelToken.source();
const getTopicsWithGenreTitle = (data) => {
  source.cancel("Blah  BLAh");
  source = axios.CancelToken.source();
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/topics/getWithGenreTitle", data, {
        cancelToken: source.token,
      })
      .then(resolve)
      .catch(reject);
  });
};

export { getTopicsWithGenreTitle };
