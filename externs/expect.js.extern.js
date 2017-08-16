/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/expect.js/index.d.ts:

/**
 * @param {?=} target
 * @return {!Expect.Root}
 */
function expect(target) {}
/** @const */
var Expect = {};
/**
 * @record
 * @struct
 */
Expect.Assertion = function() {};
 /** @type {!Expect.An} */
Expect.Assertion.prototype.an;

/**
 * Check if the value is truthy
 * @return {void}
 */
Expect.Assertion.prototype.ok = function() {};

/**
 * Creates an anonymous function which calls fn with arguments.
 * @param {...?} args
 * @return {!Expect.Root}
 */
Expect.Assertion.prototype.withArgs = function(args) {};

/**
 * Assert that the function throws.
 * 
 * Assert that the function throws.
 * 
 * @param {function(?): void|!RegExp=} fn_or_regexp callback to match error string against / regexp to match error string against
 * @return {void}
 */
Expect.Assertion.prototype.throwError = function(fn_or_regexp) {};

/**
 * Assert that the function throws.
 * 
 * Assert that the function throws.
 * 
 * @param {function(?): void|!RegExp=} fn_or_regexp callback to match error string against
 * @return {void}
 */
Expect.Assertion.prototype.throwException = function(fn_or_regexp) {};

/**
 * Checks if the array is empty.
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.empty = function() {};

/**
 * Checks if the obj exactly equals another.
 * @param {?} obj
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.equal = function(obj) {};

/**
 * Checks if the obj sortof equals another.
 * @param {?} obj
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.eql = function(obj) {};

/**
 * Assert within start to finish (inclusive).
 * 
 * @param {number} start
 * @param {number} finish
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.within = function(start, finish) {};

/**
 * Assert typeof.
 * Assert instanceof.
 * @param {string|!Function} type
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.a = function(type) {};

/**
 * Assert numeric value above n.
 * @param {number} n
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.greaterThan = function(n) {};

/**
 * Assert numeric value above n.
 * @param {number} n
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.above = function(n) {};

/**
 * Assert numeric value below n.
 * @param {number} n
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.lessThan = function(n) {};

/**
 * Assert numeric value below n.
 * @param {number} n
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.below = function(n) {};

/**
 * Assert string value matches regexp.
 * 
 * @param {!RegExp} regexp
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.match = function(regexp) {};

/**
 * Assert property "length" exists and has value of n.
 * 
 * @param {number} n
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.length = function(n) {};

/**
 * Assert property name exists, with optional val.
 * 
 * @param {string} name
 * @param {?=} val
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.property = function(name, val) {};

/**
 * Assert that string contains str.
 * Assert that the array contains obj.
 * @param {string|?} str_or_obj
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.contain = function(str_or_obj) {};

/**
 * @param {string|?} str_or_obj
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.string = function(str_or_obj) {};

/**
 * Assert exact keys or inclusion of keys by using the `.own` modifier.
 * Assert exact keys or inclusion of keys by using the `.own` modifier.
 * @param {...!Array<string>|string} keys
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.key = function(keys) {};

/**
 * Assert exact keys or inclusion of keys by using the `.own` modifier.
 * Assert exact keys or inclusion of keys by using the `.own` modifier.
 * @param {...!Array<string>|string} keys
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.keys = function(keys) {};

/**
 * Assert a failure.
 * @param {string=} message
 * @return {!Expect.Assertion}
 */
Expect.Assertion.prototype.fail = function(message) {};
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.Root = function() {};
 /** @type {!Expect.Not} */
Expect.Root.prototype.not;
 /** @type {!Expect.To} */
Expect.Root.prototype.to;
 /** @type {!Expect.Only} */
Expect.Root.prototype.only;
 /** @type {!Expect.Have} */
Expect.Root.prototype.have;
 /** @type {!Expect.Be} */
Expect.Root.prototype.be;
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.Be = function() {};

/* TODO: CallSignature: Expect */
 /** @type {!Expect.An} */
Expect.Be.prototype.an;
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.An = function() {};

/* TODO: CallSignature: Expect */

/* TODO: CallSignature: Expect */
/**
 * @extends {Expect.NotBase}
 * @record
 * @struct
 */
Expect.Not = function() {};
 /** @type {!Expect.ToBase} */
Expect.Not.prototype.to;
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.NotBase = function() {};
 /** @type {!Expect.Be} */
Expect.NotBase.prototype.be;
 /** @type {!Expect.Have} */
Expect.NotBase.prototype.have;
 /** @type {!Expect.Assertion} */
Expect.NotBase.prototype.include;
 /** @type {!Expect.Only} */
Expect.NotBase.prototype.only;
/**
 * @extends {Expect.ToBase}
 * @record
 * @struct
 */
Expect.To = function() {};
 /** @type {!Expect.NotBase} */
Expect.To.prototype.not;
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.ToBase = function() {};
 /** @type {!Expect.Be} */
Expect.ToBase.prototype.be;
 /** @type {!Expect.Have} */
Expect.ToBase.prototype.have;
 /** @type {!Expect.Assertion} */
Expect.ToBase.prototype.include;
 /** @type {!Expect.Only} */
Expect.ToBase.prototype.only;
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.Only = function() {};
 /** @type {!Expect.Have} */
Expect.Only.prototype.have;
/**
 * @extends {Expect.Assertion}
 * @record
 * @struct
 */
Expect.Have = function() {};
 /** @type {!Expect.Assertion} */
Expect.Have.prototype.own;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "expect.js"
/** @const */
tsickle_declare_module.expect_js = {};

/* TODO: ExportAssignment in tsickle_declare_module.expect_js */