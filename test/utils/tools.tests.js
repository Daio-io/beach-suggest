'use strict';

var expect = require('chai').expect;
var tools = require('../../api/utils/tools.js');

describe('Util Tools', function() {

  describe('existy', function() {

    it('should return false if nothing is passed in', function() {
      
      expect(tools.existy()).to.equal(false);
      expect(tools.existy(undefined)).to.equal(false);
      expect(tools.existy(null)).to.equal(false);

    });
    
    it('should return true when value passed in', function() {
      
      expect(tools.existy([])).to.equal(true);
      expect(tools.existy({})).to.equal(true);
      expect(tools.existy('hello')).to.equal(true);

    });

  });
  
  describe('cleansey', function() {


    it('should keep spaces', function() {

      var word = 'hello world';
      var cleansed = tools.cleansey(word);
      expect(cleansed).to.equal(word)

    });
    
    it('should keep capital letters', function() {

      var word = 'HelLo WorLd';
      var cleansed = tools.cleansey(word);
      expect(cleansed).to.equal(word)

    });    
    
    it('should keep hyphens letters', function() {

      var word = 'HelLo-WorLd--';
      var cleansed = tools.cleansey(word);
      expect(cleansed).to.equal(word)

    });
    
    it('should remove numbers', function() {
      
      var cleansed = tools.cleansey('22h3llo');
      expect(cleansed).to.equal('hllo')
      
    });
    
    it('should remove special characters', function() {
      
      var cleansed = tools.cleansey('cr@zy\n word!@£$%^&*()_+{}":|?><~/.,\';][=§±');
      expect(cleansed).to.equal('crzy word')
      
    })
    
  })

});