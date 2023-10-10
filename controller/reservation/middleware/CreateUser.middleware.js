  /*
 /  ----  create new User middleware
/*/

// ----- import model
const User = require("../../../model/user.model");

exports.createUserModel = async (req, res, next) => {
  const {email, phoneNumber, firstName, lastName} = req.body
  try {
// ----- create new model
    const user = new User({
      email,
      phoneNumber,
      firstName, 
      lastName
    })
// ----- save new model
    await user.save()
// ----- add new model to the request
    req.user = user
// ----- pass to next middleware
    next();
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
};