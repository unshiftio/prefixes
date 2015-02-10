'use strict';

/**
 * Super simple utility to generate vendor prefixes for DOM/JavaScript
 * functions.
 *
 * @param {String} what Standard name of the property we're looking for.
 * @param {Object} where Object we need to search in.
 * @returns {Mixed} The found property/function or undefined.
 * @api public
 */
function prefixes(what, where) {
  where = where || global;

  if (what in where) return where[what];
  else for (var i = 0, key; i < prefixes.vendor.length; i++) {
    key = prefixes.vendor[i] + what.charAt(0).toUpperCase() + what.slice(1);

    if (key in where) {
      return where[key];
    }
  }
}

/**
 * The various of vendor prefixes we need to check for the existence of
 * a standard. The string sorted based on browser popularity so more popular
 * browsers are matched faster then other. We include lower case versions of the
 * browsers first as they are more common in API's. There are some edge cases
 * here as events usually uppercased.
 *
 * Most browser's prefix as `mozRequestAnimationFrame` but Microsoft
 * actually decided to use 2 flavors `MSPointerEvent`.
 *
 * @type {Array}
 * @public
 */
prefixes.vendor = 'webkit,moz,ms,o,khtml,WebKit,Moz,MS,O,Khtml'.split(',');

//
// Expose the prefixer.
//
module.exports = prefixes;
