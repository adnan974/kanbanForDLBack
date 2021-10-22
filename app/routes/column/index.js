const express = require('express');
const router = express.Router();

const { getAllColumns, deleteColumn, updateColumn } = require('../../controllers/column');


router.get('', getAllColumns);
router.delete('/:id', deleteColumn);
router.patch('/:id', updateColumn);


module.exports = router