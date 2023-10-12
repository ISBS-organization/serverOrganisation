const Reservation = require("../../model/Reservation.model");

const queryListController = async (req, res) => {

  const usersId = req.usersId
  try {
    // Step 2: Collect user IDs
    const userIds = usersId.map(user => user._id);

    // Step 3: Search for reservations associated with the collected user IDs
    const reservationQuery = {
      'userDetails': { $in: userIds }
    };

    const reservations = await Reservation.find(reservationQuery).exec();

    // Step 4: Populate user details for each reservation
    const populatedReservations = await Reservation.populate(reservations, { path: 'userDetails' });

    return res.status(200).send({message: "list of reservation", data:populatedReservations})
  } catch (error) {
    return res.status(500).send({message: "server error please try later"})
 }
}

module.exports = queryListController