const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const { deleteDashboard } = require('../../controllers/dashboard');
const { addColumnToDashboard } = require('../../controllers/dashboard-column');

router.delete('/:id', deleteDashboard);

router.post(
    '/:id/columns',
    body('title').notEmpty(),
    addColumnToDashboard
);


module.exports = router