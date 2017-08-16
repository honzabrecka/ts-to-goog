/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/imagesloaded/index.d.ts:
/** @const */
var ImagesLoaded = {};

/** @typedef {(string|!Element|!NodeList|!Array<!Element>)} */
ImagesLoaded.ElementSelector;
/**
 * @record
 * @struct
 */
ImagesLoaded.LoadingImage = function() {};
 /** @type {!HTMLImageElement} */
ImagesLoaded.LoadingImage.prototype.img;
 /** @type {boolean} */
ImagesLoaded.LoadingImage.prototype.isLoaded;
/**
 * @record
 * @struct
 */
ImagesLoaded.ImagesLoadedCallback = function() {};

/* TODO: CallSignature: ImagesLoaded */
/**
 * @record
 * @struct
 */
ImagesLoaded.ImagesLoadedListener = function() {};

/* TODO: CallSignature: ImagesLoaded */
/**
 * @record
 * @struct
 */
ImagesLoaded.ImagesLoaded = function() {};

/* TODO: ConstructSignature: ImagesLoaded */
 /** @type {!Array<!ImagesLoaded.LoadingImage>} */
ImagesLoaded.ImagesLoaded.prototype.images;

/**
 * @param {string} event
 * @param {!ImagesLoaded.ImagesLoadedListener} listener
 * @return {void}
 */
ImagesLoaded.ImagesLoaded.prototype.on = function(event, listener) {};

/**
 * @param {string} event
 * @param {!ImagesLoaded.ImagesLoadedListener} listener
 * @return {void}
 */
ImagesLoaded.ImagesLoaded.prototype.off = function(event, listener) {};

/**
 * @param {string} event
 * @param {!ImagesLoaded.ImagesLoadedListener} listener
 * @return {void}
 */
ImagesLoaded.ImagesLoaded.prototype.once = function(event, listener) {};
/**
 * @record
 * @struct
 */
ImagesLoaded.ImagesLoadedOptions = function() {};
 /** @type {(string|boolean)} */
ImagesLoaded.ImagesLoadedOptions.prototype.background;
/**
 * @record
 * @struct
 */
ImagesLoaded.ImagesLoadedConstructor = function() {};

/* TODO: CallSignature: ImagesLoaded */

/* TODO: CallSignature: ImagesLoaded */
 /** @type {!ImagesLoaded.ImagesLoadedConstructor} */
var imagesLoaded;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "imagesloaded"
/** @const */
tsickle_declare_module.imagesloaded = {};

/* TODO: ExportAssignment in tsickle_declare_module.imagesloaded */

/**
 * @param {!ImagesLoaded.ImagesLoadedCallback=} callback
 * @return {!JQueryDeferred<!ImagesLoaded.ImagesLoaded>}
 */
JQuery.prototype.imagesLoaded = function(callback) {};