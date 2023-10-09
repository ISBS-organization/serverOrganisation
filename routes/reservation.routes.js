  /*
 /  ----  auth router 
/*/
const router = require("express").Router();

const { createReservationModel } = require("../controller/reservation/middleware/CreateReservation.middleware");
const { createTicketModel } = require("../controller/reservation/middleware/CreateTicket.middleware");
const { createUserModel } = require("../controller/reservation/middleware/CreateUser.middleware");
const sendEmailReservation = require("../controller/reservation/sendReservation.controller");
// ----- controller reservation paths

// ----- middleware reservation paths

// ----- validation inputs paths
const { reservationInputs } = require("../controller/validation/reservation.validation");
const validateInputs        = require("../controller/validation/validationInputs.config");


  /*
 /  ----  test route
/*/
router.get( "/test", (req, res) => { res.status(200).send("test reservation router page");});

  /*
 /  ----  add reservation route auth (send active email)
/*/
router.post( "/add", reservationInputs, validateInputs, createUserModel, createTicketModel, createReservationModel, sendEmailReservation);


module.exports = router;