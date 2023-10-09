const mongoose = require('mongoose');
const {Schema, model} = mongoose

const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const phoneNumberValidationRegex = /\d{2}-\d{3}-\d{3}/

// ----- Create Schema for Users 
const userSchema = new Schema({
  firstName : {
    type : string,
    required: true,
    default : false,
    length: 3
  },
  lastName : {
    type : string,
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
    validate: {
      validator: function(v) {
        return phoneNumberValidationRegex.test(v);
      },
      message: '{VALUE} is not a valid phoneNumber!'
    },
  }
});


const user = model('user', userSchema);

module.exports = user;