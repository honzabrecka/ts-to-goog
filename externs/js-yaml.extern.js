/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/js-yaml/index.d.ts:
/** @const */
var jsyaml = {};

/**
 * @param {string} str
 * @param {!jsyaml.LoadOptions=} opts
 * @return {?}
 */
jsyaml.safeLoad = function(str, opts) {};

/**
 * @param {string} str
 * @param {!jsyaml.LoadOptions=} opts
 * @return {?}
 */
jsyaml.load = function(str, opts) {};
/**
 * @extends {jsyaml.TypeConstructorOptions}
 * @record
 * @struct
 */
jsyaml.Type = function() {};
 /** @type {string} */
jsyaml.Type.prototype.tag;

/**
 * @constructor
 * @struct
 * @param {!jsyaml.SchemaDefinition} definition
 */
jsyaml.Schema = function(definition) {};

/**
 * @param {(!jsyaml.Type|!Array<!jsyaml.Type>)|(!jsyaml.Schema|!Array<!jsyaml.Schema>)} types_or_schemas
 * @param {(!jsyaml.Type|!Array<!jsyaml.Type>)=} types
 * @return {!jsyaml.Schema}
 */
jsyaml.Schema.create = function(types_or_schemas, types) {};

/**
 * @param {string} str
 * @param {function(?): void} iterator
 * @param {!jsyaml.LoadOptions=} opts
 * @return {?}
 */
jsyaml.safeLoadAll = function(str, iterator, opts) {};

/**
 * @param {string} str
 * @param {function(?): void} iterator
 * @param {!jsyaml.LoadOptions=} opts
 * @return {?}
 */
jsyaml.loadAll = function(str, iterator, opts) {};

/**
 * @param {?} obj
 * @param {!jsyaml.DumpOptions=} opts
 * @return {string}
 */
jsyaml.safeDump = function(obj, opts) {};

/**
 * @param {?} obj
 * @param {!jsyaml.DumpOptions=} opts
 * @return {string}
 */
jsyaml.dump = function(obj, opts) {};
/**
 * @record
 * @struct
 */
jsyaml.LoadOptions = function() {};
 /** @type {string} */
jsyaml.LoadOptions.prototype.filename;
 /** @type {boolean} */
jsyaml.LoadOptions.prototype.strict;
 /** @type {?} */
jsyaml.LoadOptions.prototype.schema;
/**
 * @record
 * @struct
 */
jsyaml.DumpOptions = function() {};
 /** @type {number} */
jsyaml.DumpOptions.prototype.indent;
 /** @type {boolean} */
jsyaml.DumpOptions.prototype.skipInvalid;
 /** @type {number} */
jsyaml.DumpOptions.prototype.flowLevel;
 /** @type {!Object} */
jsyaml.DumpOptions.prototype.styles;
 /** @type {?} */
jsyaml.DumpOptions.prototype.schema;
 /** @type {(boolean|function(?, ?): number)} */
jsyaml.DumpOptions.prototype.sortKeys;
 /** @type {number} */
jsyaml.DumpOptions.prototype.lineWidth;
 /** @type {boolean} */
jsyaml.DumpOptions.prototype.noRefs;
 /** @type {boolean} */
jsyaml.DumpOptions.prototype.noCompatMode;
 /** @type {boolean} */
jsyaml.DumpOptions.prototype.condenseFlow;
/**
 * @record
 * @struct
 */
jsyaml.TypeConstructorOptions = function() {};
 /** @type {string} */
jsyaml.TypeConstructorOptions.prototype.kind;
 /** @type {!Function} */
jsyaml.TypeConstructorOptions.prototype.resolve;
 /** @type {!Function} */
jsyaml.TypeConstructorOptions.prototype.construct;
 /** @type {!Object} */
jsyaml.TypeConstructorOptions.prototype.instanceOf;
 /** @type {string} */
jsyaml.TypeConstructorOptions.prototype.predicate;
 /** @type {!Function} */
jsyaml.TypeConstructorOptions.prototype.represent;
 /** @type {string} */
jsyaml.TypeConstructorOptions.prototype.defaultStyle;
 /** @type {!Object} */
jsyaml.TypeConstructorOptions.prototype.styleAliases;
/**
 * @record
 * @struct
 */
jsyaml.SchemaDefinition = function() {};
 /** @type {!Array<?>} */
jsyaml.SchemaDefinition.prototype.implicit;
 /** @type {!Array<?>} */
jsyaml.SchemaDefinition.prototype.explicit;
 /** @type {!Array<?>} */
jsyaml.SchemaDefinition.prototype.include;
 /** @type {?} */
jsyaml.FAILSAFE_SCHEMA;
 /** @type {?} */
jsyaml.JSON_SCHEMA;
 /** @type {?} */
jsyaml.CORE_SCHEMA;
 /** @type {?} */
jsyaml.DEFAULT_SAFE_SCHEMA;
 /** @type {?} */
jsyaml.DEFAULT_FULL_SCHEMA;
 /** @type {?} */
jsyaml.MINIMAL_SCHEMA;
 /** @type {?} */
jsyaml.SAFE_SCHEMA;

/**
 * @constructor
 * @struct
 * @param {?=} reason
 * @param {?=} mark
 */
jsyaml.YAMLException = function(reason, mark) {};

/**
 * @param {boolean=} compact
 * @return {string}
 */
jsyaml.YAMLException.prototype.toString = function(compact) {};

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */