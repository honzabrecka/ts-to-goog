/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/scrollreveal/index.d.ts:
/** @const */
var scrollReveal = {};
/**
 * @record
 * @struct
 */
scrollReveal.ScrollRevealRotateObject = function() {};
 /** @type {number} */
scrollReveal.ScrollRevealRotateObject.prototype.x;
 /** @type {number} */
scrollReveal.ScrollRevealRotateObject.prototype.y;
 /** @type {number} */
scrollReveal.ScrollRevealRotateObject.prototype.z;
/**
 * @record
 * @struct
 */
scrollReveal.ScrollRevealPositionObject = function() {};
 /** @type {number} */
scrollReveal.ScrollRevealPositionObject.prototype.top;
 /** @type {number} */
scrollReveal.ScrollRevealPositionObject.prototype.right;
 /** @type {number} */
scrollReveal.ScrollRevealPositionObject.prototype.bottom;
 /** @type {number} */
scrollReveal.ScrollRevealPositionObject.prototype.left;
/**
 * @record
 * @struct
 */
scrollReveal.ScrollRevealObjectOptions = function() {};
 /** @type {string} */
scrollReveal.ScrollRevealObjectOptions.prototype.origin;
 /** @type {string} */
scrollReveal.ScrollRevealObjectOptions.prototype.distance;
 /** @type {number} */
scrollReveal.ScrollRevealObjectOptions.prototype.duration;
 /** @type {number} */
scrollReveal.ScrollRevealObjectOptions.prototype.delay;
 /** @type {!scrollReveal.ScrollRevealRotateObject} */
scrollReveal.ScrollRevealObjectOptions.prototype.rotate;
 /** @type {number} */
scrollReveal.ScrollRevealObjectOptions.prototype.opacity;
 /** @type {number} */
scrollReveal.ScrollRevealObjectOptions.prototype.scale;
 /** @type {string} */
scrollReveal.ScrollRevealObjectOptions.prototype.easing;
 /** @type {?} */
scrollReveal.ScrollRevealObjectOptions.prototype.container;
 /** @type {boolean} */
scrollReveal.ScrollRevealObjectOptions.prototype.mobile;
 /** @type {boolean} */
scrollReveal.ScrollRevealObjectOptions.prototype.reset;
 /** @type {string} */
scrollReveal.ScrollRevealObjectOptions.prototype.useDelay;
 /** @type {number} */
scrollReveal.ScrollRevealObjectOptions.prototype.viewFactor;
 /** @type {!scrollReveal.ScrollRevealPositionObject} */
scrollReveal.ScrollRevealObjectOptions.prototype.viewOffset;

/**
 * @param {!HTMLElement|!NodeListOf<!Element>} domEl
 * @return {void}
 */
scrollReveal.ScrollRevealObjectOptions.prototype.beforeReveal = function(domEl) {};

/**
 * @param {!HTMLElement|!NodeListOf<!Element>} domEl
 * @return {void}
 */
scrollReveal.ScrollRevealObjectOptions.prototype.afterReveal = function(domEl) {};

/**
 * @param {!HTMLElement|!NodeListOf<!Element>} domEl
 * @return {void}
 */
scrollReveal.ScrollRevealObjectOptions.prototype.beforeReset = function(domEl) {};

/**
 * @param {!HTMLElement|!NodeListOf<!Element>} domEl
 * @return {void}
 */
scrollReveal.ScrollRevealObjectOptions.prototype.afterReset = function(domEl) {};
/**
 * @record
 * @struct
 */
scrollReveal.ScrollRevealObject = function() {};

/* TODO: CallSignature: scrollReveal */

/* TODO: CallSignature: scrollReveal */

/**
 * @param {string|!HTMLElement|!NodeListOf<!Element>} selector
 * @param {number|!scrollReveal.ScrollRevealObjectOptions=} interval_or_options
 * @param {number=} interval
 * @return {!scrollReveal.ScrollRevealObject}
 */
scrollReveal.ScrollRevealObject.prototype.reveal = function(selector, interval_or_options, interval) {};

/**
 * @return {void}
 */
scrollReveal.ScrollRevealObject.prototype.sync = function() {};
 /** @type {!scrollReveal.ScrollRevealObject} */
var ScrollReveal;