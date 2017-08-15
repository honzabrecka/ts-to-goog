/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/dookie/index.d.ts:
/**
 * @record
 * @struct
 */
function PushOpts() {}
 /** @type {string} */
PushOpts.prototype.filename;
 /** @type {boolean} */
PushOpts.prototype.dropDatabase;

/**
 * @param {string} uri
 * @param {?} data
 * @param {?=} opts
 * @return {!Promise<?>}
 */
function push(uri, data, opts) {}

/**
 * @param {string} uri
 * @return {!Promise<?>}
 */
function pull(uri) {}

/**
 * @param {string} uri
 * @param {?} stream
 * @return {!Promise<?>}
 */
function pullToStream(uri, stream) {}

/* TODO: NamespaceExportDeclaration in  */