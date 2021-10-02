const express = require('express');
const router = express.Router();

const { getAllTickets,getOneTicket,updateTicket, deleteTicket } = require('../../controllers/ticket');

router.get('/', getAllTickets);
router.get('/:id', getOneTicket);
router.patch('/:id', updateTicket);
router.delete('/:id', deleteTicket);

module.exports = router;