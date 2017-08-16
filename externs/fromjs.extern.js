/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fromjs/index.d.ts:

/**
 * @template T
 * @param {!Array<T>|?} results
 * @return {!FromJS.IQueryable<T>|!FromJS.IQueryable<?>}
 */
function from(results) {}
/** @const */
var FromJS = {};
/**
 * @extends {FromJS.IQueryable}
 * @record
 * @struct
 */
FromJS.IOrderedQueryable = function() {};

/**
 * @template TResult
 * @param {function(T): TResult} item
 * @return {!FromJS.IOrderedQueryable}
 */
FromJS.IOrderedQueryable.prototype.thenBy = function(item) {};

/**
 * @template TResult
 * @param {function(T): TResult} item
 * @return {!FromJS.IOrderedQueryable}
 */
FromJS.IOrderedQueryable.prototype.thenByDesc = function(item) {};
/**
 * @record
 * @struct
 */
FromJS.IQueryable = function() {};

/**
 * @param {function(T): boolean} predicate
 * @return {!FromJS.IQueryable}
 */
FromJS.IQueryable.prototype.where = function(predicate) {};

/**
 * @template TResult
 * @param {function(T): TResult} item
 * @return {!FromJS.IQueryable<TResult>}
 */
FromJS.IQueryable.prototype.select = function(item) {};

/**
 * @template TResult
 * @param {function(T): TResult} item
 * @return {!FromJS.IOrderedQueryable<T>}
 */
FromJS.IQueryable.prototype.orderByDesc = function(item) {};

/**
 * @template TResult
 * @param {function(T): TResult} item
 * @return {!FromJS.IOrderedQueryable<T>}
 */
FromJS.IQueryable.prototype.orderBy = function(item) {};

/**
 * @template TResult
 * @param {function(T): !Array<TResult>} item
 * @return {!FromJS.IQueryable<TResult>}
 */
FromJS.IQueryable.prototype.selectMany = function(item) {};

/**
 * @template TResult
 * @param {!Number} count
 * @return {!FromJS.IQueryable<TResult>}
 */
FromJS.IQueryable.prototype.skip = function(count) {};

/**
 * @template TResult
 * @param {!Number} count
 * @return {!FromJS.IQueryable<TResult>}
 */
FromJS.IQueryable.prototype.take = function(count) {};

/**
 * @param {function(T): boolean=} predicate
 * @return {T}
 */
FromJS.IQueryable.prototype.single = function(predicate) {};

/**
 * @param {function(T): boolean=} predicate
 * @return {T}
 */
FromJS.IQueryable.prototype.singleOrDefault = function(predicate) {};

/**
 * @param {function(T): boolean=} predicate
 * @return {T}
 */
FromJS.IQueryable.prototype.first = function(predicate) {};

/**
 * @return {T}
 */
FromJS.IQueryable.prototype.last = function() {};

/**
 * @return {T}
 */
FromJS.IQueryable.prototype.max = function() {};

/**
 * @return {!FromJS.IQueryable}
 */
FromJS.IQueryable.prototype.distinct = function() {};

/**
 * @return {number}
 */
FromJS.IQueryable.prototype.count = function() {};

/**
 * @param {T} item
 * @return {boolean}
 */
FromJS.IQueryable.prototype.contains = function(item) {};

/**
 * @return {T}
 */
FromJS.IQueryable.prototype.firstOrDefault = function() {};

/**
 * @template TKey
 * @param {function(T, TKey): void|function(T): void} action
 * @param {boolean=} a
 * @return {void}
 */
FromJS.IQueryable.prototype.each = function(action, a) {};

/**
 * @return {!Array<T>}
 */
FromJS.IQueryable.prototype.toArray = function() {};

/**
 * @param {!Array<T>} second
 * @return {!FromJS.IQueryable}
 */
FromJS.IQueryable.prototype.concat = function(second) {};

/**
 * @return {T}
 */
FromJS.IQueryable.prototype.sum = function() {};

/**
 * @param {function(T): boolean=} predicate
 * @return {boolean}
 */
FromJS.IQueryable.prototype.any = function(predicate) {};

/**
 * @param {function(T): boolean} predicate
 * @return {boolean}
 */
FromJS.IQueryable.prototype.all = function(predicate) {};