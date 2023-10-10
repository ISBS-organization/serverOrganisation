  /*
 /  ----  create new User middleware
/*/

// ----- import model
const Reservation = require("../../../model/Reservation.model");

exports.createReservationModel = async (req, res, next) => {
  const {user, ticket} = req
  try {
// ----- create new model
    const reservation = new Reservation({
      ticketDetails: ticket,
      userDetails: user
    })
// ----- save new model
    await reservation.save()
// ----- add new model to the request
    req.reservation = reservation
// ----- pass to next middleware
    next();
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
};