'use strict';

var tooly = require('tooly');
var BeachModel = require('./beach.model');

exports.suggestBeach = function *() {

  if (tooly.existy(this.query.q)) {

    let safeSearch = tooly.cleansey(this.query.q);
    let search = new RegExp(
      tooly.clippy(safeSearch, 50), 'i'
    );
    
    let query = BeachModel.find({name: search}, 'id name country').cache();

    this.body = yield query.exec();
    
  } else {
    this.body = [];
  }

};