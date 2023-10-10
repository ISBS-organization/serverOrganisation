  /*
 /  ----  create new User middleware
/*/

// ----- import model
const Ticket = require("../../../model/ticket.model");

exports.createTicketModel = async (req, res, next) => {
  const {price, nb_ticket} = req.body
  try {
// ----- create new model
    const ticket = new Ticket({
      nb_ticket,
      price,
    })
// ----- save new model
    await ticket.save()
// ----- add new model to the request
    req.ticket = ticket
// ----- pass to next middleware
    next();
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:'Internal server error'});
  }
};