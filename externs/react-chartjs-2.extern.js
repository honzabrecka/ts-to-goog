/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-chartjs-2/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/** @typedef {?} */
var ChartDataFunction;

/** @typedef {?} */
var ChartData;
/**
 * @record
 * @struct
 */
function ChartComponentProps() {}
 /** @type {(!Chart.ChartData|?)} */
ChartComponentProps.prototype.data;
 /** @type {string} */
ChartComponentProps.prototype.type;
 /** @type {number} */
ChartComponentProps.prototype.height;
 /** @type {!Chart.ChartLegendOptions} */
ChartComponentProps.prototype.legend;
 /** @type {!Chart.ChartOptions} */
ChartComponentProps.prototype.options;
 /** @type {boolean} */
ChartComponentProps.prototype.redraw;
 /** @type {number} */
ChartComponentProps.prototype.width;

/**
 * @param {?} e
 * @return {void}
 */
ChartComponentProps.prototype.getDatasetAtEvent = function(e) {};

/**
 * @param {?} e
 * @return {void}
 */
ChartComponentProps.prototype.getElementAtEvent = function(e) {};

/**
 * @param {?} e
 * @return {void}
 */
ChartComponentProps.prototype.getElementsAtEvent = function(e) {};

/**
 * @param {?} e
 * @return {void}
 */
ChartComponentProps.prototype.onElementsClick = function(e) {};
/**
 * @extends {ChartComponentProps}
 * @record
 * @struct
 */
function LinearComponentProps() {}
 /** @type {(!Chart.ChartData|?)} */
LinearComponentProps.prototype.data;
/**
 * @constructor
 * @struct
 */
function ChartComponent() {}
 /** @type {!Chart} */
ChartComponent.prototype.chart_instance;
/**
 * @constructor
 * @struct
 */
function Doughnut() {}
/**
 * @constructor
 * @struct
 */
function Pie() {}
/**
 * @constructor
 * @struct
 */
function Line() {}
/**
 * @constructor
 * @struct
 */
function Bar() {}
/**
 * @constructor
 * @struct
 */
function HorizontalBar() {}
/**
 * @constructor
 * @struct
 */
function Radar() {}
/**
 * @constructor
 * @struct
 */
function Polar() {}
/**
 * @constructor
 * @struct
 */
function Bubble() {}