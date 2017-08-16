/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sqlite3/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
 /** @type {number} */
var OPEN_READONLY;
 /** @type {number} */
var OPEN_READWRITE;
 /** @type {number} */
var OPEN_CREATE;
 /** @type {?} */
var cached;
/**
 * @record
 * @struct
 */
function RunResult() {}
 /** @type {number} */
RunResult.prototype.lastID;
 /** @type {number} */
RunResult.prototype.changes;
/**
 * @constructor
 * @struct
 */
function Statement() {}

/**
 * @param {...?=} callback_or_params
 * @return {?}
 */
Statement.prototype.bind = function(callback_or_params) {};

/**
 * @param {?=} callback
 * @return {?}
 */
Statement.prototype.reset = function(callback) {};

/**
 * @param {?=} callback
 * @return {?}
 */
Statement.prototype.finalize = function(callback) {};

/**
 * @param {...?=} callback_or_params
 * @return {?}
 */
Statement.prototype.run = function(callback_or_params) {};

/**
 * @param {...?=} callback_or_params
 * @return {?}
 */
Statement.prototype.get = function(callback_or_params) {};

/**
 * @param {...?=} callback_or_params
 * @return {?}
 */
Statement.prototype.all = function(callback_or_params) {};

/**
 * @param {...?=} callback_or_params
 * @return {?}
 */
Statement.prototype.each = function(callback_or_params) {};

/**
 * @constructor
 * @struct
 * @param {string} filename
 * @param {?|number=} callback_or_mode
 * @param {?=} callback
 */
function Database(filename, callback_or_mode, callback) {}

/**
 * @param {?=} callback
 * @return {void}
 */
Database.prototype.close = function(callback) {};

/**
 * @param {string} sql
 * @param {...?=} callback_or_params
 * @return {?}
 */
Database.prototype.run = function(sql, callback_or_params) {};

/**
 * @param {string} sql
 * @param {...?=} callback_or_params
 * @return {?}
 */
Database.prototype.get = function(sql, callback_or_params) {};

/**
 * @param {string} sql
 * @param {...?=} callback_or_params
 * @return {?}
 */
Database.prototype.all = function(sql, callback_or_params) {};

/**
 * @param {string} sql
 * @param {...?=} callback_or_params
 * @return {?}
 */
Database.prototype.each = function(sql, callback_or_params) {};

/**
 * @param {string} sql
 * @param {?=} callback
 * @return {?}
 */
Database.prototype.exec = function(sql, callback) {};

/**
 * @param {string} sql
 * @param {...?=} callback_or_params
 * @return {?}
 */
Database.prototype.prepare = function(sql, callback_or_params) {};

/**
 * @param {?=} callback
 * @return {void}
 */
Database.prototype.serialize = function(callback) {};

/**
 * @param {?=} callback
 * @return {void}
 */
Database.prototype.parallelize = function(callback) {};

/**
 * @param {string} event
 * @param {?} listener
 * @return {?}
 */
Database.prototype.on = function(event, listener) {};

/**
 * @return {void}
 */
function verbose() {}