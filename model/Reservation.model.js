const mongoose = require('mongoose');
const {Schema, model} = mongoose

// ----- Create Schema for Users 
const ReservationSchema = new Schema({
  userDetails : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  ticketDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tickets',
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
});


const Reservation = model('reservation', ReservationSchema);

module.exports = Reservation;