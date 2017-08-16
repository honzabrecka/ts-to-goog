/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/morgan/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
/** @const */
var morgan = {};
/**
 * @record
 * @struct
 */
morgan.FormatFn = function() {};

/* TODO: CallSignature: morgan */
/**
 * @record
 * @struct
 */
morgan.TokenCallbackFn = function() {};

/* TODO: CallSignature: morgan */
/**
 * @record
 * @struct
 */
morgan.TokenIndexer = function() {};

/* TODO: IndexSignature: morgan */
/**
 * @record
 * @struct
 */
morgan.Morgan = function() {};

/* TODO: CallSignature: morgan */

/* TODO: CallSignature: morgan */

/* TODO: CallSignature: morgan */

/* TODO: CallSignature: morgan */

/* TODO: CallSignature: morgan */

/* TODO: CallSignature: morgan */

/* TODO: CallSignature: morgan */

/**
 * Define a custom token which can be used in custom morgan logging formats.
 * @param {string} name
 * @param {!morgan.TokenCallbackFn} callback
 * @return {!morgan.Morgan}
 */
morgan.Morgan.prototype.token = function(name, callback) {};

/**
 * Define a named custom format by specifying a format string in token notation
 * Define a named custom format by specifying a format function
 * @param {string} name
 * @param {string|!morgan.FormatFn} fmt
 * @return {!morgan.Morgan}
 */
morgan.Morgan.prototype.format = function(name, fmt) {};

/**
 * Compile a format string in token notation into a format function
 * @param {string} format
 * @return {!morgan.FormatFn}
 */
morgan.Morgan.prototype.compile = function(format) {};

/**
 * Define a custom token which can be used in custom morgan logging formats.
 * @param {string} name
 * @param {!morgan.TokenCallbackFn} callback
 * @return {!morgan.Morgan}
 */
morgan.token = function(name, callback) {};

/**
 * Define a named custom format by specifying a format string in token notation
 * Define a named custom format by specifying a format function
 * @param {string} name
 * @param {string|!morgan.FormatFn} fmt
 * @return {!morgan.Morgan}
 */
morgan.format = function(name, fmt) {};

/**
 * Compile a format string in token notation into a format function
 * @param {string} format
 * @return {!morgan.FormatFn}
 */
morgan.compile = function(format) {};
/**
 * @record
 * @struct
 */
morgan.StreamOptions = function() {};
 /** @type {function(string): void} */
morgan.StreamOptions.prototype.write;
/**
 * @record
 * @struct
 */
morgan.Options = function() {};
 /** @type {boolean} */
morgan.Options.prototype.buffer;
 /** @type {boolean} */
morgan.Options.prototype.immediate;
 /** @type {function(!e.Request, !e.Response): boolean} */
morgan.Options.prototype.skip;
 /** @type {!morgan.StreamOptions} */
morgan.Options.prototype.stream;

/**
 * 
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a string of a predefined name (see below for the names), 
 * or a string of a format string containing defined tokens.
 * 
 * Standard Apache combined log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
 * 
 * Standard Apache common log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]
 * 
 * Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
 * :method :url :status :response-time ms - :res[content-length]
 * 
 * Shorter than default, also including response time.
 * :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
 * 
 * The minimal output.
 * :method :url :status :res[content-length] - :response-time ms
 * 
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a  
 * custom format function which adheres to the signature.
 * @param {string|function(!e.Request, !e.Response): string} format_or_custom
 * @param {!morgan.Options=} options
 * @return {!e.RequestHandler}
 */
function morgan(format_or_custom, options) {}

/* TODO: ExportAssignment in  */