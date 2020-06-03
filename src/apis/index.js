const router = require('express').Router();
const commonController = require('./common.controller');

router.use('/common', commonController);

module.exports = router;
