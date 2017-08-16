/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/swagger-tools/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function SwaggerRouterOptionsControllers() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function SwaggerRouterOptions() {}
 /** @type {(string|?|!Array<string>)} */
SwaggerRouterOptions.prototype.controllers;
 /** @type {boolean} */
SwaggerRouterOptions.prototype.ignoreMissingHandlers;
 /** @type {boolean} */
SwaggerRouterOptions.prototype.useStubs;
/**
 * @record
 * @struct
 */
function SwaggerSecurityError() {}
 /** @type {string} */
SwaggerSecurityError.prototype.code;
 /** @type {string} */
SwaggerSecurityError.prototype.message;
 /** @type {string} */
SwaggerSecurityError.prototype.state;
 /** @type {number} */
SwaggerSecurityError.prototype.statusCode;

/** @typedef {?} */
var SwaggerSecurityCallback;

/** @typedef {?} */
var SwaggerSecurityHandler;
/**
 * @record
 * @struct
 */
function SwaggerSecurityOptions() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function SwaggerUi12ApiDeclarations() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function SwaggerUiOptions() {}
 /** @type {string} */
SwaggerUiOptions.prototype.apiDocs;
 /** @type {string} */
SwaggerUiOptions.prototype.apiDocsPrefix;
 /** @type {string} */
SwaggerUiOptions.prototype.swaggerUi;
 /** @type {string} */
SwaggerUiOptions.prototype.swaggerUiDir;
 /** @type {string} */
SwaggerUiOptions.prototype.swaggerUiPrefix;
/**
 * @record
 * @struct
 */
function SwaggerValidatorOptions() {}
 /** @type {boolean} */
SwaggerValidatorOptions.prototype.validateResponse;
/**
 * @record
 * @struct
 */
function Middleware() {}

/**
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
Middleware.prototype.swaggerMetadata = function() {};

/**
 * @param {?=} options
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
Middleware.prototype.swaggerRouter = function(options) {};

/**
 * @param {?=} options
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
Middleware.prototype.swaggerSecurity = function(options) {};

/**
 * @param {?=} options
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
Middleware.prototype.swaggerValidator = function(options) {};
/**
 * @extends {Middleware}
 * @record
 * @struct
 */
function Middleware12() {}

/**
 * @param {?} apiDeclarations
 * @param {?=} options
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
Middleware12.prototype.swaggerUi = function(apiDeclarations, options) {};
/**
 * @extends {Middleware}
 * @record
 * @struct
 */
function Middleware20() {}

/**
 * @param {?=} options
 * @return {function(!IncomingMessage, !ServerResponse, !Function): void}
 */
Middleware20.prototype.swaggerUi = function(options) {};

/** @typedef {?} */
var InitializeMiddlewareCallback12;

/** @typedef {?} */
var InitializeMiddlewareCallback20;
/**
 * @record
 * @struct
 */
function Resource() {}
 /** @type {string} */
Resource.prototype.resourcePath;

/**
 * @param {?} swaggerObject
 * @param {?|!Array<?>} callback_or_resources
 * @param {?=} callback
 * @return {void}
 */
function initializeMiddleware(swaggerObject, callback_or_resources, callback) {}