import axios from "axios";
import config from "../config";

const validateToken = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/token/validate", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        handleError(err);
        reject(err);
      });
  });
};

const handleError = (err) => {
  console.log('====================================');
  console.log("No oh no");
  console.log('====================================');
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const handleSuccess = (res) => {
  console.log('====================================');
  console.log(res);
  console.log('====================================');
  setTokenInLocalStorage(res.data.token);
  setUserInLocalStorage(JSON.stringify(res.data.user));
};

const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const setUserInLocalStorage = (user) => {
  localStorage.setItem("user", user);
};

export { validateToken };
