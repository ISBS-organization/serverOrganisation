const Reservation = require("../../model/Reservation.model");

const queryListController = async (req, res) => {
  const query = req.searchQuery; 
  try {
    const reservations = await Reservation.find(query).populate('userDetails', 'email firstName lastName phoneNumber').exec();
    return res.status(200).send({message: "list of reservation", data:reservations})
  } catch (error) {
    return res.status(500).send({message: "server error please try later"})
 }
}

module.exports = queryListController