/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cpy/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ExportAssignment in  */

/**
 * @param {(string|!Array<string>)} files
 * @param {string} destination
 * @param {?=} opts
 * @return {?}
 */
function cpy(files, destination, opts) {}
/**
 * @record
 * @struct
 */
cpy.ProgressEmitter = function() {};

/**
 * @param {string} event
 * @param {function(!cpy.ProgressData): void} handler
 * @return {!Promise<void>}
 */
cpy.ProgressEmitter.prototype.on = function(event, handler) {};

/** @typedef {?} */
cpy.Options;
/**
 * @record
 * @struct
 */
cpy.CpyOptions = function() {};
 /** @type {string} */
cpy.CpyOptions.prototype.cwd;
 /** @type {boolean} */
cpy.CpyOptions.prototype.parents;
 /** @type {(string|function(string): string)} */
cpy.CpyOptions.prototype.rename;
/**
 * @record
 * @struct
 */
cpy.ProgressData = function() {};
 /** @type {number} */
cpy.ProgressData.prototype.completedFiles;
 /** @type {number} */
cpy.ProgressData.prototype.totalFiles;
 /** @type {number} */
cpy.ProgressData.prototype.completedSize;