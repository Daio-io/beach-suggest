'use strict';

var BeachModel = require('./beach.model');

exports.suggestBeach = function *() {

  let search = new RegExp(this.query.q, 'i');
  let query = BeachModel.find({name: search});

  this.body = yield query.exec();

};