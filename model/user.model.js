const mongoose = require('mongoose');
const {Schema, model} = mongoose

const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// ----- Create Schema for Users 
const userSchema = new Schema({
  firstName : {
    type : String,
    required: true,
    default : false,
    length: 3
  },
  lastName : {
    type : String,
    required: true,
    default : false,
    length: 3
  },
  email: {
    type: String,
    unique: true,
    required: true,
      validate: {
      validator: function(v) {
        return emailValidationRegex.test(v);
      },
      message: '{VALUE} is not a valid email!'
      },
    },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  }
});


const user = model('user', userSchema);

module.exports = user;
