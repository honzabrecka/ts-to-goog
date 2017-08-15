/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/alertify/index.d.ts:
 /** @type {!alertify.IAlertifyStatic} */
var alertify;
/**
 * @record
 * @struct
 */
alertify.IAlertifyStatic = function() {};
 /** @type {!alertify.ILabels} */
alertify.IAlertifyStatic.prototype.labels;

/**
 * Create an alert dialog box
 * \@since 0.0.1
 * @param {string} message   The message passed from the callee
 * @param {!Function=} fn        Callback function
 * @param {string=} cssClass  Class(es) to append to dialog box
 * @return {!alertify.IAlertifyStatic} alertify (ie this)
 */
alertify.IAlertifyStatic.prototype.alert = function(message, fn, cssClass) {};

/**
 * Create a confirm dialog box
 * \@since 0.0.1
 * @param {string} message   The message passed from the callee
 * @param {!Function=} fn        Callback function
 * @param {string=} cssClass  Class(es) to append to dialog box
 * @return {!alertify.IAlertifyStatic} alertify (ie this)
 */
alertify.IAlertifyStatic.prototype.confirm = function(message, fn, cssClass) {};

/**
 * Extend the log method to create custom methods
 * \@since 0.0.1
 * @param {string} type  Custom method name
 * @return {function(string, number): !alertify.IAlertifyStatic} function for logging
 */
alertify.IAlertifyStatic.prototype.extend = function(type) {};

/**
 * Initialize Alertify and create the 2 main elements.
 * Initialization will happen automatically on the first
 * use of alert, confirm, prompt or log.
 * \@since 0.0.1
 * @return {void}
 */
alertify.IAlertifyStatic.prototype.init = function() {};

/**
 * Show a new log message box
 * \@since 0.0.1
 * @param {string} message   The message passed from the callee
 * @param {string=} type      Optional type of log message
 * @param {number=} wait      Optional time (in ms) to wait before auto-hiding
 * @return {!alertify.IAlertifyStatic} alertify (ie this)
 */
alertify.IAlertifyStatic.prototype.log = function(message, type, wait) {};

/**
 * Create a prompt dialog box
 * \@since 0.0.1
 * @param {string} message   The message passed from the callee
 * @param {!Function=} fn        Callback function
 * @param {string=} placeholder Default value for prompt input
 * @param {string=} cssClass  Class(es) to append to dialog
 * @return {!alertify.IAlertifyStatic} alertify (ie this)
 */
alertify.IAlertifyStatic.prototype.prompt = function(message, fn, placeholder, cssClass) {};

/**
 * Shorthand for log messages
 * \@since 0.0.1
 * @param {string} message The message passed from the callee
 * @return {!alertify.IAlertifyStatic} alertify (ie this)
 */
alertify.IAlertifyStatic.prototype.success = function(message) {};

/**
 * Shorthand for log messages
 * \@since 0.0.1
 * @param {string} message The message passed from the callee
 * @return {!alertify.IAlertifyStatic} alertify (ie this)
 */
alertify.IAlertifyStatic.prototype.error = function(message) {};

/**
 * Used to set alertify properties
 * \@since 0.2.11
 * @param {!alertify.IProperties} args
 * @return {void}
 */
alertify.IAlertifyStatic.prototype.set = function(args) {};

/**
 * Attaches alertify.error to window.onerror method
 * \@since 0.3.8
 * @return {void}
 */
alertify.IAlertifyStatic.prototype.debug = function() {};
/**
 * @record
 * @struct
 */
alertify.IProperties = function() {};
 /** @type {number} */
alertify.IProperties.prototype.delay;
 /** @type {!alertify.ILabels} */
alertify.IProperties.prototype.labels;
 /** @type {string} */
alertify.IProperties.prototype.buttonFocus;
 /** @type {boolean} */
alertify.IProperties.prototype.buttonReverse;
/**
 * @record
 * @struct
 */
alertify.ILabels = function() {};
 /** @type {string} */
alertify.ILabels.prototype.ok;
 /** @type {string} */
alertify.ILabels.prototype.cancel;