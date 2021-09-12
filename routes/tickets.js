const express = require('express');
const router = express.Router();

const { getTicket, postTicket, updateTicket, deleteTicket } = require('../controllers/tickets');

router.get('/get_ticket', getTicket);
router.post('/post_ticket', postTicket);
router.post('/update_ticket', updateTicket);
router.get('/delete_ticket', deleteTicket);

module.exports = router;