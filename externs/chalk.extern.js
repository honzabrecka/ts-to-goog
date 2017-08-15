/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/chalk/index.d.ts:

/* TODO: ExportAssignment in  */
/** @const */
var Chalk = {};
 /** @type {boolean} */
Chalk.enabled;
 /** @type {boolean} */
Chalk.supportsColor;
 /** @type {!Chalk.ChalkStyleMap} */
Chalk.styles;

/**
 * @param {string} value
 * @return {?}
 */
Chalk.stripColor = function(value) {};

/**
 * @param {string} str
 * @return {boolean}
 */
Chalk.hasColor = function(str) {};
/**
 * @extends {Chalk.ChalkStyle}
 * @record
 * @struct
 */
Chalk.ChalkChain = function() {};

/* TODO: CallSignature: Chalk */

/* TODO: CallSignature: Chalk */
/**
 * @record
 * @struct
 */
Chalk.ChalkStyleElement = function() {};
 /** @type {string} */
Chalk.ChalkStyleElement.prototype.open;
 /** @type {string} */
Chalk.ChalkStyleElement.prototype.close;
 /** @type {!Chalk.ChalkChain} */
Chalk.reset;
 /** @type {!Chalk.ChalkChain} */
Chalk.bold;
 /** @type {!Chalk.ChalkChain} */
Chalk.dim;
 /** @type {!Chalk.ChalkChain} */
Chalk.italic;
 /** @type {!Chalk.ChalkChain} */
Chalk.underline;
 /** @type {!Chalk.ChalkChain} */
Chalk.inverse;
 /** @type {!Chalk.ChalkChain} */
Chalk.hidden;
 /** @type {!Chalk.ChalkChain} */
Chalk.strikethrough;
 /** @type {!Chalk.ChalkChain} */
Chalk.black;
 /** @type {!Chalk.ChalkChain} */
Chalk.red;
 /** @type {!Chalk.ChalkChain} */
Chalk.green;
 /** @type {!Chalk.ChalkChain} */
Chalk.yellow;
 /** @type {!Chalk.ChalkChain} */
Chalk.blue;
 /** @type {!Chalk.ChalkChain} */
Chalk.magenta;
 /** @type {!Chalk.ChalkChain} */
Chalk.cyan;
 /** @type {!Chalk.ChalkChain} */
Chalk.white;
 /** @type {!Chalk.ChalkChain} */
Chalk.gray;
 /** @type {!Chalk.ChalkChain} */
Chalk.grey;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgBlack;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgRed;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgGreen;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgYellow;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgBlue;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgMagenta;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgCyan;
 /** @type {!Chalk.ChalkChain} */
Chalk.bgWhite;
/**
 * @record
 * @struct
 */
Chalk.ChalkStyle = function() {};
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.reset;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bold;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.dim;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.italic;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.underline;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.inverse;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.hidden;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.strikethrough;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.black;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.red;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.green;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.yellow;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.blue;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.magenta;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.cyan;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.white;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.gray;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.grey;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgBlack;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgRed;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgGreen;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgYellow;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgBlue;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgMagenta;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgCyan;
 /** @type {!Chalk.ChalkChain} */
Chalk.ChalkStyle.prototype.bgWhite;
/**
 * @record
 * @struct
 */
Chalk.ChalkStyleMap = function() {};
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.reset;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bold;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.dim;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.italic;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.underline;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.inverse;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.hidden;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.strikethrough;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.black;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.red;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.green;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.yellow;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.blue;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.magenta;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.cyan;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.white;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.gray;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgBlack;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgRed;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgGreen;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgYellow;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgBlue;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgMagenta;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgCyan;
 /** @type {!Chalk.ChalkStyleElement} */
Chalk.ChalkStyleMap.prototype.bgWhite;
 /** @type {function(new: (!Chalk.Chalk), {enabled: boolean}): ?} */
Chalk.constructor;
/**
 * @extends {Chalk.ChalkStyle}
 * @record
 * @struct
 */
Chalk.Chalk = function() {};
 /** @type {boolean} */
Chalk.Chalk.prototype.enabled;