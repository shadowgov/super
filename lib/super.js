/*!
 * super - Extend everything.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Dependencies.
 */
var util = require('util');
var slice = Array.prototype.slice;

/**
 * Inherits the prototype methods or merges objects.
 */
function super_() {
  var args = slice.call(arguments);
  if (!args.length) return;
  if (typeof args[0] !== 'function') return extend(args);
  util.inherits.apply(util, args);
};

/**
 * Extends multiple objects.
 * 
 * @param {Array} array of objects
 */
function extend(arr) {
  var main = arr.length === 2 ? arr.shift() : {};
  arr.forEach(function(obj) {
    for (var p in obj) {
      if (!obj.hasOwnProperty(p)) continue;
      main[p] = obj[p];
    }
  });
  return main;
};

/**
 * Exporting the lib.
 */
module.exports = super_;

/**
 * Exporting the version.
 */
module.exports.version = require('../package.json').version;