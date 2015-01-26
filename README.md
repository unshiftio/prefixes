# prefixes

[![Made by unshift][made-by]](http://unshift.io)[![Version npm][version]](http://browsenpm.org/package/prefixes)[![Build Status][build]](https://travis-ci.org/unshiftio/prefixes)[![Dependencies][david]](https://david-dm.org/unshiftio/prefixes)[![Coverage Status][cover]](https://coveralls.io/r/unshiftio/prefixes?branch=master)[![IRC channel][irc]](http://webchat.freenode.net/?channels=unshift)

[made-by]: https://img.shields.io/badge/made%20by-unshift-00ffcc.svg?style=flat-square
[version]: https://img.shields.io/npm/v/prefixes.svg?style=flat-square
[build]: https://img.shields.io/travis/unshiftio/prefixes/master.svg?style=flat-square
[david]: https://img.shields.io/david/unshiftio/prefixes.svg?style=flat-square
[cover]: https://img.shields.io/coveralls/unshiftio/prefixes/master.svg?style=flat-square
[irc]: https://img.shields.io/badge/IRC-irc.freenode.net%23unshift-00a8ff.svg?style=flat-square

Prefixes a simple function which searches a given object for possible prefixed
instances of functions and methods. This allows you to easily figure out which
API's you should be using. Even if prefixes are available it will still prefer a
standard over a prefix so you can easily write future proof code.

## Install 

The module is intended for browser usage, but it should also work fine in
Node.js but there are no prefixes there, so it's quite useless if you're
building a node.js only application.

```
npm install --save prefixes
```

## Usage

The module is exported with a single interface, which is the prefixes function:

```js
'use strict';

var prefixes = require('prefixes');
```

Once you have required the `prefixes` module you can start searching for
prefixed API's. The function accepts 2 arguments:

- **what** `String`, The standard name of the property or function. If you are
  searching `WebSocket` constructors this should just be `WebSocket` with the
  proper casing.
- **where** `Object`, The object we need to search in. This can be a JavaScript
  object but also a global, `window` or `document`.

```js
var found = prefixes('WebSocket'); // Finds mozWebSocket or WebSocket
```

If no match is found we will return an `undefined`.

## License

MIT
