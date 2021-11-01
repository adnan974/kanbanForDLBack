const Ticket = require('../models/Ticket');
const { validationResult } = require('express-validator');


/**
 * This function comment is parsed by doctrine
 * @route GET /users/{id}/tickets
 * @group Users and Tickets - Operations about users and tickets
 * @param {string} id.path.required - user id
 * @produces application/json
 * @returns {object} 200 - 
 * @returns {Error}  default - Unexpected error
 */
exports.getUserTickets = (req,res)=>{
  const userId = req.params.id

  Ticket.find({owner:userId})
  .then(tickets=>{
    res.status(200).json(tickets);
  })
  .catch(err=>{
    res.status(400);

  })
}

/**
 * This function comment is parsed by doctrine
 * @route POST /users/{id}/tickets
 * @group Users and Tickets - Operations about users and tickets
 * @param {string} id.path.required - user id
 * @param {CreateTicketDTO.model} ticket.body.required - the new ticket
 * @produces application/json
 * @consumes application/json
 * @returns {object} 201 - The ticket is created
 * @returns {Error}  default - Unexpected error
 */
 exports.postUserTicket = (req, res, next) => {

  // TODO: Verification à faire si on ajoute un id d'un dashboard dans le ticket, 
  // Il faut que le userId du dashboard corresponde a celui qui est donnée en parametre
  const errors  = validationResult(req)


  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  
  const owner = req.params.id;

  const {
    title,
    description,
    labels,
    ticketNumber,
    ticketStatus,
    associatedDashboard,
    associatedColumn,
  } = req.body;

  

  const ticket = new Ticket({
    owner,
    title,
    description,
    labels,
    ticketNumber,
    ticketStatus,
    associatedDashboard,
    associatedColumn
    
  })

  ticket.save().then(response => {
    res.status(200).json({
      success: true,
      result: ticket
    })
  }).catch(err => {
    res.status(500).json({
      errors: [{ error: err }]
    });
  });
}





