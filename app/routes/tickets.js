const express = require('express');
const router = express.Router();

const { getTicket, postTicket, updateTicket, deleteTicket } = require('../controllers/tickets');

router.get('/tickets', getTicket);
router.post('/tickets', postTicket);
router.patch('/tickets', updateTicket);
router.delete('/tickets', deleteTicket);

module.exports = router;