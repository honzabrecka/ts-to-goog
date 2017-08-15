/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/diff/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var JsDiff = {};
/**
 * @record
 * @struct
 */
JsDiff.IDiffResult = function() {};
 /** @type {string} */
JsDiff.IDiffResult.prototype.value;
 /** @type {number} */
JsDiff.IDiffResult.prototype.count;
 /** @type {boolean} */
JsDiff.IDiffResult.prototype.added;
 /** @type {boolean} */
JsDiff.IDiffResult.prototype.removed;
/**
 * @record
 * @struct
 */
JsDiff.IBestPath = function() {};
 /** @type {number} */
JsDiff.IBestPath.prototype.newPos;
 /** @type {!Array<!JsDiff.IDiffResult>} */
JsDiff.IBestPath.prototype.componenets;
/**
 * @record
 * @struct
 */
JsDiff.IHunk = function() {};
 /** @type {number} */
JsDiff.IHunk.prototype.oldStart;
 /** @type {number} */
JsDiff.IHunk.prototype.oldLines;
 /** @type {number} */
JsDiff.IHunk.prototype.newStart;
 /** @type {number} */
JsDiff.IHunk.prototype.newLines;
 /** @type {!Array<string>} */
JsDiff.IHunk.prototype.lines;
/**
 * @record
 * @struct
 */
JsDiff.IUniDiff = function() {};
 /** @type {string} */
JsDiff.IUniDiff.prototype.oldFileName;
 /** @type {string} */
JsDiff.IUniDiff.prototype.newFileName;
 /** @type {string} */
JsDiff.IUniDiff.prototype.oldHeader;
 /** @type {string} */
JsDiff.IUniDiff.prototype.newHeader;
 /** @type {!Array<!JsDiff.IHunk>} */
JsDiff.IUniDiff.prototype.hunks;

/**
 * @constructor
 * @struct
 * @param {boolean=} ignoreWhitespace
 */
JsDiff.Diff = function(ignoreWhitespace) {};
 /** @type {boolean} */
JsDiff.Diff.prototype.ignoreWhitespace;

/**
 * @param {string} oldString
 * @param {string} newString
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.Diff.prototype.diff = function(oldString, newString) {};

/**
 * @param {!Array<!JsDiff.IDiffResult>} components
 * @param {string} value
 * @param {boolean} added
 * @param {boolean} removed
 * @return {void}
 */
JsDiff.Diff.prototype.pushComponent = function(components, value, added, removed) {};

/**
 * @param {!JsDiff.IBestPath} basePath
 * @param {string} newString
 * @param {string} oldString
 * @param {number} diagonalPath
 * @return {number}
 */
JsDiff.Diff.prototype.extractCommon = function(basePath, newString, oldString, diagonalPath) {};

/**
 * @param {string} left
 * @param {string} right
 * @return {boolean}
 */
JsDiff.Diff.prototype.equals = function(left, right) {};

/**
 * @param {string} left
 * @param {string} right
 * @return {string}
 */
JsDiff.Diff.prototype.join = function(left, right) {};

/**
 * @param {string} value
 * @return {?}
 */
JsDiff.Diff.prototype.tokenize = function(value) {};

/**
 * @param {string} oldStr
 * @param {string} newStr
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.diffChars = function(oldStr, newStr) {};

/**
 * @param {string} oldStr
 * @param {string} newStr
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.diffWords = function(oldStr, newStr) {};

/**
 * @param {string} oldStr
 * @param {string} newStr
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.diffWordsWithSpace = function(oldStr, newStr) {};

/**
 * @param {!Object} oldObj
 * @param {!Object} newObj
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.diffJson = function(oldObj, newObj) {};

/**
 * @param {string} oldStr
 * @param {string} newStr
 * @param {{ignoreWhitespace: boolean, newlineIsToken: boolean}=} options
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.diffLines = function(oldStr, newStr, options) {};

/**
 * @param {string} oldStr
 * @param {string} newStr
 * @return {!Array<!JsDiff.IDiffResult>}
 */
JsDiff.diffCss = function(oldStr, newStr) {};

/**
 * @param {string} fileName
 * @param {string} oldStr
 * @param {string} newStr
 * @param {string} oldHeader
 * @param {string} newHeader
 * @param {{context: number}=} options
 * @return {string}
 */
JsDiff.createPatch = function(fileName, oldStr, newStr, oldHeader, newHeader, options) {};

/**
 * @param {string} oldFileName
 * @param {string} newFileName
 * @param {string} oldStr
 * @param {string} newStr
 * @param {string} oldHeader
 * @param {string} newHeader
 * @param {{context: number}=} options
 * @return {string}
 */
JsDiff.createTwoFilesPatch = function(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {};

/**
 * @param {string} oldFileName
 * @param {string} newFileName
 * @param {string} oldStr
 * @param {string} newStr
 * @param {string} oldHeader
 * @param {string} newHeader
 * @param {{context: number}=} options
 * @return {!JsDiff.IUniDiff}
 */
JsDiff.structuredPatch = function(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {};

/**
 * @param {string} oldStr
 * @param {(string|!JsDiff.IUniDiff|!Array<!JsDiff.IUniDiff>)} uniDiff
 * @return {string}
 */
JsDiff.applyPatch = function(oldStr, uniDiff) {};

/**
 * @param {!Array<!JsDiff.IUniDiff>} uniDiff
 * @param {{loadFile: function(number, function(!Error, string): void): void, patched: function(number, string): void, complete: function(!Error): void}} options
 * @return {void}
 */
JsDiff.applyPatches = function(uniDiff, options) {};

/**
 * @param {string} diffStr
 * @param {{strict: boolean}=} options
 * @return {!Array<!JsDiff.IUniDiff>}
 */
JsDiff.parsePatch = function(diffStr, options) {};

/**
 * @param {!Array<!JsDiff.IDiffResult>} changes
 * @return {string}
 */
JsDiff.convertChangesToXML = function(changes) {};

/**
 * @param {!Array<!JsDiff.IDiffResult>} changes
 * @return {!Array<{0: number, 1: string}>}
 */
JsDiff.convertChangesToDMP = function(changes) {};