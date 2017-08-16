/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery-cropbox/index.d.ts:
/** @const */
var jQueryCropBox = {};

/** @const */
jQueryCropBox.ShowControls = {};
/** @const {number} */
jQueryCropBox.ShowControls.never;
/** @const {number} */
jQueryCropBox.ShowControls.always;
/** @const {number} */
jQueryCropBox.ShowControls.hover;
/** @const {number} */
jQueryCropBox.ShowControls.auto;
/**
 * @record
 * @struct
 */
jQueryCropBox.CropboxArea = function() {};
 /** @type {number} */
jQueryCropBox.CropboxArea.prototype.cropX;
 /** @type {number} */
jQueryCropBox.CropboxArea.prototype.cropY;
 /** @type {number} */
jQueryCropBox.CropboxArea.prototype.cropW;
 /** @type {number} */
jQueryCropBox.CropboxArea.prototype.cropH;
/**
 * @record
 * @struct
 */
jQueryCropBox.CropboxOptions = function() {};
 /** @type {number} */
jQueryCropBox.CropboxOptions.prototype.width;
 /** @type {number} */
jQueryCropBox.CropboxOptions.prototype.height;
 /** @type {number} */
jQueryCropBox.CropboxOptions.prototype.zoom;
 /** @type {number} */
jQueryCropBox.CropboxOptions.prototype.maxZoom;
 /** @type {?} */
jQueryCropBox.CropboxOptions.prototype.controls;
 /** @type {!jQueryCropBox.CropboxArea} */
jQueryCropBox.CropboxOptions.prototype.result;
 /** @type {jQueryCropBox.ShowControls} */
jQueryCropBox.CropboxOptions.prototype.showControls;
/**
 * @record
 * @struct
 */
jQueryCropBox.CropboxDragOptions = function() {};
 /** @type {number} */
jQueryCropBox.CropboxDragOptions.prototype.startX;
 /** @type {number} */
jQueryCropBox.CropboxDragOptions.prototype.startY;
 /** @type {number} */
jQueryCropBox.CropboxDragOptions.prototype.dx;
 /** @type {number} */
jQueryCropBox.CropboxDragOptions.prototype.dy;
/**
 * @record
 * @struct
 */
jQueryCropBox.CropboxSetCropOptions = function() {};
 /** @type {number} */
jQueryCropBox.CropboxSetCropOptions.prototype.cropX;
 /** @type {number} */
jQueryCropBox.CropboxSetCropOptions.prototype.cropY;
 /** @type {number} */
jQueryCropBox.CropboxSetCropOptions.prototype.cropW;
 /** @type {number} */
jQueryCropBox.CropboxSetCropOptions.prototype.cropH;
/**
 * @record
 * @struct
 */
jQueryCropBox.Cropbox = function() {};

/**
 * Increase image zoom level by one step
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.zoomIn = function() {};

/**
 * Decrease image zoom level by one step
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.zoomOut = function() {};

/**
 * Set zoom leevl to a value between 0 and 1. Need to call update to reflect the changes.
 * @param {number} percent
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.zoom = function(percent) {};

/**
 * Simulate image dragging, starting from (startX,startY) and moving a delta of (dx,dy). Need to call update to reflect the changes.
 * @param {!jQueryCropBox.CropboxDragOptions} options
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.drag = function(options) {};

/**
 * Set crop window.
 * @param {!jQueryCropBox.CropboxSetCropOptions} options
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.setCrop = function(options) {};

/**
 * Update the cropped result (must call after zoom and drag).
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.update = function() {};

/**
 * Generate a URL for the cropped image on the client (requires HTML5 compliant browser).
 * @return {string}
 */
jQueryCropBox.Cropbox.prototype.getDataURL = function() {};

/**
 * Generate a Blob with the cropped image (requires HTML5 compliant browser).
 * @return {?}
 */
jQueryCropBox.Cropbox.prototype.getBlob = function() {};

/**
 * Remove the cropbox functionality from the image.
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.remove = function() {};

/**
 * Attach an event handler function for one event on the Crop Box
 * @param {string} event
 * @param {function(!Event, ?, !jQueryCropBox.Cropbox): void} callback
 * @return {void}
 */
jQueryCropBox.Cropbox.prototype.on = function(event, callback) {};

/** @typedef {function(!Event, ?, !jQueryCropBox.Cropbox): void} */
jQueryCropBox.EventCallback;

/**
 * @param {!jQueryCropBox.CropboxOptions=} params
 * @return {!jQueryCropBox.Cropbox}
 */
JQuery.prototype.cropbox = function(params) {};

/**
 * @param {!jQueryCropBox.CropboxOptions=} params
 * @return {!jQueryCropBox.Cropbox}
 */
JQueryStatic.prototype.cropbox = function(params) {};