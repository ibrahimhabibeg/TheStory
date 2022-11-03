const db = require('../models');
const writingModel = db.writing;

/////////////////  Initialize Writing ////////////////////
const initializeWriting = async (req, res) => {
  const creratedWritingId = await createWritingInDB(req);
  sendInitializeMessageToUser(creratedWritingId, res);
}

const createWritingInDB = async (req) => {
  const {id} = await writingModel.create({userId:req.user.id, isPublished:false});
  return id;
}

const sendInitializeMessageToUser = (writingId, res) => {
  return res.status(200).send({writingId, severity:"success", message:"Writing initialized successfully"});
}

/////////////////  Update Writing ////////////////////

const updateWriting = async (req, res) => {
  const updatedWriting = await updateWritingInstanceInDB(req);
  sendUpdateMessageToUser(updatedWriting, res);
}

const updateWritingInstanceInDB = async (req) => {
  await req.writing.update({title:req.title, text:req.text});
  return req.writing;
}

const sendUpdateMessageToUser = (updatedWriting, res) => {
  return res.status(200).send({updatedWriting, severity:"success", message:"Writing updated successfully"});
}


/////////////////  Get Writing ////////////////////

const getWriting = async (req, res) => {
  if(!isWritingProvided(req)) return;
  const writing = await writingModel.findOne({where:{id:req.params.writingId}});
  if(writing) return res.status(200).send({writing, severity:"success", message:"Writing found successfully"});
  else return res.status(400).send({severity:"error", message:"Writing doesn't exist."});
}

const isWritingProvided = (req, res) => {
  if(!req.params.writingId){
    res.status(400).send({severity:"error", message:"No writing is provided."});
    return false;
  }
  return true;
}


module.exports = {initializeWriting, updateWriting, getWriting};