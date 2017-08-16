/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/slideout/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var Slideout = {};
/**
 * @record
 * @struct
 */
Slideout.Options = function() {};
 /** @type {!HTMLElement} */
Slideout.Options.prototype.panel;
 /** @type {!HTMLElement} */
Slideout.Options.prototype.menu;
 /** @type {number} */
Slideout.Options.prototype.duration;
 /** @type {string} */
Slideout.Options.prototype.fx;
 /** @type {number} */
Slideout.Options.prototype.padding;
 /** @type {number} */
Slideout.Options.prototype.tolerance;
 /** @type {boolean} */
Slideout.Options.prototype.touch;
 /** @type {string} */
Slideout.Options.prototype.side;

/** @typedef {string} */
Slideout.Events;

/**
 * Opens the slideout menu. It emits beforeopen and open events.
 * @return {!Slideout}
 */
Slideout.prototype.open = function() {};

/**
 * Closes the slideout menu. It emits beforeclose and close events.
 * @return {!Slideout}
 */
Slideout.prototype.close = function() {};

/**
 * Toggles (open/close) the slideout menu.
 * @return {!Slideout}
 */
Slideout.prototype.toggle = function() {};

/**
 * Returns true if the slideout is currently open, and false if it is closed.
 * @return {boolean}
 */
Slideout.prototype.isOpen = function() {};

/**
 * Cleans up the instance so another slideout can be created on the same area.
 * @return {!Slideout}
 */
Slideout.prototype.destroy = function() {};

/**
 * Enables opening the slideout via touch events.
 * @return {!Slideout}
 */
Slideout.prototype.enableTouch = function() {};

/**
 * Disables opening the slideout via touch events.
 * @return {!Slideout}
 */
Slideout.prototype.disableTouch = function() {};

/**
 * Adds a listener to the collection for the specified event.
 * Adds a listener to the collection for the specified event.
 * @param {string} event The event name.
 * @param {function(number): ?|!Function} listener A listener function to add.
 * @return {!Slideout}
 */
Slideout.prototype.on = function(event, listener) {};

/**
 * Adds a listener to the collection for the specified event that will be called only once.
 * Adds a listener to the collection for the specified event that will be called only once.
 * @param {string} event The event name.
 * @param {function(number): ?|!Function} listener A listener function to add.
 * @return {!Slideout}
 */
Slideout.prototype.once = function(event, listener) {};

/**
 * Removes a listener from the collection for the specified event.
 * Removes a listener from the collection for the specified event.
 * @param {string} event The event name.
 * @param {function(number): ?|!Function} listener A listener function to remove.
 * @return {!Slideout}
 */
Slideout.prototype.off = function(event, listener) {};

/**
 * Execute each item in the listener collection in order with the specified data.
 * @param {string} event The name of the event you want to emit.
 * @param {...?} data Data to pass to the listeners.
 * @return {!Slideout}
 */
Slideout.prototype.emit = function(event, data) {};