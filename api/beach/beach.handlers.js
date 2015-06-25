'use strict';

var BeachModel = require('./beach.model');

exports.suggestBeach = function *() {

  let search = new RegExp(this.query.q, 'i');
  let query = BeachModel.find({name: search}, 'id name country');

  this.body = yield query.exec();

};