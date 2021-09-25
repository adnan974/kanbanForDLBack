const express = require('express');
const router = express.Router();

const {  getAllNotifications, softDeleteNotification, updateNotification, createNotification } = require('../../controllers/notification');
const {authentificateToken} = require('../../utils/auth')

router.get('', getAllNotifications);
router.post('', createNotification);
router.patch('/:id', updateNotification);
router.delete('/:id', softDeleteNotification);


module.exports = router;