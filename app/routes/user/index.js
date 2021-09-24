const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


const { deleteUser, getAllusers } = require('../../controllers/user');
const { postUserTicket, getUserTickets } = require('../../controllers/user-ticket');
const { getUserNotifications } = require('../../controllers/user-notification');


router.get('/', getAllusers);
router.delete('/:id', deleteUser);

router.get(
    '/:id/tickets',
    getUserTickets
);
router.post(
    '/:id/tickets',
    body('title').notEmpty(),
    body('description').notEmpty(),
    postUserTicket
);

router.get('/:id/notifications', getUserNotifications);




module.exports = router;