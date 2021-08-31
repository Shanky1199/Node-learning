const run = require('../api/external.db')
const mailApi= require('../api/mail_api')

const allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

const userBoard = (req, res) => {
  res.status(200).send("User Content.");

  //input username 
  //username if roles (user)
};

const adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");

  //username is having admin
  
};

const moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

const external_api = async(req, res) => {

  run.run().then(res.status(200).send("Added all the users")).catch(
    res.status(400).send("Error")
  )
};

const sendMail = async (req,res)=>{

  mailApi(req,res).
  then(res.status(200).send("Email Send successfully ")).
  catch(console.log('Error in controller'))
}


module.exports = {
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard,
  external_api,
  sendMail
}