'use strict';

/**
 * Checks the existence of a value 
 * @param value - value to check exists
 * @returns {boolean}
 */
function existy(value) {

  return value != null;

}

/**
 * Removes all characters which should not be included in singular words
 * @param value {string} - value to remove characters from
 * @returns {*|XML|string|void}
 */
function cleansey(value) {

  if (typeof value === 'string') {

    return value.replace(/[^ a-zA-Z-]/g, '');

  }
  
}

module.exports = {
  
  existy: existy,
  cleansey: cleansey
  
};