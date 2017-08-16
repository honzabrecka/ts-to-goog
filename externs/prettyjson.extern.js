/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/prettyjson/index.d.ts:
 /** @type {string} */
var version;

/**
 * Render pretty json.
 * 
 * @param {?} data {any} Data to prettify.
 * @param {?=} options {IOptions} Hash with different options to configure the renderer.
 * @param {number=} indentation {number} Indentation size.
 * 
 * @return {string}
 */
function render(data, options, indentation) {}

/**
 * Render pretty json from a string.
 * 
 * @param {string} data {string} Serialized JSON data to prettify.
 * @param {?=} options {IOptions} Hash with different options to configure the renderer.
 * @param {number=} indentation {number} Indentation size.
 * 
 * @return {string}
 */
function renderString(data, options, indentation) {}
/**
 * @record
 * @struct
 */
function RendererOptions() {}
 /** @type {string} */
RendererOptions.prototype.emptyArrayMsg;
 /** @type {boolean} */
RendererOptions.prototype.inlineArrays;
 /** @type {boolean} */
RendererOptions.prototype.noColor;
 /** @type {string} */
RendererOptions.prototype.keysColor;
 /** @type {string} */
RendererOptions.prototype.dashColor;
 /** @type {string} */
RendererOptions.prototype.numberColor;
 /** @type {string} */
RendererOptions.prototype.stringColor;
 /** @type {number} */
RendererOptions.prototype.defaultIndentation;