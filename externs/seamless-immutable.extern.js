/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/seamless-immutable/index.d.ts:

/* TODO: ExportAssignment in  */
/** @const */
var SeamlessImmutable = {};

/** @typedef {?} */
SeamlessImmutable.DeepPartial;
/**
 * @record
 * @struct
 */
SeamlessImmutable.MergeConfig = function() {};
 /** @type {boolean} */
SeamlessImmutable.MergeConfig.prototype.deep;

/**
 * @param {?} a
 * @param {?} b
 * @param {?} config
 * @return {?}
 */
SeamlessImmutable.MergeConfig.prototype.merger = function(a, b, config) {};
/**
 * @record
 * @struct
 */
SeamlessImmutable.Options = function() {};
 /** @type {?} */
SeamlessImmutable.Options.prototype.prototype;
/**
 * @record
 * @struct
 */
SeamlessImmutable.AsMutableOptions = function() {};
 /** @type {boolean} */
SeamlessImmutable.AsMutableOptions.prototype.deep;
/**
 * @record
 * @struct
 */
SeamlessImmutable.ImmutableObjectMixin = function() {};

/**
 * @template K, TValue
 * @param {K|string} property
 * @param {?|TValue} value
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.set = function(property, value) {};

/**
 * @template K, L, M, N, O, TValue
 * @param {!Array<?>|!Array<string>} propertyPath
 * @param {?|TValue} value
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.setIn = function(propertyPath, value) {};

/**
 * @template K, L, M, N, O, TValue
 * @param {!Array<?>|!Array<string>} propertyPath
 * @param {?|TValue=} defaultValue
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.getIn = function(propertyPath, defaultValue) {};

/**
 * @param {!SeamlessImmutable.AsMutableOptions=} opts
 * @return {T}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.asMutable = function(opts) {};

/**
 * @param {?} part
 * @param {!SeamlessImmutable.MergeConfig=} config
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.merge = function(part, config) {};

/**
 * @template K, TValue
 * @param {K|string} property
 * @param {function(?, !Array<?>): ?|function(TValue, !Array<?>): ?} updaterFunction
 * @param {...?} additionalArguments
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.update = function(property, updaterFunction, additionalArguments) {};

/**
 * @template K, L, M, N, O, TValue
 * @param {!Array<?>|!Array<string>} propertyPath
 * @param {function(?, !Array<?>): ?|function(TValue, !Array<?>): ?} updaterFunction
 * @param {...?} additionalArguments
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.updateIn = function(propertyPath, updaterFunction, additionalArguments) {};

/**
 * @template K
 * @param {...K|function(?, K): boolean} property_or_properties_or_filter
 * @return {?}
 */
SeamlessImmutable.ImmutableObjectMixin.prototype.without = function(property_or_properties_or_filter) {};
/**
 * @record
 * @struct
 */
SeamlessImmutable.ImmutableArrayMixin = function() {};

/**
 * @param {!SeamlessImmutable.AsMutableOptions=} opts
 * @return {!Array<T>}
 */
SeamlessImmutable.ImmutableArrayMixin.prototype.asMutable = function(opts) {};

/**
 * @param {function(T): !Array<?>} toKeyValue
 * @return {?}
 */
SeamlessImmutable.ImmutableArrayMixin.prototype.asObject = function(toKeyValue) {};

/**
 * @template TTarget
 * @param {function(T): !Array<TTarget>} mapFunction
 * @return {?}
 */
SeamlessImmutable.ImmutableArrayMixin.prototype.flatMap = function(mapFunction) {};

/** @typedef {?} */
SeamlessImmutable.ImmutableObject;

/** @typedef {?} */
SeamlessImmutable.ImmutableArray;

/** @typedef {?} */
SeamlessImmutable.Immutable;

/**
 * @template T
 * @param {!Array<T>|T} obj
 * @param {!SeamlessImmutable.Options=} options
 * @return {?}
 */
SeamlessImmutable.from = function(obj, options) {};

/**
 * @param {?} target
 * @return {boolean}
 */
SeamlessImmutable.isImmutable = function(target) {};

/**
 * @param {string} message
 * @return {!Error}
 */
SeamlessImmutable.ImmutableError = function(message) {};

/**
 * @template T
 * @param {!Array<T>|T} obj
 * @param {!SeamlessImmutable.Options=} options
 * @return {?}
 */
function SeamlessImmutable(obj, options) {}