  /*
 /  ---- get reservations list
/*/

const Reservation = require("../../model/Reservation.model");


const paymentReservation = async (req, res,next) => {
  const {id} = req.body
  console.log(id || req.id)
    // ----- get using information from request
       try {
    // ----- send email
        const reservation = await Reservation.findByIdAndUpdate(
          id || req.id,
          {status: true},
          { new: true }
        )
        if (reservation) {
        next();
        } else {
          return res.status(404).send({message: "id not find"})
        }
      } catch (error) {
        console.log(error)
        return res.status(404).send({message: "id not find"})
      }
    }

    module.exports = paymentReservation
