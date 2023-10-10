  /*
 /  ---- send reservation  email for new reservation
/*/


const sendEmailReservation = async (req, res) => {
// ----- get using information from request
  const {email, firstName, lastName, phoneNumber, nb_tickets} = req.body

   try {
// ----- send email

// ----- response validate for email sent
    return res.status(200).send({ message: "please check your email please and thanks", data: {email, firstName, lastName, phoneNumber, nb_tickets} })
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
}

module.exports = sendEmailReservation