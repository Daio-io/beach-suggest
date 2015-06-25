'use strict';

var got = require('got');
var expect = require('chai').expect;
var BASE_URL = 'http://localhost:3000/';

describe('Making Requests', function() {

  it('should return suggestions', function(done) {

    var location = 'Rest+Bay';
    got(BASE_URL + 'beach?q=' + location, function(err, data) {

      for (var i = 0; i < data.length; i++) {

        // Beach
        expect(data[i].name).to.exist;
        expect(data[i].id).to.exist;
        expect(data[i].country).to.exist;

      }

      done();

    });

  });

  it('should return empty if no suggestions', function(done) {

    var location = 'Rest+Bay';
    got(BASE_URL + 'beach?q=' + location, function(err, data) {

      expect(data).to.be.empty;

      done();

    });

  });

});