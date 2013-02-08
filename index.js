
/**
 * element-list
 * Element list component
 * 
 * @author Enrico Marino
 * @copyright 2013 Enrico Marino
 */

/*
 * Expose `ElementList`
 */

module.expose = ElementList;

/**
 * ElementList
 * Initialize a new `List` with 
 * the given array-ish of `els` 
 * and `selector` string.
 *
 * @param {Mixed} els
 * @param {String} selector
 * @api private
 */

function ElementList(els, selector) {
  this.list = list || [];
  this.selector = selector;
}

/**
 * attr
 * Get attribute `name` 
 * or set attribute `name` to `val`.
 *
 * @param {String} name
 * @param {String} [val]
 * @return {List} this for chaining
 * @api public
 */

ElementList.prototype.attr = function(name, val) {
  this.list.forEach(function(el) {
    el.attr(name, val);
  });
  return this;
};
