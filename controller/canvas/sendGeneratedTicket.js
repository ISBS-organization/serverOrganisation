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
  const text    = "Thank you for placing your trust in us. Attached is your reservation ticket for the upcoming event Bassbousa 1.0 at ISBS University, which you expressed interest in attending."

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
