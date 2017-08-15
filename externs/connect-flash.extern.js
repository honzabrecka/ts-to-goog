/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/connect-flash/index.d.ts:
/** @const */
var Express = {};
/**
 * @record
 * @struct
 */
Express.Request = function() {};

/**
 * @param {string} message_or_event
 * @param {string=} message
 * @return {?}
 */
Express.Request.prototype.flash = function(message_or_event, message) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "connect-flash"
/** @const */
tsickle_declare_module.connect_flash = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.connect_flash */
/**
 * @record
 * @struct
 */
tsickle_declare_module.connect_flash.IConnectFlashOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.connect_flash.IConnectFlashOptions.prototype.unsafe;

/**
 * @param {!IConnectFlashOptions=} options
 * @return {!e.RequestHandler}
 */
tsickle_declare_module.connect_flash.e = function(options) {};

/* TODO: ExportAssignment in tsickle_declare_module.connect_flash */