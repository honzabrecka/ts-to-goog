/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.tinycarousel/index.d.ts:
/** @const */
var JQueryTinyCarousel = {};
/**
 * @record
 * @struct
 */
JQueryTinyCarousel.JQueryTinyCarouselOptions = function() {};
 /** @type {number} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.start;
 /** @type {string} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.axis;
 /** @type {number} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.display;
 /** @type {boolean} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.rewind;
 /** @type {boolean} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.controls;
 /** @type {boolean} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.pager;
 /** @type {boolean} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.interval;
 /** @type {number} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.intervaltime;
 /** @type {boolean} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.animation;
 /** @type {number} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.duration;
 /** @type {function(!HTMLElement, number): void} */
JQueryTinyCarousel.JQueryTinyCarouselOptions.prototype.callback;

/**
 * Creates a new tinycarousel with the specified, or default, options.
 * 
 * @param {!JQueryTinyCarousel.JQueryTinyCarouselOptions=} options The options
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.tinycarousel = function(options) {};

/**
 * Moves the tinycarousel to the specified block.
 * 
 * @param {number} index The index of the block to move to
 * @return {void}
 */
JQuery.prototype.tinycarousel_move = function(index) {};

/**
 * Starts the interval.
 * @return {void}
 */
JQuery.prototype.tinycarousel_start = function() {};

/**
 * Stops the interval.
 * @return {void}
 */
JQuery.prototype.tinycarousel_stop = function() {};