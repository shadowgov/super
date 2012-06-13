/*!
 * super - Extend everything.
 *
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/*!
 * Module Dependencies.
 */

var util = require('util')
  , slice = Array.prototype.slice;

/**
 * ### _super (dest, orig)
 *
 * Inherits the prototype methods or merges objects.
 *
 * @param {Object|Function} destination object
 * @param {Object|Function} source object
 * @name _super
 * @api public
 */

function super_() {
  var args = slice.call(arguments);
  if (!args.length) return;
  if (typeof args[0] !== 'function') return extend(args);
  util.inherits.apply(util, args);
};

/*!
 * Extends multiple objects.
 *
 * @param {Array} array of objects
 * @api private
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

/*!
 * Exporting the lib.
 */

module.exports = super_;

/*!
 * Exporting the version.
 */

module.exports.version = require('../package.json').version;
