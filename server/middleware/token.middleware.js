const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");

const getAndSetToken = (req, res, next) => {
  if(!req.body.token){
    return res.status(400).send({message:"No token provided.", severity:"error"});
  }
  req.token = req.body.token;
  next();
}

const validateToken = (req, res, next) => {
  jwt.verify(req.token, config.secret, (err, decoded)=>{
    if(err){
      return res.status(403).send({message:"Incorrect token.", severity:"error"});
    }
    decoded.fName = decoded.firstName;
    decoded.lName = decoded.lastName;
    req.user = decoded;
    next();
  });
}

module.exports = {getAndSetToken, validateToken};