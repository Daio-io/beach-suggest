'use strict';

const tooly = require('tooly');
const BeachModel = require('./beach.model');
const excludeFields = '-_id -__v';

exports.suggestBeach = function *() {

  if (tooly.existy(this.query.q)) {

    let query = BeachModel
      .find({name: createNameSearch(this.query)}, excludeFields)
      .cache();

    this.body = yield query.exec();
    
  } else {
    this.body = yield BeachModel.find({}, excludeFields).cache().exec();
  }

};

exports.suggestBeachByCountry = function *() {

  let safeSearch = tooly.cleansey(this.params.code);

  let queryObj = {country: safeSearch};

  if (tooly.existy(this.query.q)) {
    queryObj.name = createNameSearch(this.query);
  }
  
    let query = BeachModel
    .find(queryObj, excludeFields)
    .cache();
  
  this.body = yield query.exec();
  
};

function createNameSearch(query) {
  let safeSearch = tooly.cleansey(query.q);
  return new RegExp(
    tooly.clippy(safeSearch, 50), 'i'
  );
}