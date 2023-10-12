const { createCanvas, loadImage } = require('canvas');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');



// Define an async middleware function
exports.generateQRCodeAndAddToTemplate = async (req, res, next) => {
  // Text you want to encode in the QR code
  const {userDetails, ticketDetails, id, status} = req.reservation
  const {email, firstName, lastName, phoneNumber} = userDetails
  const {nb_ticket, price} = ticketDetails

  const textToEncode = ` your ticket is ${status ? "valid": "not valid"} for ${nb_ticket} person`;

  try {
    // Create a canvas with the desired dimensions
    const canvas = createCanvas(1000, 400);
    const context = canvas.getContext('2d');

    // Generate the QR code as a data URL
    const qrCodeDataUrl = await QRCode.toDataURL(textToEncode, { errorCorrectionLevel: 'H' });

    // Load the generated QR code as an image
    const image = await loadImage(qrCodeDataUrl);

    // Load your canvas template image
    const templateImage = await loadImage(path.join(process.cwd(), "asset", 'reservationTicket.png'));
    // Draw your template image on the canvas
    context.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

    // Draw the QR code on top of the template
    context.drawImage(image, 750, 50, 250, 250);

    // Set text properties (font, size, color)
    context.font = '20px Arial';
    context.fillStyle = 'white';
    
    // Draw the additional text on the canvas
    context.fillText(firstName, 270, 130);

    context.fillText(lastName, 270, 180);

    context.fillText(id, 270, 225);

    // Convert the canvas to a Buffer
    const buffer = canvas.toBuffer('image/png');

    req.image = buffer
    req.userContact = {email, firstName, lastName, phoneNumber, price, nb_ticket}
    next();
  } catch (error) {
    // Handle errors here
    console.log("error is ", error)
    return res.status(500).send({message: "can't generate code QR please try again"})
  }
};
