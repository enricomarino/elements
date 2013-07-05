/**
 * elements
 * Elements component
 * 
 * @author Enrico Marino
 * @copyright 2013 Enrico Marino
 */

/**
 * Component dependencies
 */

var Element = require('element');

/*
 * Expose component
 */

module.expose = Elements;

/**
 * Elements
 * Initialize a new `Elements` with 
 * the given array-ish of `els` 
 * and `selector` string.
 *
 * @param {Mixed} els
 * @param {String} selector
 * @api private
 */

function Elements(list) {
  this.list  = list = [];
};

/**
 * use
 * Use a plugin
 * 
 * @param {Function} fn plugin
 * @return {Element} this for chaining
 * @api public
 */

Elements.use = function (fn) {
  fn(this);
  return this;
};

/**
 * Element
 */

Elements.element = Element;
