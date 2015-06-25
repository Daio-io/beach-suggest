'use strict';

var mongoose = require('mongoose');

var BeachSchema = mongoose.Schema({

  name: String,
  id: Number,
  country: String

});

var BeachModel = mongoose.model('Beach', BeachSchema);

module.exports = BeachModel;