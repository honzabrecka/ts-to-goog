/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-jsfl-runner/index.d.ts:
/**
 * @record
 * @struct
 */
function JSFL() {}
 /** @type {?} */
JSFL.prototype.init;

/* TODO: IndexSignature:  */

/**
 * Creates a JSFL file from a JSFL object
 * @param {?} jsfl A valid JSFL object
 * @param {string} fileName Path to output JSFL file location
 * @param {!Array<?>} initParams Parameters to pass to JSFL init function
 * @param {?} callback Callback
 * @return {void}
 */
function createJSFL(jsfl, fileName, initParams, callback) {}

/**
 * Deletes a JSFL file
 * @param {string} fileName Path to JSFL file to delete
 * @param {?} callback Callback
 * @return {void}
 */
function deleteJSFL(fileName, callback) {}

/**
 * Runs a JSFL file
 * @param {string} flashLocation Path to Flash executable
 * @param {string} fileName Path to JSFL file to run
 * @param {?} callback Callback
 * @return {void}
 */
function runJSFL(flashLocation, fileName, callback) {}