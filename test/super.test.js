var should = chai.should()

function EventEmitter () {};
function Foo () {};

describe('super', function() {
  it('can inherit methods', function() {
    inherits(Foo, EventEmitter);
    var foo = new Foo;

    (foo instanceof EventEmitter).should.be.true;
    (Foo.super_ == EventEmitter).should.be.true;
  });

  it('can extend objects', function() {
    var foo = { bar: 'baz' };
    inherits({}, foo).should.eql({ bar: 'baz' });
    inherits(foo, { baz: 1 }).should.eql({ bar: 'baz', baz: 1 });
  });

  it('can be used as clone', function() {
    var foo = { bar: 'baz' };
    inherits(foo).should.eql(foo);
  });

  it('can provide extension mechanism', function () {
    function Bar () { this._konstructed = true; };
    Bar.extend = inherits.extend;

    // first level
    var Baz = Bar.extend(
        { // prototype
          initialize: function () {
            return 'proto init';
          }
        }
      , { // class
          init: function () {
            return 'klass init';
          }
        }
    );

    Baz.should.itself.respondTo('init');
    Baz.init().should.equal('klass init');

    var baz = new Baz();
    baz.should.respondTo('initialize');
    baz.initialize().should.equal('proto init');
    baz.should.have.property('_konstructed').to.be.true;
    baz.should.be.instanceof(Baz);
    baz.should.be.instanceof(Bar);

    // second level, etc...
    Baz.should.itself.respondTo('extend');
    var Fu = Baz.extend(
        { // prototype
          render: function () {
            return 'proto render';
          }
        }
      , { // class
          flag: function () {
            return 'klass flag';
          }
        }
    );

    Fu.should.itself.respondTo('init');
    Fu.init().should.equal('klass init');
    Fu.should.itself.respondTo('flag');
    Fu.flag().should.equal('klass flag');

    var fu = new Fu();
    fu.should.respondTo('initialize');
    fu.initialize().should.equal('proto init');
    fu.should.have.property('_konstructed').to.be.true;
    fu.should.be.instanceof(Fu);
    fu.should.be.instanceof(Baz);
    fu.should.be.instanceof(Bar);

    Fu.should.itself.respondTo('extend');
  });
});
