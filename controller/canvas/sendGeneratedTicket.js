  /*
 /  ---- send ticket using email controller
/*/

// ----- import Transporter to set the sender mailer information
const Transporter = require("../../node-mailer/nodeMailer/transporter")
// ----- import MailOptions to set the email information
const MailOptions = require("../../node-mailer/nodeMailer/mailOptions")


const sendReservationTicket =  async (req, res) => {
// ----- get using information from request
  const {email, firstName, lastName, phoneNumber, nb_tickets} = req.userContact

// ----- create information related to user email
  const subject = "reservation  ticket for the event"
  const text    = "this is the reservation ticket of the event you like to join at SBIS university thanks for your trust"

// ----- create instances email sender and options
  const transporter = await Transporter()
  const mailOptions = await MailOptions(email, subject, text, null, [
    {
      filename: "reservationTicket.png", // Set the desired filename for the attachment
      content: req.image, // Attach the generated image from req.image
    },
  ])
  try {
// ----- send email
    await transporter.sendMail(mailOptions)
// ----- response validate for email sent
  return res.status(200).send({ message: "ticket send to your email", data: {email, firstName, lastName, phoneNumber, nb_tickets} })
  } catch (error) {
    console.error("error", error)
    return res.status(500).send('Internal server error');
  }
};

module.exports = sendReservationTicket;
