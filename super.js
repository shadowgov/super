/*!
 * super - Extend everything.
 *
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition();
  else if (typeof define == 'function' && typeof define.amd  == 'object') define(definition);
  else this[name] = definition();
}('extend', function () {
  var module = {};


/*!
 * super - Extend everything.
 *
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/*!
 * Module Dependencies.
 */

var slice = Array.prototype.slice;

/*!
 * Primary export
 */

module.exports = super_;

/*!
 * Module version
 */

module.exports.version = '0.1.0';

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

function super_ () {
  var args = slice.call(arguments);
  if (!args.length) return;
  if (typeof args[0] !== 'function') return extend(args);
  inherits.apply(null, args);
};

/*!
 * ### inherits (ctor, superCtor)
 *
 * Inherit the prototype methods from on contructor
 * to another.
 *
 * @param {Function} destination
 * @param {Function} source
 */

function inherits (ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype,
    { constructor: {
          value: ctor
        , enumerable: false
        , writable: true
        , configurable: true
      }
  });
}

/*!
 * Extends multiple objects.
 *
 * @param {Array} array of objects
 * @api private
 */

function extend (arr) {
  var main = arr.length === 2 ? arr.shift() : {};
  arr.forEach(function(obj) {
    for (var p in obj) {
      if (!obj.hasOwnProperty(p)) continue;
      main[p] = obj[p];
    }
  });
  return main;
};


  return module.exports;
});
