var express = require('express');
var chirps = require('./chirps.ctrl');
var users = require('./users.ctrl');
var router = express.Router();

router.use('/chirps', chirps);
router.use('/users', users);

module.exports = router;