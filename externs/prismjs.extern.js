/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/prismjs/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */

/* TODO: NamespaceExportDeclaration in  */
 /** @type {?} */
var util;
 /** @type {?} */
var languages;
 /** @type {?} */
var plugins;
 /** @type {?} */
var hooks;

/**
 * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx class and
 * then calls Prism.highlightElement() on each one of them.
 * 
 * very large chunks of code. False by default.
 * is true, since in that case, the highlighting is done asynchronously.
 * @param {boolean} async
 * @param {?=} callback
 * @return {void}
 */
function highlightAll(async, callback) {}

/**
 * Highlights the code inside a single element.
 * 
 * where xxxx is a valid language identifier.
 * highlighting very large chunks of code. False by default.
 * Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
 * @param {!Element} element
 * @param {boolean} async
 * @param {?=} callback
 * @return {void}
 */
function highlightElement(element, async, callback) {}

/**
 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the language
 * definitions to use, and returns a string with the HTML produced.
 * 
 * Prism.languages.markup
 * @param {string} text
 * @param {?} grammer
 * @param {?=} language
 * @return {string}
 */
function highlight(text, grammer, language) {}

/**
 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input and the
 * language definitions to use, and returns an array with the tokenized code. When the language definition includes
 * nested tokens, the function is called recursively on each of these tokens. This method could be useful in other
 * contexts as well, as a very crude parser.
 * 
 * Prism.languages.markup
 * @param {string} text
 * @param {?} grammar
 * @return {!Array<(string|?)>}
 */
function tokenize(text, grammar) {}

/**
 * @return {void}
 */
function fileHighlight() {}
/**
 * @record
 * @struct
 */
function Environment() {}
 /** @type {!Element} */
Environment.prototype.element;
 /** @type {?} */
Environment.prototype.language;
 /** @type {?} */
Environment.prototype.grammar;
 /** @type {?} */
Environment.prototype.code;
 /** @type {?} */
Environment.prototype.highlightedCode;
 /** @type {string} */
Environment.prototype.type;
 /** @type {string} */
Environment.prototype.content;
 /** @type {string} */
Environment.prototype.tag;
 /** @type {!Array<string>} */
Environment.prototype.classes;
 /** @type {?} */
Environment.prototype.attributes;
 /** @type {!Element} */
Environment.prototype.parent;
/**
 * @record
 * @struct
 */
function Identifier() {}
 /** @type {number} */
Identifier.prototype.value;
/**
 * @record
 * @struct
 */
function Util() {}

/**
 * Encode raw strings in tokens in preparation to display as HTML
 * @param {(string|?|!Array<(string|?)>)} tokens
 * @return {(string|?|!Array<(string|?)>)}
 */
Util.prototype.encode = function(tokens) {};

/**
 * Determine the type of the object
 * @param {?} o
 * @return {string}
 */
Util.prototype.type = function(o) {};

/**
 * Get the unique id of this object or give it one if it does not have one
 * @param {?} obj
 * @return {?}
 */
Util.prototype.objId = function(obj) {};

/**
 * Deep clone a language definition (e.g. to extend it)
 * @param {?} o
 * @return {?}
 */
Util.prototype.clone = function(o) {};
/**
 * @record
 * @struct
 */
function LanguageDefinition() {}
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.keyword;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.number;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.function;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.string;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.boolean;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.operator;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.punctuation;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.atrule;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.url;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.selector;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.property;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.important;
 /** @type {(!RegExp|?)} */
LanguageDefinition.prototype.style;
 /** @type {string} */
LanguageDefinition.prototype.alias;
 /** @type {!RegExp} */
LanguageDefinition.prototype.pattern;
 /** @type {boolean} */
LanguageDefinition.prototype.lookbehind;
 /** @type {?} */
LanguageDefinition.prototype.inside;
 /** @type {!Array<?>} */
LanguageDefinition.prototype.rest;
/**
 * @record
 * @struct
 */
function Languages() {}

/* TODO: IndexSignature:  */

/**
 * Extend a language definition
 * @param {string} id The language definition to extend
 * @param {?} redef The new language definition to extend the original
 * @return {?}
 */
Languages.prototype.extend = function(id, redef) {};

/**
 * Insert a token before another token in a language literal
 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
 * we cannot just provide an object, we need anobject and a key.
 * @param {string} inside The key (or language id) of the parent
 * @param {string} before The key to insert before. If not provided, the function appends instead.
 * @param {?} insert Object with the key/value pairs to insert
 * @param {?} root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
 * @return {?}
 */
Languages.prototype.insertBefore = function(inside, before, insert, root) {};

/** @typedef {?} */
var HookCallback;

/** @typedef {string} */
var AvailableHooks;
/**
 * @record
 * @struct
 */
function Hooks() {}
 /** @type {!Array<!Array<?>>} */
Hooks.prototype.all;

/**
 * @param {string} name
 * @param {?} callback
 * @return {void}
 */
Hooks.prototype.add = function(name, callback) {};

/**
 * @param {string} name
 * @param {?} env
 * @return {void}
 */
Hooks.prototype.run = function(name, env) {};

/** @typedef {(string|?|!Array<(string|?)>)} */
var TokenNode;

/**
 * @constructor
 * @struct
 * The constructor for the Prism Token class
 * @param {string} type The type of the token
 * @param {(string|?|!Array<(string|?)>)} content The contents of the token
 * @param {?} alias Aliases for the current token (added as classes to this token's HTML)
 * @param {string} matchedStr The matched string that generated this token
 * @param {boolean} greedy Value that determines whether or not this token was generated using a greedy parsing algorithm
 */
function Token(type, content, alias, matchedStr, greedy) {}
 /** @type {string} */
Token.prototype.type;
 /** @type {(string|?|!Array<(string|?)>)} */
Token.prototype.content;
 /** @type {string} */
Token.prototype.alias;

/**
 * Given a token or string input, convert it to highlighted HTML
 * @param {(string|?|!Array<(string|?)>)} token
 * @param {?} language The language definition that understands the given token(s)
 * @param {!HTMLPreElement} parent The parent element element to pass into hook callbacks
 * @return {string} The HTML that represents the given token(s)
 */
Token.stringify = function(token, language, parent) {};