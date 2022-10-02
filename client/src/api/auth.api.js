import axios from "axios";
import config from "../config";

const sendSigninReqToBackend = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/auth/signin", data)
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch(reject);
  });
};

const sendSignupReqToBackend = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.BACKEND_URL + "/auth/signup", data)
      .then((res) => {
        handleSuccess(res);
        resolve(res);
      })
      .catch(reject);
  });
};

const handleSuccess = (res) => {
  setTokenInLocalStorage(res.data.token);
  setUserInLocalStorage(JSON.stringify(res.data.user));
};

const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const setUserInLocalStorage = (user) => {
  localStorage.setItem("user", user);
};

export { sendSigninReqToBackend, sendSignupReqToBackend };
