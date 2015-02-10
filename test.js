describe('prefixes', function () {
  'use strict';

  var assume = require('assume')
    , prefixes = require('./');

  /* istanbul ignore next */
  global.webkitRequestAnimationFrame = function raf() {};
  /* istanbul ignore next */
  global.mozWebSocket = function ws() {};
  /* istanbul ignore next */
  global.oSetTimeout = function ws() {};

  it('is exported as function', function () {
    assume(prefixes).is.a('function');
  });

  it('exposes the .vendor array list', function () {
    assume(prefixes.vendor).is.a('array');
  });

  it('can find a mozWebSocket', function () {
    var found = prefixes('WebSocket', global);

    assume(found).is.a('function');
    assume(found).equals(global.mozWebSocket);
  });

  it('defaults to global', function () {
    var found = prefixes('WebSocket');

    assume(found).is.a('function');
    assume(found).equals(global.mozWebSocket);
  });

  it('automatically UpperCases the first char', function () {
    var found = prefixes('requestAnimationFrame', global);

    assume(found).is.a('function');
    assume(found).equals(global.webkitRequestAnimationFrame);
  });

  it('finds unprefixed first', function () {
    var found = prefixes('setTimeout', global);

    assume(found).is.a('function');
    assume(found).equals(global.setTimeout);
  });
});
