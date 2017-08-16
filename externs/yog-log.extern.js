/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/yog-log/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function LEVELS() {}

/* TODO: PropertySignature: 0 */

/* TODO: PropertySignature: 3 */

/* TODO: PropertySignature: 1 */

/* TODO: PropertySignature: 2 */

/* TODO: PropertySignature: 4 */

/* TODO: PropertySignature: 8 */

/* TODO: PropertySignature: 16 */

/** @typedef {(number|string)} */
var LevelInt;

/** @typedef {string} */
var LevelName;

/** @typedef {boolean} */
var LogReturn;
/**
 * @record
 * @struct
 */
function LogConfig() {}
 /** @type {string} */
LogConfig.prototype.LogIdName;
 /** @type {string} */
LogConfig.prototype.data_path;
 /** @type {string} */
LogConfig.prototype.log_path;
 /** @type {number} */
LogConfig.prototype.debug;
 /** @type {number} */
LogConfig.prototype.intLevel;
 /** @type {number} */
LogConfig.prototype.auto_rotate;
 /** @type {number} */
LogConfig.prototype.use_sub_dir;
 /** @type {boolean} */
LogConfig.prototype.IS_ODP;
 /** @type {number} */
LogConfig.prototype.IS_OMP;
 /** @type {string} */
LogConfig.prototype.access_log_path;
 /** @type {string} */
LogConfig.prototype.access_error_log_path;
 /** @type {string} */
LogConfig.prototype.access;
 /** @type {string} */
LogConfig.prototype.format_wf;
/**
 * @record
 * @struct
 */
function WriteLogConfig() {}
 /** @type {string} */
WriteLogConfig.prototype.filename_suffix;
 /** @type {number} */
WriteLogConfig.prototype.errno;
 /** @type {boolean} */
WriteLogConfig.prototype.escape_msg;
/**
 * @record
 * @struct
 */
function LogInfo() {}
 /** @type {string} */
LogInfo.prototype.msg;
 /** @type {!Object} */
LogInfo.prototype.custom;

/** @typedef {(string|?|!Error)} */
var LogInput;

/**
 * @param {?=} config
 * @return {function(!e.Request, !e.Response, !e.NextFunction): ?}
 */
function yog_log(config) {}

/**
 * @constructor
 * @struct
 * @param {?} opts
 * @param {!e.Request} req
 */
yog_log.Logger = function(opts, req) {};

/**
 * @param {!Object} destination
 * @param {!Object} source
 * @return {!Object}
 */
yog_log.Logger.prototype.extend = function(destination, source) {};

/**
 * @param {string} level
 * @param {(string|!Object)} obj
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.log = function(level, obj) {};

/**
 * @param {(string|?|!Error)} info
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.notice = function(info) {};

/**
 * @param {(string|?|!Error)} info
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.debug = function(info) {};

/**
 * @param {(string|?|!Error)} info
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.fatal = function(info) {};

/**
 * @param {(string|?|!Error)} info
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.trace = function(info) {};

/**
 * @param {(string|?|!Error)} info
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.warning = function(info) {};

/**
 * @param {string} name
 * @return {(string|boolean)}
 */
yog_log.Logger.prototype.getCookie = function(name) {};

/**
 * @param {(number|string)} intLevel
 * @return {string}
 */
yog_log.Logger.prototype.getLogFile = function(intLevel) {};

/**
 * @param {string} level
 * @return {(string|boolean)}
 */
yog_log.Logger.prototype.getLogFormat = function(level) {};

/**
 * @param {!e.Request} req
 * @param {string} logIDName
 * @return {string}
 */
yog_log.Logger.prototype.getLogID = function(req, logIDName) {};

/**
 * @param {string} level
 * @return {(number|string)}
 */
yog_log.Logger.prototype.getLogLevelInt = function(level) {};

/**
 * @return {string}
 */
yog_log.Logger.prototype.getLogPrefix = function() {};

/**
 * @param {string} format
 * @return {string}
 */
yog_log.Logger.prototype.getLogString = function(format) {};

/**
 * @param {string} name
 * @return {string}
 */
yog_log.Logger.prototype.getParams = function(name) {};

/**
 * @param {(string|?)} data
 * @param {number} len
 * @return {string}
 */
yog_log.Logger.prototype.md5 = function(data, len) {};

/**
 * @param {!Object} obj
 * @return {void}
 */
yog_log.Logger.prototype.parseCustomLog = function(obj) {};

/**
 * @param {string} format
 * @return {string}
 */
yog_log.Logger.prototype.parseFormat = function(format) {};

/**
 * @param {!e.Request} req
 * @param {!e.Response} res
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.parseReqParams = function(req, res) {};

/**
 * @param {(?|!Error)} info
 * @return {void}
 */
yog_log.Logger.prototype.parseStackInfo = function(info) {};

/**
 * @param {string} name
 * @param {?} value
 * @return {void}
 */
yog_log.Logger.prototype.setParams = function(name, value) {};

/**
 * @param {(number|string)} intLevel
 * @param {?} options
 * @param {string} log_format
 * @return {(boolean|void)}
 */
yog_log.Logger.prototype.writeLog = function(intLevel, options, log_format) {};

/**
 * @param {?=} config
 * @return {!yog_log.Logger}
 */
yog_log.getLogger = function(config) {};

/* TODO: ExportAssignment in  */