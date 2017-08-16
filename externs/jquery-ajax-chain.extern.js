/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery-ajax-chain/index.d.ts:
/** @const */
var ajaxChain = {};
/**
 * @record
 * @struct
 */
ajaxChain.JQueryAjaxChainStatic = function() {};

/* TODO: ConstructSignature: ajaxChain */
/**
 * @extends {JQueryPromise}
 * @record
 * @struct
 */
ajaxChain.JQueryAjaxChain = function() {};

/**
 * Enqueues one or more configuration objects for later processing.
 * @param {(!ajaxChain.AjaxChainConfiguration|!Array<!ajaxChain.AjaxChainConfiguration>)} confObj
 * @return {!ajaxChain.JQueryAjaxChain}
 */
ajaxChain.JQueryAjaxChain.prototype.enqueue = function(confObj) {};

/**
 * Sequentially and synchronously dequeues the configuration objects enqueued via enqueue() method
 * in the order they were added, triggering the related Ajax calls.
 * @return {!ajaxChain.JQueryAjaxChain}
 */
ajaxChain.JQueryAjaxChain.prototype.dequeue = function() {};

/**
 * Clears the currently queued configuration objects.
 * @return {!ajaxChain.JQueryAjaxChain}
 */
ajaxChain.JQueryAjaxChain.prototype.clearQueue = function() {};
/**
 * @record
 * @struct
 */
ajaxChain.AjaxChainConfiguration = function() {};
 /** @type {!JQueryAjaxSettings} */
ajaxChain.AjaxChainConfiguration.prototype.ajaxSettings;
 /** @type {!String} */
ajaxChain.AjaxChainConfiguration.prototype.label;
 /** @type {function(?): (!Object|!String|!Array<!Object>)} */
ajaxChain.AjaxChainConfiguration.prototype.transform;
 /** @type {function(?): !String} */
ajaxChain.AjaxChainConfiguration.prototype.appendToUrl;
 /** @type {function(?): ?} */
ajaxChain.AjaxChainConfiguration.prototype.hasErrors;
 /** @type {function(?): ?} */
ajaxChain.AjaxChainConfiguration.prototype.hasCache;
 /** @type {function(?): !Boolean} */
ajaxChain.AjaxChainConfiguration.prototype.hasHaltingCapabilities;
 /** @type {function(?): !Boolean} */
ajaxChain.AjaxChainConfiguration.prototype.isSkippable;
 /** @type {!ajaxChain.JQueryAjaxChainStatic} */
JQueryStatic.prototype.AjaxChain;