import axios from "axios";
import config from "../config";

let source = axios.CancelToken.source();
const getTopics = (data) => {
  source = axios.CancelToken.source();
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/topics/get", data, {
        cancelToken: source.token,
      })
      .then(resolve)
      .catch(reject);
  });
};

export { getTopics };
