const mongoose = require('mongoose');
const {Schema, model} = mongoose

const ticketSchema = new Schema({
  price: {
    type: Number,
    required: true,
    default: 7
  },
  nb_ticket: {
    type: Number,
    required: true,
    default: 1,
  }
});

const ticket = model('ticket', ticketSchema);
module.exports = ticket