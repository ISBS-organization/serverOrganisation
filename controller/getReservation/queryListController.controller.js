const Reservation = require("../../model/Reservation.model");

const queryListController = async (req, res) => {
  const status = req.query.status
  const usersId = req.usersId
  try {
    // Step 2: Collect user IDs
    const userIds = usersId.map(user => user._id);

    // Step 3: Search for reservations associated with the collected user IDs
    const reservationQuery = {
      'userDetails': { $in: userIds }
    };
    if (status === 'true' || status === 'false') {
      // If a valid 'status' query parameter is provided, use it to filter reservations
      reservationQuery.status = status === 'true';
    }
    const reservations = await Reservation.find(reservationQuery).exec();

    // Step 4: Populate user details for each reservation
    const populatedReservations = await Reservation.populate(reservations, { path: ['userDetails','ticketDetails'] });

    return res.status(200).send({message: "list of reservation", data:populatedReservations})
  } catch (error) {
    return res.status(500).send({message: "server error please try later"})
 }
}

module.exports = queryListController