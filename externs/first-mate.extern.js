/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/first-mate/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
/** @const */
var AtomFirstMate = {};

/** @typedef {?} */
AtomFirstMate.Disposable;
/**
 * @record
 * @struct
 */
AtomFirstMate.IToken = function() {};
 /** @type {string} */
AtomFirstMate.IToken.prototype.value;
 /** @type {!Array<string>} */
AtomFirstMate.IToken.prototype.scopes;
/**
 * @record
 * @struct
 */
AtomFirstMate.TokenizeLineResult = function() {};
 /** @type {string} */
AtomFirstMate.TokenizeLineResult.prototype.line;
 /** @type {!Array<?>} */
AtomFirstMate.TokenizeLineResult.prototype.tags;
 /** @type {!Array<!AtomFirstMate.IToken>} */
AtomFirstMate.TokenizeLineResult.prototype.tokens;
 /** @type {!Array<!AtomFirstMate.Rule>} */
AtomFirstMate.TokenizeLineResult.prototype.ruleStack;
/**
 * @record
 * @struct
 */
AtomFirstMate.Rule = function() {};
/**
 * @record
 * @struct
 */
AtomFirstMate.GrammarStatic = function() {};
 /** @type {?} */
AtomFirstMate.GrammarStatic.prototype.prototype;

/* TODO: ConstructSignature: AtomFirstMate */
/**
 * @record
 * @struct
 */
AtomFirstMate.Grammar = function() {};
 /** @type {!AtomFirstMate.GrammarStatic} */
AtomFirstMate.Grammar.prototype.constructor;

/**
 * @param {!Function} callback
 * @return {?}
 */
AtomFirstMate.Grammar.prototype.onDidUpdate = function(callback) {};

/**
 * Tokenizes all lines in a string.
 * 
 * @param {string} text A string containing one or more lines.
 * @return {!Array<!Array<!AtomFirstMate.IToken>>} An array of token arrays, one token array per line.
 */
AtomFirstMate.Grammar.prototype.tokenizeLines = function(text) {};

/**
 * Tokenizes a line of text.
 * 
 * @param {string} line Text to be tokenized.
 * @param {!Array<!AtomFirstMate.Rule>=} ruleStack
 * @param {boolean=} firstLine Indicates whether `line` is the first line in the file/buffer,
 *                  defaults to `false`.
 * @param {boolean=} compatibilityMode `true` by default.
 * @return {!AtomFirstMate.TokenizeLineResult} An object containing tokens for the given line.
 */
AtomFirstMate.Grammar.prototype.tokenizeLine = function(line, ruleStack, firstLine, compatibilityMode) {};
 /** @type {!AtomFirstMate.GrammarStatic} */
AtomFirstMate.Grammar;
/**
 * @record
 * @struct
 */
AtomFirstMate.GrammarRegistryStatic = function() {};
 /** @type {?} */
AtomFirstMate.GrammarRegistryStatic.prototype.prototype;

/* TODO: ConstructSignature: AtomFirstMate */
/**
 * @record
 * @struct
 */
AtomFirstMate.GrammarRegistry = function() {};
 /** @type {!AtomFirstMate.GrammarRegistryStatic} */
AtomFirstMate.GrammarRegistry.prototype.constructor;

/**
 * @param {function(?): void} callback
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.onDidAddGrammar = function(callback) {};

/**
 * @param {function(?): void} callback
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.onDidUpdateGrammar = function(callback) {};

/**
 * @return {!Array<?>}
 */
AtomFirstMate.GrammarRegistry.prototype.getGrammars = function() {};

/**
 * @param {string} scopeName
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.grammarForScopeName = function(scopeName) {};

/**
 * @param {?} grammar
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.addGrammar = function(grammar) {};

/**
 * @param {string} scopeName
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.removeGrammarForScopeName = function(scopeName) {};

/**
 * @param {string} grammarPath
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.readGrammarSync = function(grammarPath) {};

/**
 * @param {string} grammarPath
 * @param {function(!Error, ?): void} callback
 * @return {void}
 */
AtomFirstMate.GrammarRegistry.prototype.readGrammar = function(grammarPath, callback) {};

/**
 * @param {string} grammarPath
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.loadGrammarSync = function(grammarPath) {};

/**
 * @param {string} grammarPath
 * @param {function(!Error, ?): void} callback
 * @return {void}
 */
AtomFirstMate.GrammarRegistry.prototype.loadGrammar = function(grammarPath, callback) {};

/**
 * @param {string} filePath
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.grammarOverrideForPath = function(filePath) {};

/**
 * @param {string} filePath
 * @param {string} scopeName
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.setGrammarOverrideForPath = function(filePath, scopeName) {};

/**
 * @return {void}
 */
AtomFirstMate.GrammarRegistry.prototype.clearGrammarOverrides = function() {};

/**
 * @param {string} filePath
 * @param {string} fileContents
 * @return {?}
 */
AtomFirstMate.GrammarRegistry.prototype.selectGrammar = function(filePath, fileContents) {};
 /** @type {!AtomFirstMate.GrammarRegistryStatic} */
AtomFirstMate.GrammarRegistry;