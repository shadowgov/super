/*!
 * super - Extend everything.
 *
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/*!
 * Test Dependencies.
 */

if ('undefined' === typeof isBrowser) {
  var chai = require('chai')
    , extend = require('../')
}

var should = chai.should()

/*!
 * Test Fixtures
 */

function EventEmitter () {};
function Foo () {};

describe('super', function() {
  it('should inherit methods', function() {
    extend(Foo, EventEmitter);
    var foo = new Foo;

    (foo instanceof EventEmitter).should.be.true;
    (Foo.super_ == EventEmitter).should.be.true;
  });

  it('should extend objects', function() {
    var foo = { bar: 'baz' };
    extend({}, foo).should.eql({ bar: 'baz' });
    extend(foo, { baz: 1 }).should.eql({ bar: 'baz', baz: 1 });
  });

  it('should be able to be used as clone', function() {
    var foo = { bar: 'baz' };
    extend(foo).should.eql(foo);
  });
});
