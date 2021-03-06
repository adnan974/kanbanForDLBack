const express = require('express');
const router = express.Router();

router.use('/',require('./auth'))
router.use('/tickets',require('./ticket'))
router.use('/users',require('./user'))
router.use('/dashboards',require('./dashboard'))
router.use('/columns',require('./column'))
router.use('/notifications',require('./notification'))

module.exports = router;