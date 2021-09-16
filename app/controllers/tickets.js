const Ticket = require('../models/Ticket');

/**
 * This function comment is parsed by doctrine
 * @route GET /tickets
 * @group Tickets - Operations about tickets
 * @returns {object} 200 - An array of tickets info
 * @returns {Error}  default - Unexpected error
 */
exports.getTicket = (req, res, next) => {
  const {
    user_id,
  } = req.body;

  Ticket.find({ user_id }).then(data => {
    res.status(200).json({ data })
  }).catch(error => {
    res.status(422).json({ error });
  })
}

/**
 * This function comment is parsed by doctrine
 * @route POST /tickets
 * @group Tickets - Operations about tickets
 * @returns {object} 201 - The ticket is created
 * @returns {Error}  default - Unexpected error
 */
exports.postTicket = (req, res, next) => {
  const {
    user_id,
    title,
    description,
    labels,
    ticketNumber
  } = req.body;

  const errors = [];

  if (!user_id) {
    errors.push({ user_id: "required" });
  }

  if (!title) {
    errors.push({ title: "required" });
  }

  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  const ticket = new Ticket({
    user_id,
    title,
    description,
    labels,
    ticketNumber,
  })

  ticket.save().then(response => {
    res.status(200).json({
      success: true,
      result: response
    })
  }).catch(err => {
    res.status(500).json({
      errors: [{ error: err }]
    });
  });
}

/**
 * This function comment is parsed by doctrine
 * @route PATCH /tickets
 * @group Tickets - Operations about tickets
 * @returns {object} 200 - The ticket is updated
 * @returns {Error}  default - Unexpected error
 */
exports.updateTicket = (req, res, next) => {
  const {
    ticket_id,
    user_id,
    title,
    description,
    labels,
    ticketNumber
  } = req.body;

  Ticket.findByIdAndUpdate(ticket_id, {
    user_id,
    title,
    description,
    labels,
    ticketNumber,
  }, (error) => {
    if (error) {
      res.status(422).json({ error });
    } else {
      res.send("ticket modified");
    }
  })
}


/**
 * This function comment is parsed by doctrine
 * @route DELETE /tickets
 * @group Tickets - Operations about tickets
 * @returns {object} 200 - The ticket is deleted
 * @returns {Error}  default - Unexpected error
 */
exports.deleteTicket = (req, res, next) => {
  const {
    ticket_id
  } = req.body;

  Ticket.findByIdAndDelete(ticket_id).then(() => {
    res.status(200).json({ success: true });
  }).catch(error => {
    res.status(422).json({ error });
  })
}
