/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/commonmark/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {string} nodeType
 * @param {!Array<?>=} sourcepos
 */
function Node(nodeType, sourcepos) {}
 /** @type {string} */
Node.prototype.type;
 /** @type {?} */
Node.prototype.firstChild;
 /** @type {?} */
Node.prototype.lastChild;
 /** @type {?} */
Node.prototype.next;
 /** @type {?} */
Node.prototype.prev;
 /** @type {?} */
Node.prototype.parent;
 /** @type {!Array<?>} */
Node.prototype.sourcepos;
 /** @type {boolean} */
Node.prototype.isContainer;
 /** @type {string} */
Node.prototype.literal;
 /** @type {string} */
Node.prototype.destination;
 /** @type {string} */
Node.prototype.title;
 /** @type {string} */
Node.prototype.info;
 /** @type {number} */
Node.prototype.level;
 /** @type {string} */
Node.prototype.listType;
 /** @type {boolean} */
Node.prototype.listTight;
 /** @type {number} */
Node.prototype.listStart;
 /** @type {string} */
Node.prototype.listDelimiter;
 /** @type {string} */
Node.prototype.onEnter;
 /** @type {string} */
Node.prototype.onExit;
 /** @type {?} */
Node.prototype._listData;

/**
 * Append a Node child to the end of the Node's children.
 * @param {?} child
 * @return {void}
 */
Node.prototype.appendChild = function(child) {};

/**
 *  Prepend a Node child to the beginning of the Node's children.
 * @param {?} child
 * @return {void}
 */
Node.prototype.prependChild = function(child) {};

/**
 *  Remove the Node from the tree, severing its links with siblings and parents, and closing up gaps as needed.
 * @return {void}
 */
Node.prototype.unlink = function() {};

/**
 * Insert a Node sibling after the Node.
 * @param {?} sibling
 * @return {void}
 */
Node.prototype.insertAfter = function(sibling) {};

/**
 * Insert a Node sibling before the Node.
 * @param {?} sibling
 * @return {void}
 */
Node.prototype.insertBefore = function(sibling) {};

/**
 * Returns a NodeWalker that can be used to iterate through the Node tree rooted in the Node
 * @return {?}
 */
Node.prototype.walker = function() {};

/**
 * @constructor
 * @struct
 * Constructs a new Parser
 * @param {?=} options
 */
function Parser(options) {}

/**
 * @param {string} input
 * @return {?}
 */
Parser.prototype.parse = function(input) {};

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function HtmlRenderer(options) {}
 /** @type {string} */
HtmlRenderer.prototype.softbreak;
 /** @type {?} */
HtmlRenderer.prototype.escape;

/**
 * @param {?} root
 * @return {string}
 */
HtmlRenderer.prototype.render = function(root) {};

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function XmlRenderer(options) {}

/**
 * @param {?} root
 * @return {string}
 */
XmlRenderer.prototype.render = function(root) {};
/**
 * @record
 * @struct
 */
function NodeWalkingStep() {}
 /** @type {boolean} */
NodeWalkingStep.prototype.entering;
 /** @type {?} */
NodeWalkingStep.prototype.node;
/**
 * @record
 * @struct
 */
function NodeWalker() {}

/**
 * Returns an object with properties entering and node. Returns null when we have finished walking the tree.
 * @return {?}
 */
NodeWalker.prototype.next = function() {};

/**
 * Resets the iterator to resume at the specified node and setting for entering. (Normally this isn't needed unless you do destructive updates to the Node tree.)
 * @param {?} node
 * @param {boolean=} entering
 * @return {void}
 */
NodeWalker.prototype.resumeAt = function(node, entering) {};

/** @typedef {!Array<?>} */
var Position;
/**
 * @record
 * @struct
 */
function ListData() {}
 /** @type {string} */
ListData.prototype.type;
 /** @type {boolean} */
ListData.prototype.tight;
 /** @type {string} */
ListData.prototype.delimiter;
 /** @type {string} */
ListData.prototype.bulletChar;
/**
 * @record
 * @struct
 */
function ParserOptions() {}
 /** @type {boolean} */
ParserOptions.prototype.smart;
 /** @type {boolean} */
ParserOptions.prototype.time;
/**
 * @extends {XmlRenderingOptions}
 * @record
 * @struct
 */
function HtmlRenderingOptions() {}
 /** @type {boolean} */
HtmlRenderingOptions.prototype.safe;
 /** @type {boolean} */
HtmlRenderingOptions.prototype.smart;
 /** @type {boolean} */
HtmlRenderingOptions.prototype.sourcepos;
/**
 * @record
 * @struct
 */
function XmlRenderingOptions() {}
 /** @type {boolean} */
XmlRenderingOptions.prototype.time;
 /** @type {boolean} */
XmlRenderingOptions.prototype.sourcepos;