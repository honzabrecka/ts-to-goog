/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/oauth2-server/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/**
 * @constructor
 * @struct
 * Instantiates OAuth2Server using the supplied model
 * 
 * @param {!OAuth2Server.ServerOptions} options
 */
function OAuth2Server(options) {}
 /** @type {?} */
OAuth2Server.OAuth2Server;

/**
 * Authenticates a request.
 * 
 * @param {!OAuth2Server.Request} request
 * @param {!OAuth2Server.Response} response
 * @param {!OAuth2Server.AuthenticateOptions=} options
 * @param {function(?, !OAuth2Server.Token): void=} callback
 * @return {!Promise<!OAuth2Server.Token>}
 */
OAuth2Server.prototype.authenticate = function(request, response, options, callback) {};

/**
 * Authorizes a token request.
 * 
 * @param {!OAuth2Server.Request} request
 * @param {!OAuth2Server.Response} response
 * @param {!OAuth2Server.AuthorizeOptions=} options
 * @param {function(?, !OAuth2Server.AuthorizationCode): void=} callback
 * @return {!Promise<!OAuth2Server.AuthorizationCode>}
 */
OAuth2Server.prototype.authorize = function(request, response, options, callback) {};

/**
 * Retrieves a new token for an authorized token request.
 * 
 * @param {!OAuth2Server.Request} request
 * @param {!OAuth2Server.Response} response
 * @param {!OAuth2Server.TokenOptions=} options
 * @param {function(?, !OAuth2Server.Token): void=} callback
 * @return {!Promise<!OAuth2Server.Token>}
 */
OAuth2Server.prototype.token = function(request, response, options, callback) {};

/**
 * @constructor
 * @struct
 * Instantiates Request using the supplied options.
 * 
 * @param {(!Object<string,?>|!Express.Request)=} options
 */
OAuth2Server.Request = function(options) {};
 /** @type {?} */
OAuth2Server.Request.prototype.body;
 /** @type {!Object<string,string>} */
OAuth2Server.Request.prototype.headers;
 /** @type {string} */
OAuth2Server.Request.prototype.method;
 /** @type {!Object<string,string>} */
OAuth2Server.Request.prototype.query;

/**
 * Returns the specified HTTP header field. The match is case-insensitive.
 * 
 * @param {string} field
 * @return {?}
 */
OAuth2Server.Request.prototype.get = function(field) {};

/**
 * Checks if the request’s Content-Type HTTP header matches any of the given MIME types.
 * 
 * @param {!Array<string>} types
 * @return {(string|boolean)}
 */
OAuth2Server.Request.prototype.is = function(types) {};

/**
 * @constructor
 * @struct
 * Instantiates Response using the supplied options.
 * 
 * @param {(!Object<string,?>|!Express.Response)=} options
 */
OAuth2Server.Response = function(options) {};
 /** @type {?} */
OAuth2Server.Response.prototype.body;
 /** @type {!Object<string,string>} */
OAuth2Server.Response.prototype.headers;
 /** @type {number} */
OAuth2Server.Response.prototype.status;

/**
 * Returns the specified HTTP header field. The match is case-insensitive.
 * 
 * @param {string} field
 * @return {?}
 */
OAuth2Server.Response.prototype.get = function(field) {};

/**
 * Sets the specified HTTP header field. The match is case-insensitive.
 * 
 * @param {string} field
 * @param {string} value
 * @return {void}
 */
OAuth2Server.Response.prototype.set = function(field, value) {};

/**
 * Redirects to the specified URL using 302 Found.
 * 
 * @param {string} url
 * @return {void}
 */
OAuth2Server.Response.prototype.redirect = function(url) {};
/**
 * @extends {OAuth2Server.AuthenticateOptions}
 * @extends {OAuth2Server.AuthorizeOptions}
 * @extends {OAuth2Server.TokenOptions}
 * @record
 * @struct
 */
OAuth2Server.ServerOptions = function() {};
 /** @type {(!OAuth2Server.AuthorizationCodeModel|!OAuth2Server.ClientCredentialsModel|!OAuth2Server.RefreshTokenModel|!OAuth2Server.PasswordModel|!OAuth2Server.ExtensionModel)} */
OAuth2Server.ServerOptions.prototype.model;
/**
 * @record
 * @struct
 */
OAuth2Server.AuthenticateOptions = function() {};
 /** @type {string} */
OAuth2Server.AuthenticateOptions.prototype.scope;
 /** @type {boolean} */
