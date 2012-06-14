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

var exports = module.exports = super_;

/*!
 * Module version
 */

exports.version = '0.1.0';

/**
 * ### _super (dest, orig)
 *
 * Inherits the prototype methods or merges objects.
 * This is the primary export and it is recommended
 * that it be imported as `inherits` in node to match
 * the auto imported browser interface.
 *
 *     var inherits = require('super');
 *
 * @param {Object|Function} destination object
 * @param {Object|Function} source object
 * @name _super
 * @api public
 */

function super_ () {
  var args = slice.call(arguments);
  if (!args.length) return;
  if (typeof args[0] !== 'function') return merge(args);
  inherits.apply(null, args);
};

/**
 * ### extend (proto[, klass])
 *
 * Provide `.extend` mechanism to allow extenion without
 * needing to use dependancy.
 *
 *     function Bar () {
 *       this._konstructed = true;
 *     }
 *
 *     Bar.extend = inherits.extend;
 *
 *     var Fu = Bar.extend({
 *       initialize: function () {
 *         this._initialized = true;
 *       }
 *     });
 *
 *     var fu = new Fu();
 *     fu.should.be.instanceof(Fu); // true
 *     fu.should.be.instanceof(Bar); // true
 *
 * @param {Object} properties/methods to add to new prototype
 * @param {Object} properties/methods to add to new class
 * @returns {Object} new constructor
 * @name extend
 * @api public
 */

exports.extend = function (proto, klass) {
  var self = this
    , child = function () { return self.apply(this, arguments); };
  merge([ child, this ]);
  inherits(child, this);
  if (proto) merge([ child.prototype, proto ]);
  if (klass) merge([ child, klass ]);
  child.extend = this.extend; // prevent overwrite
  return child;
};

/*!
 * ### inherits (ctor, superCtor)
 *
 * Inherit the prototype methods from on contructor
 * to another.
 *
 * @param {Function} destination
 * @param {Function} source
 * @api private
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

function merge (arr) {
  var main = arr.length === 2 ? arr.shift() : {};
  arr.forEach(function(obj) {
    for (var p in obj) {
      if (!obj.hasOwnProperty(p)) continue;
      main[p] = obj[p];
    }
  });
  return main;
};
