/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/qrcode/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function QRCodeOptions() {}
 /** @type {number} */
QRCodeOptions.prototype.version;
 /** @type {string} */
QRCodeOptions.prototype.errorCorrectionLevel;
 /** @type {!Function} */
QRCodeOptions.prototype.toSJISFunc;
/**
 * @extends {QRCodeRenderersOptions}
 * @record
 * @struct
 */
function QRCodeToDataURLOptions() {}
 /** @type {string} */
QRCodeToDataURLOptions.prototype.type;
 /** @type {?} */
QRCodeToDataURLOptions.prototype.rendererOpts;
/**
 * @extends {QRCodeOptions}
 * @record
 * @struct
 */
function QRCodeToStringOptions() {}
 /** @type {string} */
QRCodeToStringOptions.prototype.type;
/**
 * @extends {QRCodeRenderersOptions}
 * @record
 * @struct
 */
function QRCodeToFileOptions() {}
 /** @type {string} */
QRCodeToFileOptions.prototype.type;
 /** @type {?} */
QRCodeToFileOptions.prototype.rendererOpts;
/**
 * @extends {QRCodeOptions}
 * @record
 * @struct
 */
function QRCodeRenderersOptions() {}
 /** @type {number} */
QRCodeRenderersOptions.prototype.margin;
 /** @type {number} */
QRCodeRenderersOptions.prototype.scale;
 /** @type {?} */
QRCodeRenderersOptions.prototype.color;
/**
 * @record
 * @struct
 */
function QRCodeSegment() {}
 /** @type {string} */
QRCodeSegment.prototype.data;
 /** @type {string} */
QRCodeSegment.prototype.mode;
/**
 * @record
 * @struct
 */
function QRCode() {}
 /** @type {?} */
QRCode.prototype.modules;
 /** @type {number} */
QRCode.prototype.version;
 /** @type {number} */
QRCode.prototype.errorCorrectionLevel;
 /** @type {?} */
QRCode.prototype.maskPattern;
 /** @type {!Array<?>} */
QRCode.prototype.segments;

/**
 * Creates QR Code symbol and returns a qrcode object.
 * @param {(string|!Array<?>)} text
 * @param {?} options
 * @return {?}
 */
function create(text, options) {}

/**
 * Draws qr code symbol to canvas.
 * Draws qr code symbol to canvas.
 * Draws qr code symbol to canvas.
 * Draws qr code symbol to canvas.
 * Draws qr code symbol to node canvas.
 * Draws qr code symbol to node canvas.
 * @param {!HTMLCanvasElement|(string|!Array<?>)|?} canvasElement_or_text_or_canvas
 * @param {(string|!Array<?>)|?} text_or_callback_or_options
 * @param {?=} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
function toCanvas(canvasElement_or_text_or_canvas, text_or_callback_or_options, callback_or_options, callback) {}

/**
 * Returns a Data URI containing a representation of the QR Code image.
 * Returns a Data URI containing a representation of the QR Code image.
 * Returns a Data URI containing a representation of the QR Code image.
 * Returns a Data URI containing a representation of the QR Code image.
 * @param {!HTMLCanvasElement|(string|!Array<?>)} canvasElement_or_text
 * @param {(string|!Array<?>)|?} text_or_callback_or_options
 * @param {?=} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
function toDataURL(canvasElement_or_text, text_or_callback_or_options, callback_or_options, callback) {}

/**
 * Returns a string representation of the QR Code.
 * If choosen output format is svg it will returns a string containing xml code.
 * Returns a string representation of the QR Code.
 * If choosen output format is svg it will returns a string containing xml code.
 * @param {(string|!Array<?>)} text
 * @param {?} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
function toString(text, callback_or_options, callback) {}

/**
 * Saves QR Code to image file.
 * If options.type is not specified, the format will be guessed from file extension.
 * Recognized extensions are png, svg, txt.
 * Saves QR Code to image file.
 * If options.type is not specified, the format will be guessed from file extension.
 * Recognized extensions are png, svg, txt.
 * @param {string} path
 * @param {(string|!Array<?>)} text
 * @param {?} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
function toFile(path, text, callback_or_options, callback) {}

/**
 * Writes QR Code image to stream. Only works with png format for now.
 * Writes QR Code image to stream. Only works with png format for now.
 * @param {!internal.Writable} stream
 * @param {(string|!Array<?>)} text
 * @param {?} callback_or_options
 * @param {?=} callback
 * @return {void}
 */
function toFileStream(stream, text, callback_or_options, callback) {}