OAuth2Server.AuthenticateOptions.prototype.addAcceptedScopesHeader;
 /** @type {boolean} */
OAuth2Server.AuthenticateOptions.prototype.addAuthorizedScopesHeader;
 /** @type {boolean} */
OAuth2Server.AuthenticateOptions.prototype.allowBearerTokensInQueryString;
/**
 * @record
 * @struct
 */
OAuth2Server.AuthorizeOptions = function() {};
 /** @type {!Object} */
OAuth2Server.AuthorizeOptions.prototype.authenticateHandler;
 /** @type {boolean} */
OAuth2Server.AuthorizeOptions.prototype.allowEmptyState;
 /** @type {number} */
OAuth2Server.AuthorizeOptions.prototype.authorizationCodeLifetime;
/**
 * @record
 * @struct
 */
OAuth2Server.TokenOptions = function() {};
 /** @type {number} */
OAuth2Server.TokenOptions.prototype.accessTokenLifetime;
 /** @type {number} */
OAuth2Server.TokenOptions.prototype.refreshTokenLifetime;
 /** @type {boolean} */
OAuth2Server.TokenOptions.prototype.allowExtendedTokenAttributes;
 /** @type {!Object} */
OAuth2Server.TokenOptions.prototype.requireClientAuthentication;
 /** @type {boolean} */
OAuth2Server.TokenOptions.prototype.alwaysIssueNewRefreshToken;

/** @typedef {function(?, T): void} */
OAuth2Server.Callback;

/** @typedef {(boolean|string|number)} */
OAuth2Server.Falsey;
/**
 * @record
 * @struct
 */
OAuth2Server.BaseModel = function() {};

/**
 * Invoked to generate a new access token.
 * 
 * @param {!OAuth2Server.Client} client
 * @param {!OAuth2Server.User} user
 * @param {string} scope
 * @param {function(?, string): void=} callback
 * @return {!Promise<string>}
 */
OAuth2Server.BaseModel.prototype.generateAccessToken = function(client, user, scope, callback) {};

/**
 * Invoked to retrieve a client using a client id or a client id/client secret combination, depending on the grant type.
 * 
 * @param {string} clientId
 * @param {string} clientSecret
 * @param {function(?, (boolean|string|number|!OAuth2Server.Client)): void=} callback
 * @return {!Promise<(boolean|string|number|!OAuth2Server.Client)>}
 */
OAuth2Server.BaseModel.prototype.getClient = function(clientId, clientSecret, callback) {};

/**
 * Invoked to save an access token and optionally a refresh token, depending on the grant type.
 * 
 * @param {!OAuth2Server.Token} token
 * @param {!OAuth2Server.Client} client
 * @param {!OAuth2Server.User} user
 * @param {function(?, !OAuth2Server.Token): void=} callback
 * @return {!Promise<!OAuth2Server.Token>}
 */
OAuth2Server.BaseModel.prototype.saveToken = function(token, client, user, callback) {};
/**
 * @record
 * @struct
 */
OAuth2Server.RequestAuthenticationModel = function() {};

/**
 * Invoked to retrieve an existing access token previously saved through Model#saveToken().
 * 
 * @param {string} accessToken
 * @param {function(?, !OAuth2Server.Token): void=} callback
 * @return {!Promise<!OAuth2Server.Token>}
 */
OAuth2Server.RequestAuthenticationModel.prototype.getAccessToken = function(accessToken, callback) {};

/**
 * Invoked during request authentication to check if the provided access token was authorized the requested scopes.
 * 
 * @param {!OAuth2Server.Token} token
 * @param {string} scope
 * @param {function(?, boolean): void=} callback
 * @return {!Promise<boolean>}
 */
OAuth2Server.RequestAuthenticationModel.prototype.verifyScope = function(token, scope, callback) {};
/**
 * @extends {OAuth2Server.BaseModel}
 * @extends {OAuth2Server.RequestAuthenticationModel}
 * @record
 * @struct
 */
OAuth2Server.AuthorizationCodeModel = function() {};

/**
 * Invoked to generate a new refresh token.
 * 
 * @param {!OAuth2Server.Client} client
 * @param {!OAuth2Server.User} user
 * @param {string} scope
 * @param {function(?, string): void=} callback
 * @return {!Promise<string>}
 */
OAuth2Server.AuthorizationCodeModel.prototype.generateRefreshToken = function(client, user, scope, callback) {};

/**
 * Invoked to generate a new authorization code.
 * 
 * @param {function(?, string): void=} callback
 * @return {!Promise<string>}
 */
