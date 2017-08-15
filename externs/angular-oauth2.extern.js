/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-oauth2/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.oauth2 = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.OAuthConfig = function() {};
 /** @type {string} */
tsickle_declare_module.angular.oauth2.OAuthConfig.prototype.baseUrl;
 /** @type {string} */
tsickle_declare_module.angular.oauth2.OAuthConfig.prototype.clientId;
 /** @type {string} */
tsickle_declare_module.angular.oauth2.OAuthConfig.prototype.clientSecret;
 /** @type {string} */
tsickle_declare_module.angular.oauth2.OAuthConfig.prototype.grantPath;
 /** @type {string} */
tsickle_declare_module.angular.oauth2.OAuthConfig.prototype.revokePath;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.OAuthProvider = function() {};

/**
 * @param {!oauth2.OAuthConfig} params
 * @return {!oauth2.OAuthConfig}
 */
tsickle_declare_module.angular.oauth2.OAuthProvider.prototype.configure = function(params) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.Data = function() {};
 /** @type {string} */
tsickle_declare_module.angular.oauth2.Data.prototype.username;
 /** @type {string} */
tsickle_declare_module.angular.oauth2.Data.prototype.password;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.OAuth = function() {};

/**
 * @return {boolean}
 */
tsickle_declare_module.angular.oauth2.OAuth.prototype.isAuthenticated = function() {};

/**
 * @param {!oauth2.Data} data
 * @param {?=} options
 * @return {!angular.IPromise<string>}
 */
tsickle_declare_module.angular.oauth2.OAuth.prototype.getAccessToken = function(data, options) {};

/**
 * @param {!oauth2.Data=} data
 * @param {?=} options
 * @return {!angular.IPromise<string>}
 */
tsickle_declare_module.angular.oauth2.OAuth.prototype.getRefreshToken = function(data, options) {};

/**
 * @param {!oauth2.Data=} data
 * @param {?=} options
 * @return {!angular.IPromise<string>}
 */
tsickle_declare_module.angular.oauth2.OAuth.prototype.revokeToken = function(data, options) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.OAuthTokenConfig = function() {};
 /** @type {string} */
tsickle_declare_module.angular.oauth2.OAuthTokenConfig.prototype.name;
 /** @type {?} */
tsickle_declare_module.angular.oauth2.OAuthTokenConfig.prototype.options;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.OAuthTokenOptions = function() {};
 /** @type {boolean} */
tsickle_declare_module.angular.oauth2.OAuthTokenOptions.prototype.secure;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.oauth2.OAuthTokenProvider = function() {};

/**
 * @param {!oauth2.OAuthTokenConfig} params
 * @return {!oauth2.OAuthTokenConfig}
 */
tsickle_declare_module.angular.oauth2.OAuthTokenProvider.prototype.configure = function(params) {};