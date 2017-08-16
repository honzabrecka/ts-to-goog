/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/qs/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var QueryString = {};
/**
 * @record
 * @struct
 */
QueryString.IStringifyOptions = function() {};
 /** @type {string} */
QueryString.IStringifyOptions.prototype.delimiter;
 /** @type {boolean} */
QueryString.IStringifyOptions.prototype.strictNullHandling;
 /** @type {boolean} */
QueryString.IStringifyOptions.prototype.skipNulls;
 /** @type {boolean} */
QueryString.IStringifyOptions.prototype.encode;
 /** @type {function(string): ?} */
QueryString.IStringifyOptions.prototype.encoder;
 /** @type {(!Array<(string|number)>|function(string, ?): ?)} */
QueryString.IStringifyOptions.prototype.filter;
 /** @type {string} */
QueryString.IStringifyOptions.prototype.arrayFormat;
 /** @type {boolean} */
QueryString.IStringifyOptions.prototype.indices;
 /** @type {function(?, ?): number} */
QueryString.IStringifyOptions.prototype.sort;
 /** @type {function(!Date): string} */
QueryString.IStringifyOptions.prototype.serializeDate;
 /** @type {string} */
QueryString.IStringifyOptions.prototype.format;
 /** @type {boolean} */
QueryString.IStringifyOptions.prototype.encodeValuesOnly;
 /** @type {boolean} */
QueryString.IStringifyOptions.prototype.addQueryPrefix;
/**
 * @record
 * @struct
 */
QueryString.IParseOptions = function() {};
 /** @type {(string|!RegExp)} */
QueryString.IParseOptions.prototype.delimiter;
 /** @type {number} */
QueryString.IParseOptions.prototype.depth;
 /** @type {function(string): ?} */
QueryString.IParseOptions.prototype.decoder;
 /** @type {number} */
QueryString.IParseOptions.prototype.arrayLimit;
 /** @type {boolean} */
QueryString.IParseOptions.prototype.parseArrays;
 /** @type {boolean} */
QueryString.IParseOptions.prototype.allowDots;
 /** @type {boolean} */
QueryString.IParseOptions.prototype.plainObjects;
 /** @type {boolean} */
QueryString.IParseOptions.prototype.allowPrototypes;
 /** @type {number} */
QueryString.IParseOptions.prototype.parameterLimit;
 /** @type {boolean} */
QueryString.IParseOptions.prototype.strictNullHandling;
 /** @type {boolean} */
QueryString.IParseOptions.prototype.ignoreQueryPrefix;

/**
 * @param {?} obj
 * @param {!QueryString.IStringifyOptions=} options
 * @return {string}
 */
QueryString.stringify = function(obj, options) {};

/**
 * @param {string} str
 * @param {!QueryString.IParseOptions=} options
 * @return {?}
 */
QueryString.parse = function(str, options) {};