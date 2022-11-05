import axios from "axios";
import config from "../config";

const initializeWriting = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/writing/initialize", {
        token: localStorage.getItem("token"),
      })
      .then(resolve)
      .catch(reject);
  });
};

const getWriting = (writingId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(config.BACKEND_URL + `/writing/get/${writingId}`)
      .then(resolve)
      .catch(reject);
  });
};

let source = axios.CancelToken.source();
const editWriting = (data) => {
  source = axios.CancelToken.source();
  return new Promise((resolve, reject) => {
    axios
      .post(
        config.BACKEND_URL + "/writing/update",
        { token: localStorage.getItem("token"), ...data },
        {
          cancelToken: source.token,
        }
      )
      .then(resolve)
      .catch(reject);
  });
};

export { initializeWriting, getWriting, editWriting };
