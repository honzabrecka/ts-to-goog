/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/tween.js/index.d.ts:
/** @const */
var TWEEN = {};

/**
 * @return {!Array<!TWEEN.Tween>}
 */
TWEEN.getAll = function() {};

/**
 * @return {void}
 */
TWEEN.removeAll = function() {};

/**
 * @param {!TWEEN.Tween} tween
 * @return {void}
 */
TWEEN.add = function(tween) {};

/**
 * @param {!TWEEN.Tween} tween
 * @return {void}
 */
TWEEN.remove = function(tween) {};

/**
 * @param {number=} time
 * @return {boolean}
 */
TWEEN.update = function(time) {};

/**
 * @return {number}
 */
TWEEN.now = function() {};

/**
 * @constructor
 * @struct
 * @param {?=} object
 */
TWEEN.Tween = function(object) {};

/**
 * @param {?} properties
 * @param {number} duration
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.to = function(properties, duration) {};

/**
 * @param {number=} time
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.start = function(time) {};

/**
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.stop = function() {};

/**
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.end = function() {};

/**
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.stopChainedTweens = function() {};

/**
 * @param {number} amount
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.delay = function(amount) {};

/**
 * @param {number} times
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.repeat = function(times) {};

/**
 * @param {number} times
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.repeatDelay = function(times) {};

/**
 * @param {boolean} enable
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.yoyo = function(enable) {};

/**
 * @param {function(number): number} easing
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.easing = function(easing) {};

/**
 * @param {function(!Array<number>, number): number} interpolation
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.interpolation = function(interpolation) {};

/**
 * @param {...!TWEEN.Tween} tweens
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.chain = function(tweens) {};

/**
 * @param {function(?): void} callback
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.onStart = function(callback) {};

/**
 * @param {function(?): void} callback
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.onStop = function(callback) {};

/**
 * @param {function(?): void} callback
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.onUpdate = function(callback) {};

/**
 * @param {function(?): void} callback
 * @return {!TWEEN.Tween}
 */
TWEEN.Tween.prototype.onComplete = function(callback) {};

/**
 * @param {number} time
 * @return {boolean}
 */
TWEEN.Tween.prototype.update = function(time) {};
 /** @type {!Easing} */
TWEEN.Easing;
 /** @type {!Interpolation} */
TWEEN.Interpolation;
/**
 * @record
 * @struct
 */
function Easing() {}
 /** @type {{None: function(number): number}} */
Easing.prototype.Linear;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Quadratic;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Cubic;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Quartic;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Quintic;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Sinusoidal;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Exponential;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Circular;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Elastic;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Back;
 /** @type {{In: function(number): number, Out: function(number): number, InOut: function(number): number}} */
Easing.prototype.Bounce;
/**
 * @record
 * @struct
 */
function Interpolation() {}
 /** @type {{Linear: function(number, number, number): number, Bernstein: function(number, number): number, Factorial: function(number): number, CatmullRom: function(number, number, number, number, number): number}} */
Interpolation.prototype.Utils;

/**
 * @param {!Array<number>} v
 * @param {number} k
 * @return {number}
 */
Interpolation.prototype.Linear = function(v, k) {};

/**
 * @param {!Array<number>} v
 * @param {number} k
 * @return {number}
 */
Interpolation.prototype.Bezier = function(v, k) {};

/**
 * @param {!Array<number>} v
 * @param {number} k
 * @return {number}
 */
Interpolation.prototype.CatmullRom = function(v, k) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "@tweenjs/tween.js"
/** @const */
tsickle_declare_module._tweenjs_tween_js = {};

/* TODO: ExportAssignment in tsickle_declare_module._tweenjs_tween_js */