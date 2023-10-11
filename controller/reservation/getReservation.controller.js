  /*
 /  ---- get reservations list
/*/

const Reservation = require("../../model/Reservation.model");


const getReservation = async (req, res, next) => {
    // ----- get using information from request
    const {id} = req.params
       try {
    // ----- send email
        const reservations = await Reservation.findById(id).populate(["ticketDetails", "userDetails"])
        if (!reservations.id) {
          return res.status(404).send({message:'can not find user'});

        }
    // ----- response validate for email sent
        req.reservation = reservations
        next();
      } catch (error) {
        console.log(error)
        return res.status(500).send({message:'Internal server error'});
      }
    }

    module.exports = getReservation
