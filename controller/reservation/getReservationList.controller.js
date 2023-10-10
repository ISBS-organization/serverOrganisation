  /*
 /  ---- get reservations list
/*/

const Reservation = require("../../model/Reservation.model");


const getReservations = async (req, res) => {
    // ----- get using information from request
       try {
    // ----- send email
        const reservations = await Reservation.find().populate(["ticketDetails", "userDetails"])
        console.log(reservations, "test")
    // ----- response validate for email sent
        return res.status(200).send({ message: "list of reservations", data: reservations})
      } catch (error) {
        console.log(error)
        return res.status(500).send({message:'Internal server error'});
      }
    }

    module.exports = getReservations
