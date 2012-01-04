[![Build Status](https://secure.travis-ci.org/vesln/super.png)](http://travis-ci.org/vesln/super)

# super - Extend everything.

http://github.com/vesln/super

## Description
	
super is super simple library that will be your best friend, when it comes to inheritance/extending.
Nothing fancy, just something that I use a lot.

## Synopsis

JavaScript:

```javascript

var extend = require('super');

// Classes, actually it uses util.inherits.

var EventEmitter = require('events').EventEmitter;
function Foo() {};

extend(Foo, EventEmitter);
var foo = new Foo;

console.log(foo instanceof EventEmitter);
console.log(Foo.super_ == EventEmitter);

// Objects

var foo = { bar: 'baz' };
var bar = { foo: 3 };
var baz = extend(bar, foo);

console.log(baz);

```
## Requirements

- NPM (http://npmjs.org/)
- Node.js 0.6 (http://nodejs.org/)

## Install

	$ npm install super

## Tests

	$ make test

## License

MIT License

Copyright (C) 2012 Veselin Todorov

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