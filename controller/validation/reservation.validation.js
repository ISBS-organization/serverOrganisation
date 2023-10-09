const { body } = require('express-validator');

exports.reservationInputs = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('phoneNumber')
    .isLength({ min: 8, length: 8 })
    .withMessage('phone number have to get 8 numbers'),
  body('firstName')
    .isLength({ min: 3 })
    .withMessage('Please enter your first name at least 3 characters'),
  body('lastName')
    .isLength({ min: 3 })
    .withMessage('please add your last name at least 3 characters'),
    body('nb_ticket')
    .isNumeric()
    .withMessage('you have to select at least one ticket as number')
    .custom(value => {
      if (parseInt(value) < 1) {
        throw new Error('You must select at least 1 ticket');
      }
      return true;
    }),
]