exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");

  //input username 
  //username if roles (user)
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");

  //username is having admin
  
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
