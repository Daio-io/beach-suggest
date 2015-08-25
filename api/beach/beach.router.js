'use strict';

var beachHandlers = require('./beach.handlers');
var router = require('koa-router')();

router.get('/beach', beachHandlers.suggestBeach);
router.get('/beach/:code', beachHandlers.suggestBeachByCountry);

module.exports = router;