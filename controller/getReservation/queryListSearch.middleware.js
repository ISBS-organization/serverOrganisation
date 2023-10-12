const user = require("../../model/user.model");

const  searchReservationQuery = async(req, res, next)  => {
  const { email, firstName, lastName, phoneNumber } = req.query;

  try {
  // Step 1: Search for users based on the query parameters
  const userQuery = {};

  if (email) {
    userQuery.email = { $regex: new RegExp(email, 'i') }; // Case-insensitive partial match for email
  }
  
  if (firstName) {
    userQuery.firstName = { $regex: new RegExp(firstName, 'i') }; // Case-insensitive partial match for firstName
  }
  
  if (lastName) {
    userQuery.lastName = { $regex: new RegExp(lastName, 'i') }; // Case-insensitive partial match for lastName
  }
  
  if (phoneNumber) {
    userQuery.phoneNumber = { $regex: new RegExp(phoneNumber, 'i') }; // Case-insensitive partial match for phoneNumber
  }
// Store the search query in the request object
  req.userQuery = userQuery; 

  const users = await user.find(userQuery).exec();
  if (users.length === 0) {
    return res.status(404).send({message: "no user find with this informations", data:[]})
  }
  req.usersId = users
  next();
  } catch (error) {
    return res.status(500).send({message: "server error please try later"})
  }

}

module.exports = searchReservationQuery