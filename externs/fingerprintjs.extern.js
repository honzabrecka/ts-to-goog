/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fingerprintjs/index.d.ts:
/** @const */
var FingerprintJs = {};
/**
 * @record
 * @struct
 */
FingerprintJs.FingerprintStatic = function() {};

/* TODO: ConstructSignature: FingerprintJs */

/* TODO: ConstructSignature: FingerprintJs */

/* TODO: ConstructSignature: FingerprintJs */
/**
 * @record
 * @struct
 */
FingerprintJs.Fingerprint = function() {};

/**
 * Generate fingerprint number.
 * @return {number}
 */
FingerprintJs.Fingerprint.prototype.get = function() {};

/**
 * Generate fingerprint number using Murmur hashing.
 * @param {string} key ASCII only
 * @param {number} seed Positive integer only
 * @return {number}
 */
FingerprintJs.Fingerprint.prototype.murmurhash3_32_gc = function(key, seed) {};

/**
 * Check whether or not the browser has local storage.
 * @return {boolean}
 */
FingerprintJs.Fingerprint.prototype.hasLocalStorage = function() {};

/**
 * Check whether or not the browser has session storage.
 * @return {boolean}
 */
FingerprintJs.Fingerprint.prototype.hasSessionStorage = function() {};

/**
 * Check whether or not the browser supports canvas.
 * @return {boolean}
 */
FingerprintJs.Fingerprint.prototype.isCanvasSupported = function() {};

/**
 * Check whether or not the browser is IE.
 * @return {boolean}
 */
FingerprintJs.Fingerprint.prototype.isIE = function() {};

/**
 * Get plugins string.
 * @return {string}
 */
FingerprintJs.Fingerprint.prototype.getPluginsString = function() {};

/**
 * Get plugins string from navigator plugins.
 * @return {string}
 */
FingerprintJs.Fingerprint.prototype.getRegularPluginsString = function() {};

/**
 * Get plugins string from ActiveXObject.
 * @return {string}
 */
FingerprintJs.Fingerprint.prototype.getIEPluginsString = function() {};

/**
 * Get screen height and width.
 * @return {!Array<number>}
 */
FingerprintJs.Fingerprint.prototype.getScreenResolution = function() {};

/**
 * Get canvas data url string.
 * @return {string}
 */
FingerprintJs.Fingerprint.prototype.getCanvasFingerprint = function() {};
/**
 * @record
 * @struct
 */
FingerprintJs.FingerprintOption = function() {};
 /** @type {boolean} */
FingerprintJs.FingerprintOption.prototype.canvas;
 /** @type {boolean} */
FingerprintJs.FingerprintOption.prototype.screen_resolution;
 /** @type {boolean} */
FingerprintJs.FingerprintOption.prototype.ie_activex;
 /** @type {function(string, number): number} */
FingerprintJs.FingerprintOption.prototype.hasher;
 /** @type {!FingerprintJs.FingerprintStatic} */
var Fingerprint;