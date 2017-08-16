/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fxn/index.d.ts:

/** @typedef {string} */
var HttpMethod;
/**
 * @record
 * @struct
 */
function HttpHeaders() {}

/* TODO: IndexSignature:  */

/**
 * @constructor
 * @struct
 * @param {string} path
 * @param {string} method
 * @param {!Object} requestHeaders
 * @param {!Object} params
 * @param {!Function} responder
 */
function Controller(path, method, requestHeaders, params, responder) {}
 /** @type {string} */
Controller.prototype._method;
 /** @type {string} */
Controller.prototype._path;
 /** @type {!Object} */
Controller.prototype._requestHeaders;
 /** @type {!Object} */
Controller.prototype._headers;
 /** @type {number} */
Controller.prototype._status;
 /** @type {!Function} */
Controller.prototype._responder;
 /** @type {!Object} */
Controller.prototype._securityPolicies;
 /** @type {?} */
Controller.prototype.params;

/**
 * @param {string} method
 * @param {number} id
 * @return {string}
 */
Controller.prototype.convertMethod = function(method, id) {};

/**
 * @return {void}
 */
Controller.prototype.run = function() {};

/**
 * @param {string} msg
 * @param {!Object} details
 * @return {boolean}
 */
Controller.prototype.notImplemented = function(msg, details) {};

/**
 * @return {void}
 */
Controller.prototype.before = function() {};

/**
 * @return {void}
 */
Controller.prototype.after = function() {};

/**
 * @return {void}
 */
Controller.prototype.get = function() {};

/**
 * @return {void}
 */
Controller.prototype.put = function() {};

/**
 * @return {void}
 */
Controller.prototype.post = function() {};

/**
 * @return {void}
 */
Controller.prototype.del = function() {};

/**
 * @return {void}
 */
Controller.prototype.options = function() {};

/**
 * @return {void}
 */
Controller.prototype.index = function() {};

/**
 * @return {void}
 */
Controller.prototype.show = function() {};

/**
 * @return {void}
 */
Controller.prototype.update = function() {};

/**
 * @return {void}
 */
Controller.prototype.create = function() {};

/**
 * @return {void}
 */
Controller.prototype.destroy = function() {};

/**
 * @param {number} value
 * @return {boolean}
 */
Controller.prototype.status = function(value) {};

/**
 * @return {?}
 */
Controller.prototype.setHeaders = function() {};

/**
 * @param {string} key
 * @param {string} value
 * @return {string}
 */
Controller.prototype.setHeader = function(key, value) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {string}
 */
Controller.prototype.appendHeader = function(key, value) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {string}
 */
Controller.prototype.getHeader = function(key, value) {};

/**
 * @param {number} code
 * @return {number}
 */
Controller.prototype.code = function(code) {};

/**
 * @return {number}
 */
Controller.prototype.getStatus = function() {};

/**
 * @param {(!Object|!String|?)} data
 * @return {void}
 */
Controller.prototype.render = function(data) {};

/**
 * @param {string} value
 * @return {?}
 */
Controller.prototype.allowOrigin = function(value) {};

/**
 * @param {string} directive
 * @param {string} src
 * @return {string}
 */
Controller.prototype.securityPolicy = function(directive, src) {};

/**
 * @param {string} location
 * @return {void}
 */
Controller.prototype.redirect = function(location) {};

/**
 * @constructor
 * @struct
 * @param {string} string
 */
function Daemon(string) {}

/**
 * @constructor
 * @struct
 * @param {string} string
 */
function Application(string) {}
 /** @type {!Function} */
Application.prototype.send;
/**
 * @constructor
 * @struct
 */
function Router() {}
/**
 * @constructor
 * @struct
 */
function Scheduler() {}