OAuth2Server.AuthorizationCodeModel.prototype.generateAuthorizationCode = function(callback) {};

/**
 * Invoked to retrieve an existing authorization code previously saved through Model#saveAuthorizationCode().
 * 
 * @param {string} authorizationCode
 * @param {function(?, !OAuth2Server.AuthorizationCode): void=} callback
 * @return {!Promise<!OAuth2Server.AuthorizationCode>}
 */
OAuth2Server.AuthorizationCodeModel.prototype.getAuthorizationCode = function(authorizationCode, callback) {};

/**
 * Invoked to save an authorization code.
 * 
 * @param {!OAuth2Server.AuthorizationCode} code
 * @param {!OAuth2Server.Client} client
 * @param {!OAuth2Server.User} user
 * @param {function(?, !OAuth2Server.AuthorizationCode): void=} callback
 * @return {!Promise<!OAuth2Server.AuthorizationCode>}
 */
OAuth2Server.AuthorizationCodeModel.prototype.saveAuthorizationCode = function(code, client, user, callback) {};

/**
 * Invoked to revoke an authorization code.
 * 
 * @param {!OAuth2Server.AuthorizationCode} code
 * @param {function(?, boolean): void=} callback
 * @return {!Promise<boolean>}
 */
OAuth2Server.AuthorizationCodeModel.prototype.revokeAuthorizationCode = function(code, callback) {};

/**
 * Invoked to check if the requested scope is valid for a particular client/user combination.
 * 
 * @param {!OAuth2Server.User} user
 * @param {!OAuth2Server.Client} client
 * @param {string} scope
 * @param {function(?, (boolean|string|number|!Array<string>)): void=} callback
 * @return {!Promise<(boolean|string|number|!Array<string>)>}
 */
OAuth2Server.AuthorizationCodeModel.prototype.validateScope = function(user, client, scope, callback) {};
/**
 * @extends {OAuth2Server.BaseModel}
 * @extends {OAuth2Server.RequestAuthenticationModel}
 * @record
 * @struct
 */
OAuth2Server.PasswordModel = function() {};

/**
 * Invoked to generate a new refresh token.
 * 
 * @param {!OAuth2Server.Client} client
 * @param {!OAuth2Server.User} user
 * @param {string} scope
 * @param {function(?, string): void=} callback
 * @return {!Promise<string>}
 */
OAuth2Server.PasswordModel.prototype.generateRefreshToken = function(client, user, scope, callback) {};

/**
 * Invoked to retrieve a user using a username/password combination.
 * 
 * @param {string} username
 * @param {string} password
 * @param {function(?, (boolean|string|number|!OAuth2Server.User)): void=} callback
 * @return {!Promise<(boolean|string|number|!OAuth2Server.User)>}
 */
OAuth2Server.PasswordModel.prototype.getUser = function(username, password, callback) {};

/**
 * Invoked to check if the requested scope is valid for a particular client/user combination.
 * 
 * @param {!OAuth2Server.User} user
 * @param {!OAuth2Server.Client} client
 * @param {string} scope
 * @param {function(?, (boolean|string|number|!Array<string>)): void=} callback
 * @return {!Promise<(boolean|string|number|!Array<string>)>}
 */
OAuth2Server.PasswordModel.prototype.validateScope = function(user, client, scope, callback) {};
/**
 * @extends {OAuth2Server.BaseModel}
 * @extends {OAuth2Server.RequestAuthenticationModel}
 * @record
 * @struct
 */
OAuth2Server.RefreshTokenModel = function() {};

/**
 * Invoked to generate a new refresh token.
 * 
 * @param {!OAuth2Server.Client} client
 * @param {!OAuth2Server.User} user
 * @param {string} scope
 * @param {function(?, string): void=} callback
 * @return {!Promise<string>}
 */
OAuth2Server.RefreshTokenModel.prototype.generateRefreshToken = function(client, user, scope, callback) {};

/**
 * Invoked to retrieve an existing refresh token previously saved through Model#saveToken().
 * 
 * @param {string} refreshToken
 * @param {function(?, !OAuth2Server.RefreshToken): void=} callback
 * @return {!Promise<!OAuth2Server.RefreshToken>}
 */
OAuth2Server.RefreshTokenModel.prototype.getRefreshToken = function(refreshToken, callback) {};

/**
 * Invoked to revoke a refresh token.
 * 
 * @param {!OAuth2Server.Token} token
 * @param {function(?, boolean): void=} callback
 * @return {!Promise<boolean>}
 */
