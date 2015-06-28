'use strict';

var http = require('http');
var koa = require('koa');
var app = koa();
var settings = require('./api/conf/api.settings');

// Bootstrapping
require('./api/conf/api.bootstrap')();
// Routes
require('./api/conf/api.routes')(app);

var server = http.createServer(app.callback());

function startServer() {

  server.listen(settings.port, function() {

    console.log('Beach-Suggest Started on port:', settings.port);

  });
  
}

if (require.main === module) {
  
  startServer();
  
} else {
  
  module.exports = startServer();
  
}