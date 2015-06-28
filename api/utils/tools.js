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

/**
 * Removes any string value from another string
 * @param remove
 * @param value
 * @returns {string} - the new string | empty if not a string
 */
function removey(remove, value) {
  
  if (typeof remove === 'string' &&
    typeof value === 'string') {
    
    return value.replace(remove, '');
    
  }
  
  return '';
  
}

module.exports = {
  
  existy: existy,
  cleansey: cleansey,
  removey: removey
  
};