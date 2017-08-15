/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/css-font-loading-module/index.d.ts:

/** @typedef {string} */
var FontFaceLoadStatus;

/** @typedef {string} */
var FontFaceSetLoadStatus;

/** @typedef {(!ArrayBuffer|!ArrayBufferView)} */
var BinaryData;

/** @typedef {?} */
var EventHandler;
/**
 * @record
 * @struct
 */
function FontFaceDescriptors() {}
 /** @type {string} */
FontFaceDescriptors.prototype.style;
 /** @type {string} */
FontFaceDescriptors.prototype.weight;
 /** @type {string} */
FontFaceDescriptors.prototype.stretch;
 /** @type {string} */
FontFaceDescriptors.prototype.unicodeRange;
 /** @type {string} */
FontFaceDescriptors.prototype.variant;
 /** @type {string} */
FontFaceDescriptors.prototype.featureSettings;
/**
 * @record
 * @struct
 */
function FontFaceSet() {}
 /** @type {?} */
FontFaceSet.prototype.onloading;
 /** @type {?} */
FontFaceSet.prototype.onloadingdone;
 /** @type {?} */
FontFaceSet.prototype.onloadingerror;
 /** @type {!Promise<?>} */
FontFaceSet.prototype.ready;
 /** @type {string} */
FontFaceSet.prototype.status;

/**
 * @param {string} font
 * @param {string=} text
 * @return {!Promise<!Array<!FontFace>>}
 */
FontFaceSet.prototype.load = function(font, text) {};

/**
 * @param {string} font
 * @param {string=} text
 * @return {boolean}
 */
FontFaceSet.prototype.check = function(font, text) {};

/**
 * @constructor
 * @struct
 * @param {string} family
 * @param {(string|!ArrayBuffer|!ArrayBufferView)} source
 * @param {?=} descriptors
 */
function FontFace(family, source, descriptors) {}
 /** @type {string} */
FontFace.prototype.family;
 /** @type {string} */
FontFace.prototype.style;
 /** @type {string} */
FontFace.prototype.weight;
 /** @type {string} */
FontFace.prototype.stretch;
 /** @type {string} */
FontFace.prototype.unicodeRange;
 /** @type {string} */
FontFace.prototype.variant;
 /** @type {string} */
FontFace.prototype.featureSettings;
 /** @type {string} */
FontFace.prototype.status;
 /** @type {!Promise<!FontFace>} */
FontFace.prototype.loaded;

/**
 * @return {!Promise<!FontFace>}
 */
FontFace.prototype.load = function() {};
 /** @type {?} */
Document.prototype.fonts;