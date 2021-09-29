const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const { deleteDashboard, getDashboard, getAllDashboards } = require('../../controllers/dashboard');
const { addColumnToDashboard, getColumn, deleteColumn } = require('../../controllers/dashboard-column');

router.get('', getAllDashboards);
router.get('/:id', getDashboard);
router.delete('/:id', deleteDashboard);

router.post('/:id/columns', body('title').notEmpty(), addColumnToDashboard);
router.get('/:id/columns', getColumn);

module.exports = router