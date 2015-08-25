'use strict';

const tooly = require('tooly');
const BeachModel = require('./beach.model');
const excludeFields = '-_id, -__v';

exports.suggestBeach = function *() {

  if (tooly.existy(this.query.q)) {

    let safeSearch = tooly.cleansey(this.query.q);
    let search = new RegExp(
      tooly.clippy(safeSearch, 50), 'i'
    );
    
    let query = BeachModel
      .find({name: search}, excludeFields)
      .cache();

    this.body = yield query.exec();
    
  } else {
    this.body = [];
  }

};

exports.suggestBeachByCountry = function *() {

  let safeSearch = tooly.cleansey(this.params.code);
  let query = BeachModel
    .find({country: safeSearch}, excludeFields)
    .cache();
  
  this.body = yield query.exec();
  
};