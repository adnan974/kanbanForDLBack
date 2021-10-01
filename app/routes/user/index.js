const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


const { deleteUser, getAllusers } = require('../../controllers/user');
const { postUserTicket, getUserTickets } = require('../../controllers/user-ticket');
const { getUserNotifications } = require('../../controllers/user-notification');
const { getUserDashboard, postUserDashboard } = require('../../controllers/user-dashboard');


router.get('/', getAllusers);
router.delete('/:id', deleteUser);

router.get(
    '/:id/tickets',
    getUserTickets
);
router.post(
    '/:id/tickets',
    body('title').notEmpty(),
    body('associatedDashboard').notEmpty(),
    body('associatedColumn').notEmpty(),
    postUserTicket
);

router.get(
    '/:id/dashboards',
    getUserDashboard
);
router.post(
    '/:id/dashboards',
    body('title').notEmpty(),
    postUserDashboard
);

router.get('/:id/notifications', getUserNotifications);




module.exports = router;