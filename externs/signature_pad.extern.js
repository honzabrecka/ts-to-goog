/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/signature_pad/index.d.ts:
/** @const */
var SignaturePad = {};

/**
 * @constructor
 * @struct
 * @param {number} x
 * @param {number} y
 * @param {number} time
 */
SignaturePad.Point = function(x, y, time) {};
 /** @type {number} */
SignaturePad.Point.prototype.x;
 /** @type {number} */
SignaturePad.Point.prototype.y;
 /** @type {number} */
SignaturePad.Point.prototype.time;

/**
 * @param {!SignaturePad.Point} start
 * @return {number}
 */
SignaturePad.Point.prototype.velocityFrom = function(start) {};

/**
 * @param {!SignaturePad.Point} start
 * @return {number}
 */
SignaturePad.Point.prototype.distanceTo = function(start) {};

/**
 * @constructor
 * @struct
 * @param {!SignaturePad.Point} c1
 * @param {!SignaturePad.Point} c2
 */
SignaturePad.CurveControl = function(c1, c2) {};
 /** @type {!SignaturePad.Point} */
SignaturePad.CurveControl.prototype.c1;
 /** @type {!SignaturePad.Point} */
SignaturePad.CurveControl.prototype.c2;

/**
 * @constructor
 * @struct
 * @param {!SignaturePad.Point} startPoint
 * @param {!SignaturePad.Point} control1
 * @param {!SignaturePad.Point} control2
 * @param {!SignaturePad.Point} endPoint
 */
SignaturePad.Bezier = function(startPoint, control1, control2, endPoint) {};
 /** @type {!SignaturePad.Point} */
SignaturePad.Bezier.prototype.startPoint;
 /** @type {!SignaturePad.CurveControl} */
SignaturePad.Bezier.prototype.control1;
 /** @type {!SignaturePad.CurveControl} */
SignaturePad.Bezier.prototype.control2;
 /** @type {!SignaturePad.Point} */
SignaturePad.Bezier.prototype.endPoint;

/**
 * @return {number}
 */
SignaturePad.Bezier.prototype.length = function() {};

/**
 * @param {number} t
 * @param {number} start
 * @param {number} c1
 * @param {number} c2
 * @param {number} end
 * @return {number}
 */
SignaturePad.Bezier.prototype._point = function(t, start, c1, c2, end) {};
/**
 * @record
 * @struct
 */
SignaturePad.SignaturePadOptions = function() {};
 /** @type {number} */
SignaturePad.SignaturePadOptions.prototype.velocityFilterWeight;
 /** @type {number} */
SignaturePad.SignaturePadOptions.prototype.minWidth;
 /** @type {number} */
SignaturePad.SignaturePadOptions.prototype.maxWidth;
 /** @type {(number|!Function)} */
SignaturePad.SignaturePadOptions.prototype.dotSize;
 /** @type {string} */
SignaturePad.SignaturePadOptions.prototype.penColor;
 /** @type {string} */
SignaturePad.SignaturePadOptions.prototype.backgroundColor;
 /** @type {!Function} */
SignaturePad.SignaturePadOptions.prototype.onEnd;
 /** @type {!Function} */
SignaturePad.SignaturePadOptions.prototype.onBegin;
 /** @type {!Array<!SignaturePad.Point>} */
SignaturePad.prototype.points;
 /** @type {number} */
SignaturePad.prototype._lastVelocity;
 /** @type {number} */
SignaturePad.prototype._lastWidth;
 /** @type {boolean} */
SignaturePad.prototype._isEmpty;
 /** @type {boolean} */
SignaturePad.prototype._mouseButtonDown;
 /** @type {!CanvasRenderingContext2D} */
SignaturePad.prototype._ctx;
 /** @type {!HTMLCanvasElement} */
SignaturePad.prototype._canvas;
 /** @type {number} */
SignaturePad.prototype.velocityFilterWeight;
 /** @type {number} */
SignaturePad.prototype.minWidth;
 /** @type {number} */
SignaturePad.prototype.maxWidth;
 /** @type {!Function} */
SignaturePad.prototype.dotSize;
 /** @type {string} */
SignaturePad.prototype.penColor;
 /** @type {string} */
SignaturePad.prototype.backgroundColor;
 /** @type {!Function} */
SignaturePad.prototype.onEnd;
 /** @type {!Function} */
SignaturePad.prototype.onBegin;

/**
 *   Clears the canvas
 * @return {void}
 */
SignaturePad.prototype.clear = function() {};

/**
 *   Returns true if canvas is empty, otherwise returns false
 * @return {boolean}
 */
SignaturePad.prototype.isEmpty = function() {};

/**
 *   Draws signature image from data URL
 * @param {string} dataUrl
 * @return {void}
 */
SignaturePad.prototype.fromDataURL = function(dataUrl) {};

/**
 *   Returns signature image as data URL
 * @return {string}
 */
SignaturePad.prototype.toDataURL = function() {};

/**
 *   Unbinds all event handlers
 * @return {void}
 */
SignaturePad.prototype.off = function() {};

/**
 *   Rebinds all event handlers
 * @return {void}
 */
SignaturePad.prototype.on = function() {};

/**
 * @param {!Event} event
 * @return {void}
 */
SignaturePad.prototype._strokeBegin = function(event) {};

/**
 * @param {!Event} event
 * @return {void}
 */
SignaturePad.prototype._strokeUpdate = function(event) {};

/**
 * @param {!SignaturePad.Point} point
 * @return {void}
 */
SignaturePad.prototype._strokeDraw = function(point) {};

/**
 * @param {!Event} event
 * @return {void}
 */
SignaturePad.prototype._strokeEnd = function(event) {};

/**
 * @return {void}
 */
SignaturePad.prototype._handleMouseEvents = function() {};

/**
 * @return {void}
 */
SignaturePad.prototype._handleTouchEvents = function() {};

/**
 * @return {void}
 */
SignaturePad.prototype._reset = function() {};

/**
 * @param {!Event} event
 * @return {!SignaturePad.Point}
 */
SignaturePad.prototype._createPoint = function(event) {};

/**
 * @param {!SignaturePad.Point} point
 * @return {void}
 */
SignaturePad.prototype._addPoint = function(point) {};

/**
 * @param {!SignaturePad.Point} point1
 * @param {!SignaturePad.Point} point2
 * @param {!SignaturePad.Point} point3
 * @return {void}
 */
SignaturePad.prototype._calculateCurveControlPoints = function(point1, point2, point3) {};

/**
 * @param {!SignaturePad.Bezier} curve
 * @return {void}
 */
SignaturePad.prototype._addCurve = function(curve) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} size
 * @return {void}
 */
SignaturePad.prototype._drawPoint = function(x, y, size) {};

/**
 * @param {!SignaturePad.Bezier} curve
 * @param {number} startWidth
 * @param {number} endWidth
 * @return {void}
 */
SignaturePad.prototype._drawCurve = function(curve, startWidth, endWidth) {};

/**
 * @param {number} velocity
 * @return {void}
 */
SignaturePad.prototype._strokeWidth = function(velocity) {};