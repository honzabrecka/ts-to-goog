/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rc-slider/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function Marks() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function CommonApiProps() {}
 /** @type {string} */
CommonApiProps.prototype.className;
 /** @type {number} */
CommonApiProps.prototype.min;
 /** @type {number} */
CommonApiProps.prototype.max;
 /** @type {?} */
CommonApiProps.prototype.marks;
 /** @type {number} */
CommonApiProps.prototype.step;
 /** @type {boolean} */
CommonApiProps.prototype.vertical;
 /** @type {boolean} */
CommonApiProps.prototype.included;
 /** @type {boolean} */
CommonApiProps.prototype.disabled;
 /** @type {boolean} */
CommonApiProps.prototype.dots;
 /** @type {string} */
CommonApiProps.prototype.tipTransitionName;
 /** @type {?} */
CommonApiProps.prototype.tipFormatter;
 /** @type {(!React.CSSProperties|!Array<!React.CSSProperties>)} */
CommonApiProps.prototype.handleStyle;
 /** @type {(!React.CSSProperties|!Array<!React.CSSProperties>)} */
CommonApiProps.prototype.trackStyle;
 /** @type {!React.CSSProperties} */
CommonApiProps.prototype.railStyle;

/**
 * A handle generator which could be used to customized handle.
 * @param {?} props
 * @return {(string|number|boolean|!Object|!React.ReactElement<?>|!Array<(string|number|boolean|!Array<?>|!React.ReactElement<?>)>)}
 */
CommonApiProps.prototype.handle = function(props) {};

/**
 * onBeforeChange will be triggered when ontouchstart or onmousedown is triggered.
 * @param {?} value
 * @return {?}
 */
CommonApiProps.prototype.onBeforeChange = function(value) {};

/**
 * onChange will be triggered while the value of Slider changing.
 * @param {?} value
 * @return {?}
 */
CommonApiProps.prototype.onChange = function(value) {};

/**
 * onAfterChange will be triggered when ontouchend or onmouseup is triggered.
 * @param {?} value
 * @return {?}
 */
CommonApiProps.prototype.onAfterChange = function(value) {};
/**
 * @extends {CommonApiProps}
 * @record
 * @struct
 */
function SliderProps() {}
 /** @type {number} */
SliderProps.prototype.defaultValue;
 /** @type {number} */
SliderProps.prototype.value;
/**
 * @extends {CommonApiProps}
 * @record
 * @struct
 */
function RangeProps() {}
 /** @type {!Array<number>} */
RangeProps.prototype.defaultValue;
 /** @type {!Array<number>} */
RangeProps.prototype.value;
 /** @type {number} */
RangeProps.prototype.count;
 /** @type {boolean} */
RangeProps.prototype.allowCross;
 /** @type {boolean} */
RangeProps.prototype.pushable;
/**
 * @extends {CommonApiProps}
 * @record
 * @struct
 */
function HandleProps() {}
 /** @type {string} */
HandleProps.prototype.className;
 /** @type {boolean} */
HandleProps.prototype.vertical;
 /** @type {number} */
HandleProps.prototype.offset;
/**
 * @constructor
 * @struct
 */
function Slider() {}
/**
 * @constructor
 * @struct
 */
function Range() {}
/**
 * @constructor
 * @struct
 */
function Handle() {}