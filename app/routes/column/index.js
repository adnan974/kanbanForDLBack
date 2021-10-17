const express = require('express');
const router = express.Router();
const { 
  getAllColumns, 
  deleteColumn, 
  updateColumnList 
} = require('../../controllers/column');

router.get('', getAllColumns);
router.delete('/:id', deleteColumn);
router.patch('/:id', updateColumnList);

module.exports = router