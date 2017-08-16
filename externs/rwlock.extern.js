/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rwlock/index.d.ts:
/**
 * @constructor
 * @struct
 */
function ReadWriteGeneric() {}

/**
 * @param {T|string} callback_or_key
 * @param {!ReadWriteLock.Options|T=} options_or_callback
 * @param {!ReadWriteLock.Options=} options
 * @return {void}
 */
ReadWriteGeneric.prototype.readLock = function(callback_or_key, options_or_callback, options) {};

/**
 * @param {T|string} callback_or_key
 * @param {!ReadWriteLock.Options|T=} options_or_callback
 * @param {!ReadWriteLock.Options=} options
 * @return {void}
 */
ReadWriteGeneric.prototype.writeLock = function(callback_or_key, options_or_callback, options) {};
/** @const */
var ReadWriteLock = {};

/** @typedef {function(): void} */
ReadWriteLock.Release;

/** @typedef {function(function(): void): void} */
ReadWriteLock.Callback;

/** @typedef {function(!Error, function(): void): void} */
ReadWriteLock.AsyncCallback;
/**
 * @record
 * @struct
 */
ReadWriteLock.Options = function() {};
 /** @type {?} */
ReadWriteLock.Options.prototype.scope;
 /** @type {number} */
ReadWriteLock.Options.prototype.timeout;

/**
 * @return {void}
 */
ReadWriteLock.Options.prototype.timeoutCallback = function() {};
 /** @type {!ReadWriteGeneric<function(!Error, function(): void): void>} */
ReadWriteLock.prototype.async;

/* TODO: ExportAssignment in  */