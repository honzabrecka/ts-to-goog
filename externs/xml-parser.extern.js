/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/xml-parser/index.d.ts:

/**
 * @param {string} xml
 * @return {!parse.Document}
 */
function parse(xml) {}
/**
 * @record
 * @struct
 */
parse.Document = function() {};
 /** @type {!parse.Declaration} */
parse.Document.prototype.declaration;
 /** @type {!parse.Node} */
parse.Document.prototype.root;
/**
 * @record
 * @struct
 */
parse.Declaration = function() {};
 /** @type {!parse.Attributes} */
parse.Declaration.prototype.attributes;
/**
 * @record
 * @struct
 */
parse.Node = function() {};
 /** @type {string} */
parse.Node.prototype.name;
 /** @type {!parse.Attributes} */
parse.Node.prototype.attributes;
 /** @type {!Array<!parse.Node>} */
parse.Node.prototype.children;
 /** @type {string} */
parse.Node.prototype.content;
/**
 * @record
 * @struct
 */
parse.Attributes = function() {};

/* TODO: IndexSignature: parse */

/* TODO: ExportAssignment in  */