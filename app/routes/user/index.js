const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


const { deleteUser } = require('../../controllers/user');
const { postUserTicket } = require('../../controllers/user-ticket');


router.delete('/:id', deleteUser);
router.post(
            '/:id/tickets',
             body('title').notEmpty(),
             body('description').notEmpty(),
             postUserTicket
            );




module.exports = router;