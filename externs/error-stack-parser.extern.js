/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/error-stack-parser/index.d.ts:
/** @const */
var ErrorStackParser = {};
/**
 * @record
 * @struct
 */
ErrorStackParser.StackFrame = function() {};
 /** @type {string} */
ErrorStackParser.StackFrame.prototype.functionName;
 /** @type {!Array<?>} */
ErrorStackParser.StackFrame.prototype.args;
 /** @type {string} */
ErrorStackParser.StackFrame.prototype.fileName;
 /** @type {number} */
ErrorStackParser.StackFrame.prototype.lineNumber;
 /** @type {number} */
ErrorStackParser.StackFrame.prototype.columnNumber;
 /** @type {string} */
ErrorStackParser.StackFrame.prototype.source;

/**
 * @param {string} functionName
 * @param {?} args
 * @param {string} fileName
 * @param {number} lineNumber
 * @param {number} columnNumber
 * @param {string} source
 * @return {!ErrorStackParser.StackFrame}
 */
ErrorStackParser.StackFrame.prototype.constructor = function(functionName, args, fileName, lineNumber, columnNumber, source) {};

/**
 * @return {string}
 */
ErrorStackParser.StackFrame.prototype.toString = function() {};

/**
 * Given an Error object, extract the most information from it.
 * 
 * @param {!Error} error
 * @return {!Array<!ErrorStackParser.StackFrame>}
 */
ErrorStackParser.parse = function(error) {};