/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/chokidar/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function WatchedPaths() {}

/* TODO: IndexSignature:  */
/**
 * @implements {FSWatcher}
 * @constructor
 * @struct
 */
function FSWatcher() {}

/**
 * Add files, directories, or glob patterns for tracking. Takes an array of strings or just one
 * string.
 * @param {(string|!Array<string>)} paths
 * @return {void}
 */
FSWatcher.prototype.add = function(paths) {};

/**
 * Stop watching files, directories, or glob patterns. Takes an array of strings or just one
 * string.
 * @param {(string|!Array<string>)} paths
 * @return {void}
 */
FSWatcher.prototype.unwatch = function(paths) {};

/**
 * Returns an object representing all the paths on the file system being watched by this
 * `FSWatcher` instance. The object's keys are all the directories (using absolute paths unless
 * the `cwd` option was used), and the values are arrays of the names of the items contained in
 * each directory.
 * @return {?}
 */
FSWatcher.prototype.getWatched = function() {};

/**
 * Removes all listeners from watched files.
 * @return {void}
 */
FSWatcher.prototype.close = function() {};
/**
 * @record
 * @struct
 */
function WatchOptions() {}
 /** @type {boolean} */
WatchOptions.prototype.persistent;
 /** @type {?} */
WatchOptions.prototype.ignored;
 /** @type {boolean} */
WatchOptions.prototype.ignoreInitial;
 /** @type {boolean} */
WatchOptions.prototype.followSymlinks;
 /** @type {string} */
WatchOptions.prototype.cwd;
 /** @type {boolean} */
WatchOptions.prototype.disableGlobbing;
 /** @type {boolean} */
WatchOptions.prototype.usePolling;
 /** @type {boolean} */
WatchOptions.prototype.useFsEvents;
 /** @type {boolean} */
WatchOptions.prototype.alwaysStat;
 /** @type {number} */
WatchOptions.prototype.depth;
 /** @type {number} */
WatchOptions.prototype.interval;
 /** @type {number} */
WatchOptions.prototype.binaryInterval;
 /** @type {boolean} */
WatchOptions.prototype.ignorePermissionErrors;
 /** @type {(number|boolean)} */
WatchOptions.prototype.atomic;
 /** @type {?} */
WatchOptions.prototype.awaitWriteFinish;
/**
 * @record
 * @struct
 */
function AwaitWriteFinishOptions() {}
 /** @type {number} */
AwaitWriteFinishOptions.prototype.stabilityThreshold;
 /** @type {number} */
AwaitWriteFinishOptions.prototype.pollInterval;

/**
 * produces an instance of `FSWatcher`.
 * @param {(string|!Array<string>)} paths
 * @param {?=} options
 * @return {?}
 */
function watch(paths, options) {}