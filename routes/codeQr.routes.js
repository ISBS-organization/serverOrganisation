const { generateQRCodeAndAddToTemplate } = require("../controller/canvas/generateCanvastemplate.controller");
const sendReservationTicket = require("../controller/canvas/sendGeneratedTicket");
const generateCodeQr = require("../controller/codeQR/generateCodeQR.controller");
const getReservation = require("../controller/reservation/getReservation.controller");

const router = require("express").Router();


  /*
 /  ----  code qr route
/*/
router.get( "/codeQr", generateCodeQr);

  /*
 /  ----  ticket reservation payment route
/*/
router.post('/ticket/:id', getReservation, generateQRCodeAndAddToTemplate, sendReservationTicket)

module.exports = router;