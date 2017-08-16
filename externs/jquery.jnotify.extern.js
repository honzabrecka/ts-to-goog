/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.jnotify/index.d.ts:
/**
 * @record
 * @struct
 */
function JNotifyInitOptions() {}
 /** @type {boolean} */
JNotifyInitOptions.prototype.oneAtTime;
 /** @type {string} */
JNotifyInitOptions.prototype.appendType;
/**
 * @record
 * @struct
 */
function JNotifyOptions() {}
 /** @type {string} */
JNotifyOptions.prototype.text;
 /** @type {string} */
JNotifyOptions.prototype.type;
 /** @type {boolean} */
JNotifyOptions.prototype.showIcon;
 /** @type {boolean} */
JNotifyOptions.prototype.permanent;
 /** @type {number} */
JNotifyOptions.prototype.disappearTime;

/**
 * @param {!JNotifyInitOptions=} options
 * @return {?}
 */
JQuery.prototype.jnotifyInizialize = function(options) {};

/**
 * @param {!JNotifyOptions=} options
 * @return {?}
 */
JQuery.prototype.jnotifyAddMessage = function(options) {};