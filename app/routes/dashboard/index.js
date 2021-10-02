const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const { deleteDashboard, getDashboard, getAllDashboards, updateDashboard } = require('../../controllers/dashboard');
const { addColumnToDashboard, getColumn, updateColumns } = require('../../controllers/dashboard-column');
const { getDashboardTickets } = require('../../controllers/dashboard-ticket');

router.get('', getAllDashboards);
router.get('/:id', getDashboard);
router.delete('/:id', deleteDashboard);
router.patch('/:id', updateDashboard);

router.get('/:id/tickets',getDashboardTickets);

router.post('/:id/columns', body('title').notEmpty(), addColumnToDashboard);
router.get('/:id/columns', getColumn);

router.patch('/:id/columns', updateColumns);

router.get('/:id/tickets', getDashboardTickets)

module.exports = router