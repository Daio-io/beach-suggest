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

server.listen(settings.port, function() {

  console.log('Surf-Query Started on:', settings.port);

});