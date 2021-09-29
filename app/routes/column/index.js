const express = require('express');
const router = express.Router();

const { getAllColumns, deleteColumn } = require('../../controllers/column');


router.get('', getAllColumns);
router.delete('/:id', deleteColumn);


module.exports = router