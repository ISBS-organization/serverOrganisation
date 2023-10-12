  /*
 /  ----  cancel reservation data base middleware
/*/

const Reservation = require("../../model/Reservation.model");


exports.cancelPayment = async (req, res, next) => {
    //--- get ticket id
    const {id} = req.params
    try {
    // ----- update reservation status
    await Reservation.findByIdAndUpdate(
        id,
        {status: false},
        { new: true }
    )
    next();
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
};