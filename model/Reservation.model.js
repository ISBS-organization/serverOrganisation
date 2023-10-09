const mongoose = require('mongoose');
const {Schema, model} = mongoose

// ----- Create Schema for Users 
const ReservationSchema = new Schema({
  userDetails : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  ticketDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ticket',
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
});

ReservationSchema.set('strictPopulate', false);


const Reservation = model('reservation', ReservationSchema);

module.exports = Reservation;