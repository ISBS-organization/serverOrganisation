  /*
 /  ---- reset password using email controller
/*/

// ----- import Transporter to set the sender mailer information
const Transporter = require("../node-mailer/nodeMailer/transporter")
// ----- import MailOptions to set the email information
const MailOptions = require("../node-mailer/nodeMailer/mailOptions")
// ----- import getHtmlFile to get variables needs to put for the html mail
const { getHtmlFile } = require("../node-mailer/utiles")


const dotenv = require("dotenv")
dotenv.config()

// ----- import based deployed sever url
const basedUrl = process.env.BasedUrl

const sendReservation =  async (req, res) => {
// ----- get using information from request
  const {email, firstName, lastName, phoneNumber, nb_tickets} = req.userContact
// ----- collect email variable information
  const userEmail = {email, firstName, lastName}
// ----- create details link for event details 
  const active_link = `http://${basedUrl}/event`
// ----- create html file for reset password account
  const html    = getHtmlFile(userEmail, active_link, "ReservationEmail.hbs")
// ----- create information related to user email
  const subject = "reservation email for the event"
  const text    = "this is the reservation confimation of the event you like to join at SBIS university for more details you can see here" + active_link

// ----- create instances email sender and options
  const transporter = await Transporter()
  const mailOptions = await MailOptions(email, subject, text, html, [] )
  try {
// ----- send email
    await transporter.sendMail(mailOptions)
// ----- response validate for email sent
  return res.status(200).send({ message: "please check your email please and thanks", data: {email, firstName, lastName, phoneNumber, nb_tickets} })
  } catch (error) {
    console.error("error", error)
    return res.status(500).send('Internal server error');
  }
};

module.exports = sendReservation;
