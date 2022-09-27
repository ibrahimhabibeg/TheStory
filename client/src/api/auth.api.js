import axios from "axios";
import data from "../data";

const sendSigninReqToBackend = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(data.BACKEND_URL + "/auth/signin", { email, password })
      .then((res) => {
        handleSigninSuccess(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const handleSigninSuccess = (res) => {
  setTokenInLocalStorage(res.data.token);
  setUserInLocalStorage(JSON.stringify(res.data.user));
};

const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const setUserInLocalStorage = (user) => {
  localStorage.setItem("user", user);
};

export { sendSigninReqToBackend };