OAuth2Server.RefreshTokenModel.prototype.revokeToken = function(token, callback) {};
/**
 * @extends {OAuth2Server.BaseModel}
 * @extends {OAuth2Server.RequestAuthenticationModel}
 * @record
 * @struct
 */
OAuth2Server.ClientCredentialsModel = function() {};

/**
 * Invoked to retrieve the user associated with the specified client.
 * 
 * @param {!OAuth2Server.Client} client
 * @param {function(?, (boolean|string|number|!OAuth2Server.User)): void=} callback
 * @return {!Promise<(boolean|string|number|!OAuth2Server.User)>}
 */
OAuth2Server.ClientCredentialsModel.prototype.getUserFromClient = function(client, callback) {};

/**
 * Invoked to check if the requested scope is valid for a particular client/user combination.
 * 
 * @param {!OAuth2Server.User} user
 * @param {!OAuth2Server.Client} client
 * @param {string} scope
 * @param {function(?, (boolean|string|number|!Array<string>)): void=} callback
 * @return {!Promise<(boolean|string|number|!Array<string>)>}
 */
OAuth2Server.ClientCredentialsModel.prototype.validateScope = function(user, client, scope, callback) {};
/**
 * @extends {OAuth2Server.BaseModel}
 * @extends {OAuth2Server.RequestAuthenticationModel}
 * @record
 * @struct
 */
OAuth2Server.ExtensionModel = function() {};
/**
 * @record
 * @struct
 */
OAuth2Server.User = function() {};
 /** @type {string} */
OAuth2Server.User.prototype.id;

/* TODO: IndexSignature: OAuth2Server */
/**
 * @record
 * @struct
 */
OAuth2Server.Client = function() {};
 /** @type {string} */
OAuth2Server.Client.prototype.id;
 /** @type {!Array<string>} */
OAuth2Server.Client.prototype.redirectUris;
 /** @type {!Array<string>} */
OAuth2Server.Client.prototype.grants;
 /** @type {number} */
OAuth2Server.Client.prototype.accessTokenLifetime;
 /** @type {number} */
OAuth2Server.Client.prototype.refreshTokenLifetime;

/* TODO: IndexSignature: OAuth2Server */
/**
 * @record
 * @struct
 */
OAuth2Server.AuthorizationCode = function() {};
 /** @type {string} */
OAuth2Server.AuthorizationCode.prototype.authorizationCode;
 /** @type {!Date} */
OAuth2Server.AuthorizationCode.prototype.expiresAt;
 /** @type {string} */
OAuth2Server.AuthorizationCode.prototype.redirectUri;
 /** @type {string} */
OAuth2Server.AuthorizationCode.prototype.scope;
 /** @type {!OAuth2Server.Client} */
OAuth2Server.AuthorizationCode.prototype.client;
 /** @type {!OAuth2Server.User} */
OAuth2Server.AuthorizationCode.prototype.user;

/* TODO: IndexSignature: OAuth2Server */
/**
 * @record
 * @struct
 */
OAuth2Server.Token = function() {};
 /** @type {string} */
OAuth2Server.Token.prototype.accessToken;
 /** @type {!Date} */
OAuth2Server.Token.prototype.accessTokenExpiresAt;
 /** @type {string} */
OAuth2Server.Token.prototype.refreshToken;
 /** @type {!Date} */
OAuth2Server.Token.prototype.refreshTokenExpiresAt;
 /** @type {string} */
OAuth2Server.Token.prototype.scope;
 /** @type {!OAuth2Server.Client} */
OAuth2Server.Token.prototype.client;
 /** @type {!OAuth2Server.User} */
OAuth2Server.Token.prototype.user;

/* TODO: IndexSignature: OAuth2Server */
/**
 * @record
 * @struct
 */
OAuth2Server.RefreshToken = function() {};
 /** @type {string} */
OAuth2Server.RefreshToken.prototype.refreshToken;
 /** @type {!Date} */
OAuth2Server.RefreshToken.prototype.refreshTokenExpiresAt;
 /** @type {string} */
OAuth2Server.RefreshToken.prototype.scope;
 /** @type {!OAuth2Server.Client} */
OAuth2Server.RefreshToken.prototype.client;
 /** @type {!OAuth2Server.User} */
OAuth2Server.RefreshToken.prototype.user;

/* TODO: IndexSignature: OAuth2Server */

/* TODO: ExportAssignment in  */