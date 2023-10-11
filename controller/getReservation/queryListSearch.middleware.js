const  searchReservationQuery = (req, res, next)  => {
  const { firstName, lastName, phoneNumber, email } = req.query;

  const query = {};

// Case-insensitive search for the firstName
  if (firstName) {
    query.firstName = { $regex: new RegExp(firstName, 'i') }; 
  }

// Case-insensitive search for the lastName
  if (lastName) {
    query.lastName = { $regex: new RegExp(lastName, 'i') }; 
  }

// Case-insensitive search for the email
if (email) {
    query.email = { $regex: new RegExp(email, 'i') }; 
  }

// Case-insensitive search for the phoneNumber
if (phoneNumber) {
    query.phoneNumber = { $regex: new RegExp(phoneNumber, 'i') }; 
  }

// Store the search query in the request object
  req.searchQuery = query; 

  next();
}

module.exports = searchReservationQuery