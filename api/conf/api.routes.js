'use strict';

var beachRoutes = require('../beach/beach.router');

module.exports = function(app) {

  app.use(function *(next) {
    this.set('Cache-Control', 'max-age=172800');
    yield next;
  });

  app.use(beachRoutes.routes());

};

