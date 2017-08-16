/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/optimist/index.d.ts:
/** @const */
var optimist = {};
/**
 * @record
 * @struct
 */
optimist.Opt = function() {};
 /** @type {(string|!Array<string>)} */
optimist.Opt.prototype.alias;
 /** @type {?} */
optimist.Opt.prototype.default;
 /** @type {(string|number|!Array<string>)} */
optimist.Opt.prototype.demand;
 /** @type {string} */
optimist.Opt.prototype.describe;
 /** @type {string} */
optimist.Opt.prototype.type;
/**
 * @record
 * @struct
 */
optimist.Parser = function() {};
 /** @type {?} */
optimist.Parser.prototype.argv;

/* TODO: CallSignature: optimist */

/**
 * Use .parse() to do the same thing as treating optimist as a function
 * @param {!Array<string>} args
 * @return {?}
 */
optimist.Parser.prototype.parse = function(args) {};

/**
 * Set key names as equivalent such that updates to a key will propagate to aliases and vice-versa.
 * Take an object that maps keys to aliases.
 * @param {string|!Object<string,(string|!Array<string>)>} key_or_aliases
 * @param {(string|!Array<string>)=} alias
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.alias = function(key_or_aliases, alias) {};

/**
 * Set argv[key] to value if no option was specified on process.argv
 * Take an object that maps keys to default values
 * @param {string|!Object<string,?>} key_or_defaults
 * @param {?=} value
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.default = function(key_or_defaults, value) {};

/**
 * Show the usage information and exit if key wasn't specified in process.argv
 * Demand at least as many non-option arguments, which show up in argv._
 * Demand each element in key
 * @param {string|number|!Array<string>} key
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.demand = function(key) {};

/**
 * Describe a key for the generated usage information
 * Take an object that maps keys to descriptions
 * @param {string|!Object<string,string>} key_or_descriptions
 * @param {string=} desc
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.describe = function(key_or_descriptions, desc) {};

/**
 * Instead of chaining together, e.g. optimist.alias().demand().default()...,
 * you can specify keys in opt for each of the chainable methods.
 * Take an object that maps keys to opt parameters
 * @param {string|!Object<string,!optimist.Opt>} key_or_options
 * @param {!optimist.Opt=} opt
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.options = function(key_or_options, opt) {};

/**
 * Set a usage message to show which commands to use. Inside message,
 * the string $0 will get interpolated to the current script name or node
 * command for the present script similar to how $0 works in bash or perl.
 * @param {string} message
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.usage = function(message) {};

/**
 * Check that certain conditions are met in the provided arguments. If fn
 * throws or returns false, show the thrown error, usage information, and exit.
 * @param {function(?): ?} fn
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.check = function(fn) {};

/**
 * Interpret key as a boolean. If a non-flag option follows key in process.argv,
 * that string won't get set as the value of key. If key never shows up as a
 * flag in process.arguments, argv[key] will be false.
 * Interpret all the elements as booleans.
 * @param {string|!Array<string>} key
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.boolean = function(key) {};

/**
 * Tell the parser logic not to interpret key as a number or boolean. This can be useful if you need to preserve leading zeros in an input.
 * Interpret all the elements as strings
 * @param {string|!Array<string>} key
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.string = function(key) {};

/**
 * Format usage output to wrap at columns many columns.
 * @param {number} columns
 * @return {!optimist.Parser}
 */
optimist.Parser.prototype.wrap = function(columns) {};

/**
 * Return the generated usage string.
 * @return {string}
 */
optimist.Parser.prototype.help = function() {};

/**
 * Print the usage data using fn for printing (defaults to console.error).
 * @param {function(string): void=} fn
 * @return {void}
 */
optimist.Parser.prototype.showHelp = function(fn) {};
 /** @type {!optimist.Parser} */
var optimist;

/* TODO: ExportAssignment in  */