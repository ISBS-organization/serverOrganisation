async function MailOptions(to, subject, text, html, attachments) {
  const EMAIL_ADDRESS  = process.env.EMAIL_ADDRESS
  const mailOptions = {
    from: EMAIL_ADDRESS,
    to,
    subject,
    text,
    html,
    attachments
  };
  return mailOptions
}

module.exports = MailOptions;