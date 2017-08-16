/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/tspromise/index.d.ts:
/**
 * @constructor
 * @struct
 */
function Thenable() {}

/**
 * @template TR
 * @param {function(T): !Thenable<TR>|function(T): TR} onFulfilled
 * @param {function(!Error): TR|function(!Error): void=} onRejected
 * @return {!Thenable<TR>}
 */
Thenable.prototype.then = function(onFulfilled, onRejected) {};

/**
 * @param {function(!Error): void} onRejected
 * @return {!Thenable}
 */
Thenable.prototype.catch = function(onRejected) {};
/**
 * @record
 * @struct
 */
function NodeCallback() {}

/* TODO: CallSignature:  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "tspromise"
/** @const */
tsickle_declare_module.tspromise = {};

/**
 * @constructor
 * @struct
 * @param {function(function(T): void, function(!Error): void): void} callback
 */
tsickle_declare_module.tspromise.Promise = function(callback) {};

/**
 * @template T
 * @param {T|!Thenable<T>=} value_or_promise
 * @return {!Thenable<T>}
 */
tsickle_declare_module.tspromise.Promise.resolve = function(value_or_promise) {};

/**
 * @template T
 * @param {!Error} error
 * @return {!Thenable<T>}
 */
tsickle_declare_module.tspromise.Promise.reject = function(error) {};

/**
 * @param {!Array<!Thenable<?>>} promises
 * @return {!Thenable<!Array<?>>}
 */
tsickle_declare_module.tspromise.Promise.all = function(promises) {};

/**
 * @template TR, T1, T2, T3, T4
 * @param {function(): TR|function(T1): TR|function(T1, T2): TR|function(T1, T2, T3): TR|function(T1, T2, T3, T4): TR} callback
 * @return {function(): !Thenable<TR>|function(T1): !Thenable<TR>|function(T1, T2): !Thenable<TR>|function(T1, T2, T3): !Thenable<TR>|function(T1, T2, T3, T4): !Thenable<TR>}
 */
tsickle_declare_module.tspromise.Promise.async = function(callback) {};

/**
 * @template TR
 * @param {function(): TR} generatorFunction
 * @return {!Thenable<TR>}
 */
tsickle_declare_module.tspromise.Promise.spawn = function(generatorFunction) {};

/**
 * @param {string} path
 * @return {void}
 */
tsickle_declare_module.tspromise.Promise.rewriteFolderSync = function(path) {};

/**
 * @param {number} time
 * @return {!Thenable<!Object>}
 */
tsickle_declare_module.tspromise.Promise.waitAsync = function(time) {};

/**
 * @template T
 * @param {?} obj
 * @param {!String} methodName
 * @param {...?} args
 * @return {!Thenable<T>}
 */
tsickle_declare_module.tspromise.Promise.nfcall = function(obj, methodName, args) {};

/* TODO: ExportAssignment in tsickle_declare_module.tspromise */

/**
 * @template T
 * @param {!Thenable<T>} promise
 * @return {T}
 */
function yield(promise) {}