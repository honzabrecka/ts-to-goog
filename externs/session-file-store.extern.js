/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/session-file-store/index.d.ts:

/* TODO: ExportAssignment in  */
/** @const */
var FileStore = {};
/**
 * @record
 * @struct
 */
FileStore.Options = function() {};
 /** @type {string} */
FileStore.Options.prototype.path;
 /** @type {number} */
FileStore.Options.prototype.ttl;
 /** @type {number} */
FileStore.Options.prototype.retries;
 /** @type {number} */
FileStore.Options.prototype.factor;
 /** @type {number} */
FileStore.Options.prototype.minTimeout;
 /** @type {number} */
FileStore.Options.prototype.maxTimeout;
 /** @type {?} */
FileStore.Options.prototype.reapIntervalObject;
 /** @type {number} */
FileStore.Options.prototype.reapInterval;
 /** @type {number} */
FileStore.Options.prototype.reapMaxConcurrent;
 /** @type {boolean} */
FileStore.Options.prototype.reapAsync;
 /** @type {boolean} */
FileStore.Options.prototype.reapSyncFallback;
 /** @type {string} */
FileStore.Options.prototype.encoding;
 /** @type {string} */
FileStore.Options.prototype.secret;
 /** @type {string} */
FileStore.Options.prototype.encryptEncoding;
 /** @type {string} */
FileStore.Options.prototype.fileExtension;
 /** @type {!RegExp} */
FileStore.Options.prototype.filePattern;

/**
 * Log messages. Defaults to `console.log`
 * 
 * \@memberOf Options
 * @param {...?} args
 * @return {void}
 */
FileStore.Options.prototype.logFn = function(args) {};

/**
 * Returns fallback session object after all failed retries. No defaults
 * 
 * \@memberOf Options
 * @param {...?} args
 * @return {void}
 */
FileStore.Options.prototype.fallbackSessionFn = function(args) {};

/**
 * Encoding function. Takes object, returns encoded data. Defaults to `JSON.stringify`
 * 
 * \@memberOf Options
 * @param {...?} args
 * @return {void}
 */
FileStore.Options.prototype.encoder = function(args) {};

/**
 * Decoding function. Takes encoded data, returns object. Defaults to `JSON.parse`
 * 
 * \@memberOf Options
 * @param {...?} args
 * @return {void}
 */
FileStore.Options.prototype.decoder = function(args) {};

/**
 * Encryption key retrieval function. Takes secret andsession id, returns key.
 * Defaults to `function(secret, sessionId){return secret + sessionId;}`
 * 
 * 
 * \@memberOf Options
 * @param {string} secret
 * @param {string} sessionId
 * @return {string}
 */
FileStore.Options.prototype.keyFunction = function(secret, sessionId) {};

/**
 * Attempts to fetch session from a session file by the given `sessionId`
 * 
 * 
 * \@memberOf FileStore
 * @param {string} sessionId
 * @param {function(?, !Express.Session): void} callback
 * @return {void}
 */
FileStore.prototype.get = function(sessionId, callback) {};

/**
 * Attempts to commit the given session associated with the given `sessionId` to a session file
 * 
 * 
 * \@memberOf FileStore
 * @param {string} sessionId
 * @param {!Express.Session} session
 * @param {function(?): void} callback
 * @return {void}
 */
FileStore.prototype.set = function(sessionId, session, callback) {};

/**
 * Touch the given session object associated with the given `sessionId`
 * 
 * 
 * \@memberOf FileStore
 * @param {string} sessionId
 * @param {!Express.Session} session
 * @param {function(?): void} callback
 * @return {void}
 */
FileStore.prototype.touch = function(sessionId, session, callback) {};

/**
 * Attempts to unlink a given session by its id
 * 
 * 
 * \@memberOf FileStore
 * @param {string} sessionId
 * @param {function(?): void} callback
 * @return {void}
 */
FileStore.prototype.destroy = function(sessionId, callback) {};

/**
 * Attempts to fetch number of the session files
 * 
 * 
 * \@memberOf FileStore
 * @param {function(?, number): void} callback
 * @return {void}
 */
FileStore.prototype.length = function(callback) {};

/**
 * Attempts to clear out all of the existing session files
 * 
 * 
 * \@memberOf FileStore
 * @param {function(?): void} callback
 * @return {void}
 */
FileStore.prototype.clear = function(callback) {};

/**
 * 
 * 
 * 
 * \@memberOf FileStore
 * @param {function(?, !Array<string>): void} callback
 * @return {void}
 */
FileStore.prototype.list = function(callback) {};

/**
 * Attempts to detect whether a session file is already expired or not
 * 
 * 
 * \@memberOf FileStore
 * @param {string} sessionId
 * @param {function(?, boolean): void} callback
 * @return {void}
 */
FileStore.prototype.expired = function(sessionId, callback) {};