const db = require("../models");
const bcrypt = require("bcrypt");
const userModel = db.user;
const SALT_ROUNDS = 10;
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

const SECONDS_PER_DAY = 86400;


const checkSigninDataAreProvided = (req, res, next) => {
  if (!req.body.email) {
    return res
      .status(400)
      .send({
        message: "Email is not provided",
        wrongField: "email",
        severity: "error",
      });
  }
  if (!req.body.password) {
    return res
      .status(400)
      .send({
        message: "Password is not provided",
        wrongField: "password",
        severity: "error",
      });
  }
  next();
};

const saveSignInDataToReq = (req, res, next) => {
  req.email = req.body.email;
  req.password = req.body.password;
  next();
};

const checkUserExistsAndSetUser = async (req, res, next) => {
  const user = await userModel.findOne({ where: { email: req.email } });
  if (!user) {
    return res
      .status(404)
      .send({
        message: "Email not registered",
        wrongField: "email",
        severity: "error",
      });
  }
  req.user = user;
  next();
};

const checkPasswordIsCorrect = (req, res, next) => {
  const isPasswordValid = bcrypt.compareSync(req.password, req.user.password);
  if (!isPasswordValid) {
    return res
      .status(401)
      .send({
        message: "Password is incorrect",
        wrongField: "password",
        severity: "error",
      });
  }
  next();
};

const checkSignupDataAreProvided = (req, res, next) => {
  if (!req.body.email) {
    return res
      .status(400)
      .send({
        message: "Email is not provided",
        wrongField: "email",
        severity: "error",
      });
  }
  if (!req.body.password) {
    return res
      .status(400)
      .send({
        message: "Password is not provided",
        wrongField: "password",
        severity: "error",
      });
  }
  if (!req.body.username) {
    return res
      .status(400)
      .send({
        message: "Username is not provided",
        wrongField: "username",
        severity: "error",
      });
  }
  if (!req.body.firstName) {
    return res
      .status(400)
      .send({
        message: "First Name is not provided",
        wrongField: "firstName",
        severity: "error",
      });
  }
  if (!req.body.lastName) {
    return res
      .status(400)
      .send({
        message: "Last Name is not provided",
        wrongField: "lastName",
        severity: "error",
      });
  }
  next();
};


const checkEmailIsRedundant = async (req, res, next) => {
  const userWithRedundantEmail = await userModel.findOne({where:{email:req.body.email}});
  if(userWithRedundantEmail){
    return res
      .status(400)
      .send({
        message: "Email is already regestired",
        wrongField: "email",
        severity: "error",
      });
  }
  next();
}

const checkUsernameIsRedundant = async (req, res, next) => {
  const userWithRedundantUsername = await userModel.findOne({where:{username:req.body.username}});
  if(userWithRedundantUsername){
    return res
      .status(400)
      .send({
        message: "Username is alrready used",
        wrongField: "username",
        severity: "error",
      });
  }
  next();
}

const saveNewUserDataToReq = (req, res, next) => {
  req.userData = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, SALT_ROUNDS),
    username: req.body.username,
    fName: req.body.firstName,
    lName: req.body.lastName,
  };
  next();
};

const createNewUserAndSaveToReq = async (req, res, next) => {
  const user =  await userModel.create(req.userData);
  req.user = await user;
  next();
};


const createAndSendToken = (req, res) => {
  const user = req.user;
  const token = jwt.sign({
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.fName,
    lastName: user.lName,
  }, jwtConfig.secret, {
    expiresIn: SECONDS_PER_DAY * jwtConfig.DAYS_TILL_SIGNIN_TOKEN_EXPIRES,
  });
  return res.status(200).send({
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.fName,
      lastName: user.lName,
    },
    message: "Signned in successfully",
    severity: "success",
  });
};


module.exports = {
  checkSigninDataAreProvided,
  saveSignInDataToReq,
  checkUserExistsAndSetUser,
  checkPasswordIsCorrect,
  checkEmailIsRedundant,
  checkUsernameIsRedundant,
  checkSignupDataAreProvided,
  saveNewUserDataToReq,
  createNewUserAndSaveToReq,
  createAndSendToken
};

