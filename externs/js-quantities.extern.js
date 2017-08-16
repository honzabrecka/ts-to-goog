/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/js-quantities/index.d.ts:
 /** @type {!Qty.Type} */
var Qty;
 /** @type {!Array<string>} */
Qty.prototype.numerator;
 /** @type {!Array<string>} */
Qty.prototype.denominator;
 /** @type {number} */
Qty.prototype.scalar;
 /** @type {number} */
Qty.prototype.baseScalar;
 /** @type {string} */
Qty.prototype.initValue;

/**
 * @return {string}
 */
Qty.prototype.units = function() {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.isCompatible = function(value) {};

/**
 * @return {string}
 */
Qty.prototype.kind = function() {};

/**
 * @return {boolean}
 */
Qty.prototype.isUnitless = function() {};

/**
 * @return {boolean}
 */
Qty.prototype.isBase = function() {};

/**
 * @return {?}
 */
Qty.prototype.toBase = function() {};

/**
 * @return {number}
 */
Qty.prototype.toFloat = function() {};

/**
 * @param {(string|?)} value
 * @return {?}
 */
Qty.prototype.to = function(value) {};

/**
 * @return {?}
 */
Qty.prototype.inverse = function() {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.eq = function(value) {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.same = function(value) {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.lt = function(value) {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.lte = function(value) {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.gt = function(value) {};

/**
 * @param {(string|?)} value
 * @return {boolean}
 */
Qty.prototype.gte = function(value) {};

/**
 * @param {?} value
 * @return {number}
 */
Qty.prototype.compareTo = function(value) {};

/**
 * @param {(string|number|?)} value
 * @return {?}
 */
Qty.prototype.add = function(value) {};

/**
 * @param {(string|number|?)} value
 * @return {?}
 */
Qty.prototype.sub = function(value) {};

/**
 * @param {(string|number|?)} value
 * @return {?}
 */
Qty.prototype.mul = function(value) {};

/**
 * @param {(string|number|?)} value
 * @return {?}
 */
Qty.prototype.div = function(value) {};

/**
 * @param {(string|number|?)} value
 * @return {?}
 */
Qty.prototype.toPrec = function(value) {};

/**
 * @param {(string|number|?)|string=} valueOrPrecision_or_value
 * @param {number=} precision
 * @return {string}
 */
Qty.prototype.toString = function(valueOrPrecision_or_value, precision) {};

/**
 * @param {function(number, string): string|string=} formatter_or_value
 * @param {function(number, string): string=} formatter
 * @return {string}
 */
Qty.prototype.format = function(formatter_or_value, formatter) {};
/**
 * @record
 * @struct
 */
Qty.Type = function() {};

/* TODO: CallSignature: Qty */

/* TODO: CallSignature: Qty */

/* TODO: ConstructSignature: Qty */

/* TODO: ConstructSignature: Qty */
 /** @type {function(number, string): string} */
Qty.Type.prototype.formatter;
 /** @type {?} */
Qty.Type.prototype.Error;

/**
 * @param {string} value
 * @return {?}
 */
Qty.Type.prototype.parse = function(value) {};

/**
 * @return {!Array<string>}
 */
Qty.Type.prototype.getKinds = function() {};

/**
 * @param {string=} kind
 * @return {!Array<string>}
 */
Qty.Type.prototype.getUnits = function(kind) {};

/**
 * @param {string} unit
 * @return {!Array<string>}
 */
Qty.Type.prototype.getAliases = function(unit) {};

/**
 * @param {string} sourceUnit
 * @param {string} targetUnit
 * @return {!Qty.Converter}
 */
Qty.Type.prototype.swiftConverter = function(sourceUnit, targetUnit) {};

/**
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 */
Qty.Type.prototype.mulSafe = function(n1, n2) {};

/**
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 */
Qty.Type.prototype.divSafe = function(n1, n2) {};
/**
 * @record
 * @struct
 */
Qty.Converter = function() {};

/* TODO: CallSignature: Qty */

/* TODO: CallSignature: Qty */

/** @typedef {function(number, string): string} */
Qty.Formatter;

/** @typedef {number} */
Qty.ComparisonResult;

/** @typedef {(string|number|?)} */
Qty.Source;

/** @typedef {(string|?)} */
Qty.UnitSource;

/* TODO: ExportAssignment in  */