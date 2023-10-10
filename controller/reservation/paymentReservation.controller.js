  /*
 /  ---- get reservations list
/*/

const Reservation = require("../../model/Reservation.model");


const paymentReservation = async (req, res) => {
  const {id} = req.body
    // ----- get using information from request
       try {
    // ----- send email
        const reservation = await Reservation.findByIdAndUpdate(
          id,
          {status: true},
          { new: true }
        )
        if (reservation) {
          return res.status(201).send({ message: "your reservation is payed with success", data: reservation})
        }
        return res.status(404).send({message: "id not find"})
      } catch (error) {
        console.log(error)
        return res.status(404).send({message: "id not find"})
      }
    }

    module.exports = paymentReservation
