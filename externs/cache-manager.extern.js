/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cache-manager/index.d.ts:
/**
 * @record
 * @struct
 */
function CachingConfig() {}
 /** @type {number} */
CachingConfig.prototype.ttl;
/**
 * @extends {CachingConfig}
 * @record
 * @struct
 */
function StoreConfig() {}
 /** @type {string} */
StoreConfig.prototype.store;
 /** @type {number} */
StoreConfig.prototype.max;
 /** @type {?} */
StoreConfig.prototype.isCacheableValue;
/**
 * @record
 * @struct
 */
function Cache() {}

/**
 * @template T
 * @param {string} key
 * @param {?} value
 * @param {?|number} options_or_ttl
 * @param {?=} callback
 * @return {void}
 */
Cache.prototype.set = function(key, value, options_or_ttl, callback) {};

/**
 * @template T
 * @param {string} key
 * @param {?} wrapper
 * @param {?} options_or_callback
 * @param {?=} callback
 * @return {void}
 */
Cache.prototype.wrap = function(key, wrapper, options_or_callback, callback) {};

/**
 * @template T
 * @param {string} key
 * @param {?} callback
 * @return {void}
 */
Cache.prototype.get = function(key, callback) {};

/**
 * @param {string} key
 * @param {?=} callback
 * @return {void}
 */
Cache.prototype.del = function(key, callback) {};
/** @const */
var cacheManager = {};

/**
 * @param {?} IConfig
 * @return {?}
 */
cacheManager.caching = function(IConfig) {};

/**
 * @param {!Array<?>} Caches
 * @return {?}
 */
cacheManager.multiCaching = function(Caches) {};

/* TODO: ExportAssignment in  */