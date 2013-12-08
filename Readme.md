[![Build Status](https://secure.travis-ci.org/vesln/super.png)](http://travis-ci.org/vesln/super)

# super

## Installation

Super is available for both server-side and the browser.

### Node.js

Package is available through [npm](http://npmjs.org):

    npm install super

And also through [component](http://component.io):

    component install vesln/super


## Getting Started

It can be used is a replacement for node's `util.inherits`. Especially useful when building
modules for both node and the browser.

```javascript
var inherits = require('super');

// Classes, actually it uses util.inherits.

var EventEmitter = require('events').EventEmitter;
function Foo() {};

inherits(Foo, EventEmitter);
var foo = new Foo;

console.log(foo instanceof EventEmitter); // true
console.log(Foo.super_ == EventEmitter); // true
```

It can also be used for simple merging or cloning of objects.

```javascript
// merge
var foo = { bar: 'baz' };
var bar = { foo: 3 };
var baz = inherits(bar, foo);

console.log(baz);

// clone
var bar = { foo: 3 };
var barClone = clone(bar);
```

And finally, it also provides a helper that will allow for object to easily be
extended, similiar to the style in Backbone.js.

```javascript
function Foo () {
  this._konstructed = true;
  if (this.initialize) this.initialize();
}

Foo.extend = inherits.extend;

var Bar = Foo.extend({
  initialize: function () {
    this._isBar = true;
  }
});

var foo = new Foo()
  , bar = new Bar();

console.log(foo._konstructed); // true
console.log(bar._konstructed); // true
console.log(foo._isBar); // undefined
console.log(bar._isBar); // true
```

## Tests

All:

```
$ make test
```

Node:

```
$ make test-node
```

Browser:

```
$ make test-browser
```

Test coverage:

```
$ make coverage
```

## License

MIT License

Copyright (C) 2012-2013 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
