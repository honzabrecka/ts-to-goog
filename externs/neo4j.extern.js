/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/neo4j/index.d.ts:

/* TODO: ImportDeclaration in  */

/** @typedef {?} */
var ResultCallback;

/** @typedef {?} */
var DoneCallback;
/**
 * @record
 * @struct
 */
function Authentication() {}
 /** @type {string} */
Authentication.prototype.password;
 /** @type {string} */
Authentication.prototype.username;
/**
 * @record
 * @struct
 */
function ChangePasswordOptions() {}
 /** @type {string} */
ChangePasswordOptions.prototype.password;
/**
 * @record
 * @struct
 */
function ConstraintOptions() {}
 /** @type {?} */
ConstraintOptions.prototype.label;
 /** @type {?} */
ConstraintOptions.prototype.property;
/**
 * @record
 * @struct
 */
function CypherOptions() {}
 /** @type {!Object} */
CypherOptions.prototype.commit;
 /** @type {!Object} */
CypherOptions.prototype.headers;
 /** @type {!Object} */
CypherOptions.prototype.lean;
 /** @type {!Object} */
CypherOptions.prototype.params;
 /** @type {!Object} */
CypherOptions.prototype.query;
/**
 * @record
 * @struct
 */
function GraphDatabaseOptions() {}
 /** @type {?} */
GraphDatabaseOptions.prototype.agent;
 /** @type {(string|?)} */
GraphDatabaseOptions.prototype.auth;
 /** @type {!Object} */
GraphDatabaseOptions.prototype.headers;
 /** @type {string} */
GraphDatabaseOptions.prototype.proxy;
 /** @type {string} */
GraphDatabaseOptions.prototype.url;
/**
 * @record
 * @struct
 */
function HttpOptions() {}
 /** @type {!Object} */
HttpOptions.prototype.headers;
 /** @type {string} */
HttpOptions.prototype.method;
 /** @type {string} */
HttpOptions.prototype.path;
 /** @type {?} */
HttpOptions.prototype.body;
 /** @type {?} */
HttpOptions.prototype.raw;
/**
 * @record
 * @struct
 */
function IndexOptions() {}
 /** @type {?} */
IndexOptions.prototype.label;
 /** @type {?} */
IndexOptions.prototype.property;
/**
 * @record
 * @struct
 */
function Transaction() {}
 /** @type {!Date} */
Transaction.prototype.expiresAt;
 /** @type {(number|!Date)} */
Transaction.prototype.expiresIn;
 /** @type {string} */
Transaction.prototype.state;

/**
 * @param {?} callback
 * @return {void}
 */
Transaction.prototype.commit = function(callback) {};

/**
 * @param {?} options
 * @param {?} callback
 * @return {!request.Request}
 */
Transaction.prototype.cypher = function(options, callback) {};

/**
 * @param {?} callback
 * @return {void}
 */
Transaction.prototype.renew = function(callback) {};

/**
 * @param {?} callback
 * @return {void}
 */
Transaction.prototype.rollback = function(callback) {};

/**
 * @constructor
 * @struct
 * Constructor.
 * Constructor.
 * @param {string|?} url_or_options
 */
function GraphDatabase(url_or_options) {}
 /** @type {?} */
GraphDatabase.prototype.agent;
 /** @type {?} */
GraphDatabase.prototype.auth;
 /** @type {!Object} */
GraphDatabase.prototype.headers;
 /** @type {?} */
GraphDatabase.prototype.proxy;
 /** @type {string} */
GraphDatabase.prototype.url;

/**
 * Makes multiple queries, across multiple network requests, all within a single transaction.
 * @return {?}
 */
GraphDatabase.prototype.beginTransaction = function() {};

/**
 * Changes password.
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.changePassword = function(options, callback) {};

/**
 * Checks if the password must be changed.
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.checkPasswordChangeNeeded = function(callback) {};

/**
 * Creates a constraint.
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.createConstraint = function(options, callback) {};

/**
 * Makes simple, parametrized Cypher queries.
 * @param {?} options
 * @param {?} callback
 * @return {!request.Request}
 */
GraphDatabase.prototype.cypher = function(options, callback) {};

/**
 * Drops a constraint.
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.dropConstraint = function(options, callback) {};

/**
 * Drop an index.
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.dropIndex = function(options, callback) {};

/**
 * Gets constraints.
 * @param {?} options
 * @param {?=} callback
 * @return {void}
 */
GraphDatabase.prototype.getConstraints = function(options, callback) {};

/**
 * Gets indexes.
 * Gets indexes.
 * @param {?=} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
GraphDatabase.prototype.getIndexes = function(callback_or_options, callback) {};

/**
 * Get labels.
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.getLabels = function(callback) {};

/**
 * Gets property keys.
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.getPropertyKeys = function(callback) {};

/**
 * Gets relationship types.
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.getRelationshipTypes = function(callback) {};

/**
 * Determines if a constraint exists.
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.hasConstraint = function(options, callback) {};

/**
 * Determines if an index exists.
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
GraphDatabase.prototype.hasIndex = function(options, callback) {};

/**
 * Makes arbitrary HTTP request to the REST API.
 * @param {?} options
 * @param {?} callback
 * @return {!request.Request}
 */
GraphDatabase.prototype.http = function(options, callback) {};