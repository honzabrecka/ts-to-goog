/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/color-string/index.d.ts:

/** @typedef {!Array<?>} */
var Color;
/**
 * @record
 * @struct
 */
function ColorDescriptor() {}
 /** @type {string} */
ColorDescriptor.prototype.model;
 /** @type {!Array<?>} */
ColorDescriptor.prototype.value;

/**
 * @param {string} colorString
 * @return {?}
 */
function get(colorString) {}

/**
 * @param {string} colorString
 * @return {!Array<?>}
 */
get.hsl = function(colorString) {};

/**
 * @param {string} colorString
 * @return {!Array<?>}
 */
get.hwb = function(colorString) {};

/**
 * @param {string} colorString
 * @return {!Array<?>}
 */
get.rgb = function(colorString) {};
/** @const */
var to = {};

/**
 * @param {...(number|!Array<number>)} args
 * @return {string}
 */
to.hex = function(args) {};

/**
 * @param {...(number|!Array<number>)} args
 * @return {string}
 */
to.rgb = function(args) {};

/**
 * @param {...(number|!Array<number>)} args
 * @return {string}
 */
to.rgb.percent = function(args) {};

/**
 * @param {...(number|!Array<number>)} args
 * @return {string}
 */
to.keyword = function(args) {};

/**
 * @param {...(number|!Array<number>)} args
 * @return {string}
 */
to.hsl = function(args) {};

/**
 * @param {...(number|!Array<number>)} args
 * @return {string}
 */
to.hwb = function(args) {};