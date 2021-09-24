const Ticket = require('../models/Ticket');


/**
 * This function comment is parsed by doctrine
 * @route GET /tickets
 * @group Tickets - Operations about tickets
 * @returns {object} 200 - An array of tickets info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
exports.getAllTickets = (req, res, next) => {

  Ticket.find().then(data => {
    res.status(200).json({ data })
  }).catch(error => {
    res.status(422).json({ error });
  })
}


/**
 * This function comment is parsed by doctrine
 * @route GET /tickets/{id}
 * @group Tickets - Operations about tickets
 * @param {string} id.path.required - ticket id
 * @returns {object} 200 - A ticket info
 * @returns {Error}  default - Unexpected error
 */
exports.getOneTicket = (req, res, next) => {

  const ticketId = req.params.id;

  Ticket.findById(ticketId).then(data => {
    res.status(200).json({ data })
  }).catch(error => {
    res.status(422).json({ error });
  })
}


/**
 * This function comment is parsed by doctrine
 * @route PATCH /tickets/{id}
 * @group Tickets - Operations about tickets
 * @param {string} id.path.required - ticket id
 * @param {UpdateTicketDTO.model} ticket.body.required - the updated ticket
 * @returns {object} 200 - Succes: ticket updated
 * @returns {Error}  default - Unexpected error
 */
 exports.updateTicket = (req, res, next) => {

  const ticketId = req.params.id;

  const {
    title,
    description,
    labels,
    ticketNumber
  } = req.body;

  Ticket.findByIdAndUpdate(ticketId, {
    title,
    description,
    labels,
    ticketNumber,
  }, (error) => {
    if (error) {
      res.status(422).json({ error });
    } else {
      res.send("ticket updated");
    }
  })
}


/**
 * This function comment is parsed by doctrine
 * @route DELETE /tickets
 * @group Tickets - Operations about tickets
 * @returns {object} 200 - Succes: ticket deleted
 * @returns {Error}  default - Unexpected error
 */
exports.deleteTicket = (req, res, next) => {

  const ticketId = req.params.id;

  Ticket.findByIdAndDelete(ticketId).then(() => {
    res.status(200).json({ success: true });
  }).catch(error => {
    res.status(422).json({ error });
  })
}

