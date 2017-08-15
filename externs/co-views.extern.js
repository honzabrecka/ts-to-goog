/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/co-views/index.d.ts:
/** @const */
var CoViews = {};
/**
 * @record
 * @struct
 */
CoViews.Options = function() {};
 /** @type {string} */
CoViews.Options.prototype.ext;
 /** @type {string} */
CoViews.Options.prototype.default;
 /** @type {!Object} */
CoViews.Options.prototype.map;
 /** @type {!Object} */
CoViews.Options.prototype.partials;
 /** @type {boolean} */
CoViews.Options.prototype.cache;
 /** @type {!Object} */
CoViews.Options.prototype.locals;

/**
 * Pass views `dir` and `opts` to return a render function.
 * @param {string=} dir
 * @param {!CoViews.Options=} opts
 * @return {function(string, !Object): ?}
 */
function CoViews(dir, opts) {}

/* TODO: ExportAssignment in  */