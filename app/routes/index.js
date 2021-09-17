const express = require('express');
const router = express.Router();

router.use('/',require('./auth'))
router.use('/tickets',require('./ticket'))
router.use('/users',require('./user'))

module.exports = router;