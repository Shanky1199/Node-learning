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


module.exports = {
  allAccess,
  userBoard,
  adminBoard,
  moderatorBoard
}