'use strict';

var mongoose = require('mongoose');
var config = require('./db.config');
var cache = require('mongoose-cache');

module.exports = function() {

  cache.install(mongoose, config.cache);
  
  switch (process.env.NODE_ENV) {
    case 'live':

      mongoose.connect(config.prod.connectionString, config.prod.options);
      break;

    default:

      mongoose.connect(config.dev.connectionString, config.dev.options);
      break;

  }

};