/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/auto-sni/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var createServer = {};
/**
 * @record
 * @struct
 */
createServer.Options = function() {};
 /** @type {string} */
createServer.Options.prototype.email;
 /** @type {boolean} */
createServer.Options.prototype.agreeTos;
 /** @type {!Array<(string|!Array<string>)>} */
createServer.Options.prototype.domains;
 /** @type {{http: number, https: number}} */
createServer.Options.prototype.ports;
 /** @type {boolean} */
createServer.Options.prototype.debug;

/**
 * @param {!createServer.Options} opts
 * @param {?=} app
 * @return {!Server}
 */
function createServer(opts, app) {}

/* TODO: ExportAssignment in  */