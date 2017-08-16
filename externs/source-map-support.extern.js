/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/source-map-support/index.d.ts:
/**
 * @record
 * @struct
 */
function UrlAndMap() {}
 /** @type {string} */
UrlAndMap.prototype.url;
 /** @type {(string|?)} */
UrlAndMap.prototype.map;
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {boolean} */
Options.prototype.handleUncaughtExceptions;
 /** @type {boolean} */
Options.prototype.hookRequire;
 /** @type {boolean} */
Options.prototype.emptyCacheBetweenOperations;
 /** @type {string} */
Options.prototype.environment;
 /** @type {boolean} */
Options.prototype.overrideRetrieveFile;
 /** @type {boolean} */
Options.prototype.overrideRetrieveSourceMap;

/**
 * @param {string} path
 * @return {string}
 */
Options.prototype.retrieveFile = function(path) {};

/**
 * @param {string} source
 * @return {?}
 */
Options.prototype.retrieveSourceMap = function(source) {};
/**
 * @record
 * @struct
 */
function Position() {}
 /** @type {string} */
Position.prototype.source;
 /** @type {number} */
Position.prototype.line;
 /** @type {number} */
Position.prototype.column;

/**
 * @param {?} frame
 * @return {?}
 */
function wrapCallSite(frame) {}

/**
 * @param {!Error} error
 * @return {string}
 */
function getErrorSource(error) {}

/**
 * @param {?} position
 * @return {?}
 */
function mapSourcePosition(position) {}

/**
 * @param {string} source
 * @return {?}
 */
function retrieveSourceMap(source) {}

/**
 * Install SourceMap support.
 * @param {?=} options Can be used to e.g. disable uncaughtException handler.
 * @return {void}
 */
function install(options) {}