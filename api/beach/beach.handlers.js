'use strict';

var tools = require('../utils/tools.js');
var BeachModel = require('./beach.model');

exports.suggestBeach = function *() {


  if (tools.existy(this.query.q)) {

    let safeSearch = tools.cleansey(this.query.q);
    let search = new RegExp(
      tools.clippy(safeSearch, 50), 'i'
    );
    
    let query = BeachModel.find({name: search}, 'id name country');

    this.body = yield query.exec();
    
  } else {
    this.body = [];
  }

};