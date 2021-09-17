const express = require('express');
const router = express.Router();

const { deleteUser } = require('../../controllers/user');
const { postUserTicket } = require('../../controllers/user-ticket');


router.delete('/:id', deleteUser);
router.post('/:id/tickets', postUserTicket);




module.exports = router;