/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pg/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/**
 * @param {string|?} connection_or_config
 * @param {function(!Error, !Client, function(?): void): void} callback
 * @return {void}
 */
function connect(connection_or_config, callback) {}

/**
 * @return {void}
 */
function end() {}
/**
 * @record
 * @struct
 */
function ConnectionConfig() {}
 /** @type {string} */
ConnectionConfig.prototype.user;
 /** @type {string} */
ConnectionConfig.prototype.database;
 /** @type {string} */
ConnectionConfig.prototype.password;
 /** @type {number} */
ConnectionConfig.prototype.port;
 /** @type {string} */
ConnectionConfig.prototype.host;
/**
 * @extends {ConnectionConfig}
 * @record
 * @struct
 */
function Defaults() {}
 /** @type {number} */
Defaults.prototype.poolSize;
 /** @type {number} */
Defaults.prototype.poolIdleTimeout;
 /** @type {number} */
Defaults.prototype.reapIntervalMillis;
 /** @type {boolean} */
Defaults.prototype.binary;
 /** @type {boolean} */
Defaults.prototype.parseInt8;

/* TODO: ImportDeclaration in  */
/**
 * @extends {ConnectionConfig}
 * @record
 * @struct
 */
function ClientConfig() {}
 /** @type {(boolean|!TlsOptions)} */
ClientConfig.prototype.ssl;
/**
 * @extends {ClientConfig}
 * @record
 * @struct
 */
function PoolConfig() {}
 /** @type {number} */
PoolConfig.prototype.max;
 /** @type {number} */
PoolConfig.prototype.min;
 /** @type {boolean} */
PoolConfig.prototype.refreshIdle;
 /** @type {number} */
PoolConfig.prototype.idleTimeoutMillis;
 /** @type {number} */
PoolConfig.prototype.reapIntervalMillis;
 /** @type {boolean} */
PoolConfig.prototype.returnToHead;
 /** @type {string} */
PoolConfig.prototype.application_name;
 /** @type {function(new: (!PromiseLike<T>), function(function((T|!PromiseLike<T>)): void, function(?): void): void): ?} */
PoolConfig.prototype.Promise;
/**
 * @record
 * @struct
 */
function QueryConfig() {}
 /** @type {string} */
QueryConfig.prototype.name;
 /** @type {string} */
QueryConfig.prototype.text;
 /** @type {!Array<?>} */
QueryConfig.prototype.values;
/**
 * @record
 * @struct
 */
function QueryResult() {}
 /** @type {string} */
QueryResult.prototype.command;
 /** @type {number} */
QueryResult.prototype.rowCount;
 /** @type {number} */
QueryResult.prototype.oid;
 /** @type {!Array<?>} */
QueryResult.prototype.rows;
/**
 * @extends {QueryResult}
 * @record
 * @struct
 */
function ResultBuilder() {}

/**
 * @param {?} row
 * @return {void}
 */
ResultBuilder.prototype.addRow = function(row) {};

/**
 * @constructor
 * @struct
 * @param {?=} config
 */
function Pool(config) {}

/**
 * @param {function(!Error, !Client, function(): void): void=} callback
 * @return {!Promise<!Client>|void}
 */
Pool.prototype.connect = function(callback) {};

/**
 * @param {function(): void=} callback
 * @return {!Promise<void>}
 */
Pool.prototype.end = function(callback) {};

/**
 * @param {?|(string|?)|string} queryStream_or_queryTextOrConfig_or_queryText
 * @param {!Array<?>|function(!Error, ?): void=} values_or_callback
 * @param {function(!Error, ?): void=} callback
 * @return {!internal.Readable|!Promise<?>|!Query}
 */
Pool.prototype.query = function(queryStream_or_queryTextOrConfig_or_queryText, values_or_callback, callback) {};

/**
 * @param {string} event
 * @param {function(!Error, !Client): void|function(!Client): void} listener
 * @return {Pool}
 */
Pool.prototype.on = function(event, listener) {};

/**
 * @constructor
 * @struct
 * @param {string|?} connection_or_config
 */
function Client(connection_or_config) {}

/**
 * @param {function(!Error): void=} callback
 * @return {void}
 */
Client.prototype.connect = function(callback) {};

/**
 * @param {function(!Error): void=} callback
 * @return {void}
 */
Client.prototype.end = function(callback) {};

/**
 * @param {!Error=} err
 * @return {void}
 */
Client.prototype.release = function(err) {};

/**
 * @param {?|(string|?)|string} queryStream_or_queryTextOrConfig_or_queryText
 * @param {!Array<?>|function(!Error, ?): void=} values_or_callback
 * @param {function(!Error, ?): void=} callback
 * @return {!internal.Readable|!Promise<?>|!Query}
 */
Client.prototype.query = function(queryStream_or_queryTextOrConfig_or_queryText, values_or_callback, callback) {};

/**
 * @param {string} queryText
 * @return {!internal.Writable}
 */
Client.prototype.copyFrom = function(queryText) {};

/**
 * @param {string} queryText
 * @return {!internal.Readable}
 */
Client.prototype.copyTo = function(queryText) {};

/**
 * @return {void}
 */
Client.prototype.pauseDrain = function() {};

/**
 * @return {void}
 */
Client.prototype.resumeDrain = function() {};

/**
 * @param {string} event
 * @param {function(): void|function(!Error): void|function(?): void} listener
 * @return {Client}
 */
Client.prototype.on = function(event, listener) {};
/**
 * @extends {internal.EventEmitter}
 * @constructor
 * @struct
 */
function Query() {}

/**
 * @param {string} event
 * @param {function(?, ?): void|function(!Error): void|function(?): void} listener
 * @return {Query}
 */
Query.prototype.on = function(event, listener) {};
/**
 * @extends {internal.EventEmitter}
 * @constructor
 * @struct
 */
function Events() {}

/**
 * @param {string} event
 * @param {function(!Error, !Client): void} listener
 * @return {Events}
 */
Events.prototype.on = function(event, listener) {};
 /** @type {?} */
var types;
 /** @type {?} */
var defaults;