/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/expectations/index.d.ts:
 /** @type {!Expectations.IExpectations} */
var expect;
/** @const */
var Expectations = {};
/**
 * @record
 * @struct
 */
Expectations.IExpectations = function() {};

/* TODO: CallSignature: Expectations */

/**
 * @param {string} name
 * @param {!Function} matcher
 * @return {void}
 */
Expectations.IExpectations.prototype.addAssertion = function(name, matcher) {};
/**
 * @record
 * @struct
 */
Expectations.IAssertions = function() {};

/**
 * @param {string=} message
 * @return {?}
 */
Expectations.IAssertions.prototype.pass = function(message) {};

/**
 * @param {string} message
 * @return {?}
 */
Expectations.IAssertions.prototype.fail = function(message) {};

/**
 * @constructor
 * @struct
 * @param {?} value
 * @param {!Expectations.IAssertions=} assertions
 * @param {?=} expr
 * @param {!Expectations.Expect=} parent
 */
Expectations.Expect = function(value, assertions, expr, parent) {};
 /** @type {?} */
Expectations.Expect.prototype.value;
 /** @type {!Expectations.IAssertions} */
Expectations.Expect.prototype.assertions;
 /** @type {?} */
Expectations.Expect.prototype.expr;
 /** @type {!Expectations.Expect} */
Expectations.Expect.prototype.parent;
 /** @type {!Expectations.Expect} */
Expectations.Expect.prototype.not;

/**
 * @param {?} value
 * @param {?} expr
 * @param {string} toDo
 * @param {?=} otherVal
 * @return {string}
 */
Expectations.Expect.prototype.generateMessage = function(value, expr, toDo, otherVal) {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toEqual = function(val) {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toNotEqual = function(val) {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toBe = function(val) {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toBeTruthy = function() {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toBeFalsey = function() {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toBeFalsy = function() {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toBeGreaterThan = function(val) {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toBeLessThan = function(val) {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toContain = function(val) {};

/**
 * @param {?} val
 * @return {?}
 */
Expectations.Expect.prototype.toMatch = function(val) {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toBeDefined = function() {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toBeUndefined = function() {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toBeNull = function() {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.toThrow = function() {};

/**
 * @return {?}
 */
Expectations.Expect.prototype.pass = function() {};

/**
 * @param {string=} why
 * @param {?=} what
 * @return {?}
 */
Expectations.Expect.prototype.fail = function(why, what) {};