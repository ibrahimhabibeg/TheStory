const db = require("../models");
const bcrypt = require("bcrypt");
const userModel = db.user;

const checkSigninDataAreProvided = (req, res, next) => {
  if (!req.body.email){
    return res.status(400).send({message:"Email is not provided", wrongField:"email", severity:"error"});
  }
  if(!req.body.password){
    return res.status(400).send({message:"Password is not provided", wrongField:"password", severity:"error"});
  }
  next();
};

const setSignInData = (req, res, next) => {
  req.email = req.body.email;
  req.password = req.body.password;
  next();
};

const checkUserExistsAndSetUser = async (req, res, next) => {
  const user = await userModel.findOne({where:{email:req.email}});
  if(!user){
    return res.status(404).send({message:"Email not registered", wrongField:"email", severity:"error"});
  }
  req.user = user;
  next();
}

const checkPasswordIsCorrect = (req, res, next) => {
  const isPasswordValid = bcrypt.compareSync(req.password,req.user.password);
  if(!isPasswordValid){
    return res.status(401).send({message:"Password is incorrect", wrongField:"password", severity:"error"});
  }
  next();
}

module.exports = {checkSigninDataAreProvided, setSignInData, checkUserExistsAndSetUser, checkPasswordIsCorrect};