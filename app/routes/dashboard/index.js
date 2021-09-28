const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const { deleteDashboard, getDashboard } = require('../../controllers/dashboard');
const { addColumnToDashboard, getColumn, deleteColumn } = require('../../controllers/dashboard-column');

router.get('/:id', getDashboard);
router.delete('/:id', deleteDashboard);
router.post('/:id/columns', body('title').notEmpty(), addColumnToDashboard);
router.get('/:id/columns', getColumn);
router.delete('/:columnId', deleteColumn);

module.exports = router