/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/oblo-util/index.d.ts:
/**
 * @record
 * @struct
 */
function ObloUtilStatic() {}
 /** @type {boolean} */
ObloUtilStatic.prototype.debug;

/**
 * @param {...?} args
 * @return {void}
 */
ObloUtilStatic.prototype.log = function(args) {};

/**
 * @param {...?} args
 * @return {void}
 */
ObloUtilStatic.prototype.error = function(args) {};

/**
 * @param {number} min
 * @param {number} max
 * @param {number} x
 * @return {number}
 */
ObloUtilStatic.prototype.clip = function(min, max, x) {};

/**
 * @param {number} x
 * @return {number}
 */
ObloUtilStatic.prototype.square = function(x) {};

/**
 * @template X
 * @param {number} n
 * @param {X} x
 * @return {!Array<X>}
 */
ObloUtilStatic.prototype.replicate = function(n, x) {};

/**
 * @param {string} c
 * @param {number} l
 * @param {?} str
 * @return {string}
 */
ObloUtilStatic.prototype.pad = function(c, l, str) {};

/**
 * @param {number} l
 * @param {number} n
 * @return {string}
 */
ObloUtilStatic.prototype.padZero = function(l, n) {};

/**
 * @param {string} str
 * @return {string}
 */
ObloUtilStatic.prototype.addslashes = function(str) {};

/**
 * @param {?} json
 * @param {string=} indentStr
 * @param {number=} maxDepth
 * @return {string}
 */
ObloUtilStatic.prototype.showJSON = function(json, indentStr, maxDepth) {};

/**
 * @param {!Date} date
 * @return {string}
 */
ObloUtilStatic.prototype.showTime = function(date) {};

/**
 * @param {!Date} date
 * @return {string}
 */
ObloUtilStatic.prototype.showDate = function(date) {};

/**
 * @param {string} dateStr
 * @return {!Date}
 */
ObloUtilStatic.prototype.readDate = function(dateStr) {};

/**
 * @param {?<!HTMLElement>} $elt
 * @param {string} attrName
 * @param {boolean} isSet
 * @return {void}
 */
ObloUtilStatic.prototype.setAttr = function($elt, attrName, isSet) {};
 /** @type {!ObloUtilStatic} */
var util;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "oblo-util"
/** @const */
tsickle_declare_module.oblo_util = {};

/* TODO: ExportAssignment in tsickle_declare_module.oblo_util */