/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/normalize-url/index.d.ts:
/** @const */
var normalizeUrl = {};
/**
 * @record
 * @struct
 */
normalizeUrl.Options = function() {};
 /** @type {boolean} */
normalizeUrl.Options.prototype.normalizeProtocol;
 /** @type {boolean} */
normalizeUrl.Options.prototype.normalizeHttps;
 /** @type {boolean} */
normalizeUrl.Options.prototype.stripFragment;
 /** @type {boolean} */
normalizeUrl.Options.prototype.stripWWW;
 /** @type {!Array<(string|!RegExp)>} */
normalizeUrl.Options.prototype.removeQueryParameters;
 /** @type {boolean} */
normalizeUrl.Options.prototype.removeTrailingSlash;
 /** @type {!Array<(string|!RegExp)>} */
normalizeUrl.Options.prototype.removeDirectoryIndex;

/**
 * @param {string} url
 * @param {!normalizeUrl.Options=} options
 * @return {string}
 */
function normalizeUrl(url, options) {}

/* TODO: ExportAssignment in  */