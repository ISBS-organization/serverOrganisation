const { generateQRCodeAndAddToTemplate } = require("../controller/canvas/generateCanvastemplate.controller");
const sendReservationTicket = require("../controller/canvas/sendGeneratedTicket");
const generateCodeQr = require("../controller/codeQR/generateCodeQR.controller");
const { cancelPayment } = require("../controller/payment/cancelPayment.middleware");
const getReservation = require("../controller/reservation/getReservation.controller");
const { isAbleTo } = require("../controller/reservation/middleware/canDo.auth");

const router = require("express").Router();


  /*
 /  ----  code qr route
/*/
router.get( "/codeQr", generateCodeQr);

  /*
 /  ----  ticket reservation payment route
/*/
router.post('/ticket/:id',isAbleTo, getReservation, generateQRCodeAndAddToTemplate, sendReservationTicket)

  /*
 /  ----  ticket reservation cancel reservation payment route
/*/
router.post('/ticket/cancel/:id', isAbleTo, cancelPayment,  getReservation, generateQRCodeAndAddToTemplate, sendReservationTicket)

module.exports = router;