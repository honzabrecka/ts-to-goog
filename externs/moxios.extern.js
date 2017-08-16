/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/moxios/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function Item() {}
 /** @type {?} */
Item.prototype.response;
 /** @type {string} */
Item.prototype.responseText;
 /** @type {number} */
Item.prototype.status;
 /** @type {string} */
Item.prototype.statusText;
 /** @type {?} */
Item.prototype.headers;

/**
 * @constructor
 * @struct
 */
function Tracker() {}

/**
 * Reset all the items being tracked
 * @return {void}
 */
Tracker.prototype.reset = function() {};

/**
 * Add an item to be tracked
 * 
 * @param {?} item
 * @return {void}
 */
Tracker.prototype.track = function(item) {};

/**
 * The count of items being tracked
 * 
 * @return {number}
 */
Tracker.prototype.count = function() {};

/**
 * Get an item being tracked at a given index
 * 
 * @param {number} index
 * @return {!Request}
 */
Tracker.prototype.at = function(index) {};

/**
 * Get the first item being tracked
 * 
 * @return {!Request}
 */
Tracker.prototype.first = function() {};

/**
 * Get the most recent (last) item being tracked
 * 
 * @return {!Request}
 */
Tracker.prototype.mostRecent = function() {};

/**
 * Dump the items being tracked to the console.
 * @return {void}
 */
Tracker.prototype.debug = function() {};

/**
 * Find and return element given the HTTP method and the URL.
 * @param {string} method
 * @param {string=} url
 * @return {!Request}
 */
Tracker.prototype.get = function(method, url) {};

/**
 * Stop an element from being tracked by removing it. Finds and returns the element,
 * given the HTTP method and the URL.
 * @param {string} method
 * @param {string} url
 * @return {!Request}
 */
Tracker.prototype.remove = function(method, url) {};

/**
 * @constructor
 * @struct
 * Create a new Request object
 * 
 * @param {function(?): void} resolve
 * @param {function(?): void} reject
 * @param {?} config
 */
function Request(resolve, reject, config) {}

/**
 * Respond to this request with a timeout result
 * 
 * @return {!Promise<!Response>}
 */
Request.prototype.respondWithTimeout = function() {};

/**
 * Respond to this request with a specified result
 * 
 * @param {?} res
 * @return {!Promise<!Response>}
 */
Request.prototype.respondWith = function(res) {};

/**
 * @constructor
 * @struct
 * Create a new Response object
 * 
 * @param {!Request} req
 * @param {?} res
 */
function Response(req, res) {}
 /** @type {?} */
Response.prototype.config;
 /** @type {?} */
Response.prototype.data;
 /** @type {number} */
Response.prototype.status;
 /** @type {string} */
Response.prototype.statusText;
 /** @type {?} */
Response.prototype.headers;
 /** @type {!Request} */
Response.prototype.request;
 /** @type {{stubs: !Tracker, requests: !Tracker, delay: number, timeoutException: !Error, install: function(?): void, uninstall: function(?): void, stubRequest: function((string|!RegExp), ?): void, stubOnce: function(string, (string|!RegExp), ?): !Promise<void>, stubFailure: function(string, (string|!RegExp), ?): !Promise<void>, stubTimeout: function((string|!RegExp)): string, withMock: function(function(): void): void, wait: function(function(): void, number): void}} */
var moxios;

/* TODO: ExportAssignment in  */