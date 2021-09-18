const express = require('express');
const router = express.Router();

const { deleteNotification } = require('../../controllers/notification');
const {authentificateToken} = require('../../utils/auth')

router.delete('/:id', deleteNotification);


module.exports = router;