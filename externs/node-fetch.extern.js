/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-fetch/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {(string|?)} input
 * @param {?=} init
 */
function Request(input, init) {}
 /** @type {string} */
Request.prototype.method;
 /** @type {string} */
Request.prototype.url;
 /** @type {?} */
Request.prototype.headers;
 /** @type {string} */
Request.prototype.context;
 /** @type {string} */
Request.prototype.referrer;
 /** @type {string} */
Request.prototype.redirect;
 /** @type {boolean} */
Request.prototype.compress;
 /** @type {!Agent} */
Request.prototype.agent;
 /** @type {number} */
Request.prototype.counter;
 /** @type {number} */
Request.prototype.follow;
 /** @type {string} */
Request.prototype.hostname;
 /** @type {string} */
Request.prototype.protocol;
 /** @type {number} */
Request.prototype.port;
 /** @type {number} */
Request.prototype.timeout;
 /** @type {number} */
Request.prototype.size;
/**
 * @record
 * @struct
 */
function RequestInit() {}
 /** @type {string} */
RequestInit.prototype.method;
 /** @type {(?|!Array<string>)} */
RequestInit.prototype.headers;
 /** @type {(string|!ArrayBuffer|!ArrayBufferView|!NodeJS.ReadableStream)} */
RequestInit.prototype.body;
 /** @type {string} */
RequestInit.prototype.redirect;
 /** @type {number} */
RequestInit.prototype.timeout;
 /** @type {boolean} */
RequestInit.prototype.compress;
 /** @type {number} */
RequestInit.prototype.size;
 /** @type {!Agent} */
RequestInit.prototype.agent;
 /** @type {number} */
RequestInit.prototype.follow;

/** @typedef {string} */
var RequestContext;

/** @typedef {string} */
var RequestMode;

/** @typedef {string} */
var RequestRedirect;

/** @typedef {string} */
var RequestCredentials;

/** @typedef {string} */
var RequestCache;
/**
 * @constructor
 * @struct
 */
function Headers() {}

/**
 * @param {string} name
 * @param {string} value
 * @return {void}
 */
Headers.prototype.append = function(name, value) {};

/**
 * @param {string} name
 * @return {void}
 */
Headers.prototype.delete = function(name) {};

/**
 * @param {string} name
 * @return {string}
 */
Headers.prototype.get = function(name) {};

/**
 * @param {string} name
 * @return {!Array<string>}
 */
Headers.prototype.getAll = function(name) {};

/**
 * @param {string} name
 * @return {boolean}
 */
Headers.prototype.has = function(name) {};

/**
 * @param {string} name
 * @param {string} value
 * @return {void}
 */
Headers.prototype.set = function(name, value) {};

/**
 * @param {?} callback
 * @return {void}
 */
Headers.prototype.forEach = function(callback) {};
/**
 * @constructor
 * @struct
 */
function Body() {}
 /** @type {boolean} */
Body.prototype.bodyUsed;
 /** @type {!NodeJS.ReadableStream} */
Body.prototype.body;

/**
 * @template T
 * @return {!Promise<?>}
 */
Body.prototype.json = function() {};

/**
 * @return {!Promise<string>}
 */
Body.prototype.text = function() {};

/**
 * @return {!Promise<?>}
 */
Body.prototype.buffer = function() {};

/**
 * @constructor
 * @struct
 * @param {(string|!ArrayBuffer|!ArrayBufferView|!NodeJS.ReadableStream)=} body
 * @param {?=} init
 */
function Response(body, init) {}
 /** @type {string} */
Response.prototype.type;
 /** @type {string} */
Response.prototype.url;
 /** @type {number} */
Response.prototype.status;
 /** @type {boolean} */
Response.prototype.ok;
 /** @type {number} */
Response.prototype.size;
 /** @type {string} */
Response.prototype.statusText;
 /** @type {number} */
Response.prototype.timeout;
 /** @type {?} */
Response.prototype.headers;

/**
 * @return {?}
 */
Response.error = function() {};

/**
 * @param {string} url
 * @param {number} status
 * @return {?}
 */
Response.redirect = function(url, status) {};

/**
 * @return {?}
 */
Response.prototype.clone = function() {};

/** @typedef {string} */
var ResponseType;
/**
 * @record
 * @struct
 */
function ResponseInit() {}
 /** @type {number} */
ResponseInit.prototype.status;
 /** @type {string} */
ResponseInit.prototype.statusText;
 /** @type {(?|!Array<string>)} */
ResponseInit.prototype.headers;

/** @typedef {(?|!Array<string>)} */
var HeaderInit;

/** @typedef {(string|!ArrayBuffer|!ArrayBufferView|!NodeJS.ReadableStream)} */
var BodyInit;

/** @typedef {(string|?)} */
var RequestInfo;

/**
 * @param {(string|?)} url
 * @param {?=} init
 * @return {!Promise<?>}
 */
function fetch(url, init) {}