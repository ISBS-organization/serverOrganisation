  /*
 /  ---- send reservation  email for new reservation
/*/


const sendEmailReservation = async (req, res, next) => {
// ----- get using information from request
  const {email, firstName, lastName} = req.body

   try {
// ----- send email
    req.userContact = {email, firstName, lastName}
// ----- response validate for email sent
    next()
} catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
}

module.exports = sendEmailReservation