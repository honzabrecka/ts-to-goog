/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jwt-client/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "jwt-client"
/** @const */
tsickle_declare_module.jwt_client = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.jwt_client.JWTHeader = function() {};
 /** @type {string} */
tsickle_declare_module.jwt_client.JWTHeader.prototype.typ;
 /** @type {string} */
tsickle_declare_module.jwt_client.JWTHeader.prototype.alg;
/**
 * @record
 * @struct
 */
tsickle_declare_module.jwt_client.JWTObject = function() {};
 /** @type {!JWTHeader} */
tsickle_declare_module.jwt_client.JWTObject.prototype.header;
 /** @type {?} */
tsickle_declare_module.jwt_client.JWTObject.prototype.claim;
 /** @type {string} */
tsickle_declare_module.jwt_client.JWTObject.prototype.signature;

/**
 * Read a string value (normally an HTTP header)
 * from JSON Web Token to an Object
 * @param {string} header
 * @return {!JWTObject}
 */
tsickle_declare_module.jwt_client.read = function(header) {};

/**
 * Given a JWT object, stringify it back to
 * its JWT representation.
 * @param {!JWTObject} value
 * @return {string}
 */
tsickle_declare_module.jwt_client.write = function(value) {};

/**
 * @param {!JWTObject} value
 * @param {?=} key
 * @param {?=} storate
 * @return {void}
 */
tsickle_declare_module.jwt_client.keep = function(value, key, storate) {};

/**
 * @return {void}
 */
tsickle_declare_module.jwt_client.remember = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.jwt_client.forget = function() {};

/**
 * @return {string}
 */
tsickle_declare_module.jwt_client.get = function() {};

/**
 * @param {!JWTObject} value
 * @param {?=} issuer
 * @param {?=} audience
 * @return {boolean}
 */
tsickle_declare_module.jwt_client.validate = function(value, issuer, audience) {};