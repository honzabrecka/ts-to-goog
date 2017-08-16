/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/express-fileupload/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */
 /** @type {!fileUpload.FileArray} */
Express.Request.prototype.files;

/* TODO: ExportAssignment in  */

/**
 * @param {!fileUpload.Options=} options
 * @return {!e.RequestHandler}
 */
function fileUpload(options) {}
/**
 * @constructor
 * @struct
 */
fileUpload.FileArray = function() {};

/* TODO: IndexSignature: fileUpload */
/**
 * @record
 * @struct
 */
fileUpload.UploadedFile = function() {};
 /** @type {string} */
fileUpload.UploadedFile.prototype.name;
 /** @type {string} */
fileUpload.UploadedFile.prototype.encoding;
 /** @type {string} */
fileUpload.UploadedFile.prototype.mimetype;
 /** @type {?} */
fileUpload.UploadedFile.prototype.data;

/**
 * @param {string} path
 * @param {function(?): void} callback
 * @return {void}
 */
fileUpload.UploadedFile.prototype.mv = function(path, callback) {};
/**
 * @record
 * @struct
 */
fileUpload.Options = function() {};
 /** @type {boolean} */
fileUpload.Options.prototype.debug;
 /** @type {boolean} */
fileUpload.Options.prototype.safeFileNames;
 /** @type {(string|number|boolean)} */
fileUpload.Options.prototype.preserveExtension;

/* TODO: IndexSignature: fileUpload */