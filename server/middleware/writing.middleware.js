const db = require('../models');
const writingModel = db.writing;

/////////// Update Writing //////////////////

const isWritingIdProvidedAndSetIt = (req, res, next) => {
  if(!req.body.writingId){
    return res.status(400).send({severity:"error", message:"No writing is provided to update."});
  }
  req.writingId = req.body.writingId;
  next();
}

const isWritingValidAndSetWriting = async (req, res, next) => {
  const writingWithRequiredId = await writingModel.findOne({where:{id:req.writingId}});
  if(!writingWithRequiredId){
    return res.status(400).send({severity:"error", message:"Writing provided doesn't exist."});
  }
  req.writing = writingWithRequiredId;
  next();
}

const isUserAuthorOfWriting = (req, res, next) => {
  if(req.user.id!=req.writing.userId){
    return res.status(401).send({severity:"error", message:"You are not the author of the writing."});
  }
  next();
}

const isTextAndTitleProvidedAndSetThem = async (req, res, next) => {
  if(req.body.title===undefined || req.body.text===undefined){
    return res.status(400).send({severity:"error", message:"Title or text is not provided."});
  }
  req.title = req.body.title;
  req.text = req.body.text;
  next();
}

module.exports = {isWritingIdProvidedAndSetIt, isWritingValidAndSetWriting, isUserAuthorOfWriting, isTextAndTitleProvidedAndSetThem};