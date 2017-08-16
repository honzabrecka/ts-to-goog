/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gulp-sass/index.d.ts:
/**
 * @record
 * @struct
 */
function SassResults() {}
 /** @type {string} */
SassResults.prototype.css;
 /** @type {string} */
SassResults.prototype.map;
 /** @type {?} */
SassResults.prototype.stats;
/**
 * @record
 * @struct
 */
function SassOptions() {}
 /** @type {string} */
SassOptions.prototype.file;
 /** @type {string} */
SassOptions.prototype.data;
 /** @type {?} */
SassOptions.prototype.success;
 /** @type {?} */
SassOptions.prototype.error;
 /** @type {!Array<string>} */
SassOptions.prototype.includePaths;
 /** @type {!Array<string>} */
SassOptions.prototype.imagePaths;
 /** @type {boolean} */
SassOptions.prototype.indentedSyntax;
 /** @type {boolean} */
SassOptions.prototype.omitSourceMapUrl;
 /** @type {string} */
SassOptions.prototype.outFile;
 /** @type {string} */
SassOptions.prototype.outputStyle;
 /** @type {number} */
SassOptions.prototype.precision;
 /** @type {boolean} */
SassOptions.prototype.sourceComments;
 /** @type {(string|boolean)} */
SassOptions.prototype.sourceMap;
 /** @type {boolean} */
SassOptions.prototype.sourceMapEmbed;
 /** @type {boolean} */
SassOptions.prototype.sourceMapContents;
/**
 * @extends {SassOptions}
 * @record
 * @struct
 */
function Options() {}
 /** @type {boolean} */
Options.prototype.errLogToConsole;
 /** @type {?} */
Options.prototype.onSuccess;
 /** @type {?} */
Options.prototype.onError;
 /** @type {boolean} */
Options.prototype.sync;
/**
 * @record
 * @struct
 */
function Sass() {}

/* TODO: CallSignature:  */

/**
 * @param {string=} error
 * @return {void}
 */
Sass.prototype.logError = function(error) {};

/**
 * @param {?=} options
 * @return {!NodeJS.ReadWriteStream}
 */
Sass.prototype.sync = function(options) {};
 /** @type {?} */
var _tmp;

/* TODO: ExportAssignment in  */