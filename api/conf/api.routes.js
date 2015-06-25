'use strict';

var beachRoutes = require('../beach/beach.router');

module.exports = function(app) {

  app.use(beachRoutes.routes());

};

