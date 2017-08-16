/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.blockui/index.d.ts:
/**
 * @record
 * @struct
 */
function JQBlockUIOptions() {}
 /** @type {?} */
JQBlockUIOptions.prototype.message;
 /** @type {string} */
JQBlockUIOptions.prototype.title;
 /** @type {boolean} */
JQBlockUIOptions.prototype.draggable;
 /** @type {boolean} */
JQBlockUIOptions.prototype.theme;
 /** @type {?} */
JQBlockUIOptions.prototype.css;
 /** @type {?} */
JQBlockUIOptions.prototype.themedCSS;
 /** @type {?} */
JQBlockUIOptions.prototype.overlayCSS;
 /** @type {string} */
JQBlockUIOptions.prototype.cursorReset;
 /** @type {?} */
JQBlockUIOptions.prototype.growlCSS;
 /** @type {string} */
JQBlockUIOptions.prototype.iframeSrc;
 /** @type {boolean} */
JQBlockUIOptions.prototype.forceIframe;
 /** @type {number} */
JQBlockUIOptions.prototype.baseZ;
 /** @type {boolean} */
JQBlockUIOptions.prototype.centerX;
 /** @type {boolean} */
JQBlockUIOptions.prototype.centerY;
 /** @type {boolean} */
JQBlockUIOptions.prototype.allowBodyStretch;
 /** @type {boolean} */
JQBlockUIOptions.prototype.bindEvents;
 /** @type {boolean} */
JQBlockUIOptions.prototype.constrainTabKey;
 /** @type {number} */
JQBlockUIOptions.prototype.fadeIn;
 /** @type {number} */
JQBlockUIOptions.prototype.fadeOut;
 /** @type {number} */
JQBlockUIOptions.prototype.timeout;
 /** @type {boolean} */
JQBlockUIOptions.prototype.showOverlay;
 /** @type {boolean} */
JQBlockUIOptions.prototype.focusInput;
 /** @type {function(): void} */
JQBlockUIOptions.prototype.onBlock;
 /** @type {function(?, ?): void} */
JQBlockUIOptions.prototype.onUnblock;
 /** @type {number} */
JQBlockUIOptions.prototype.quirksmodeOffsetHack;
 /** @type {string} */
JQBlockUIOptions.prototype.blockMsgClass;
 /** @type {boolean} */
JQBlockUIOptions.prototype.ignoreIfBlocked;
/**
 * @record
 * @struct
 */
function JQBlockUIStatic() {}
 /** @type {!JQBlockUIOptions} */
JQBlockUIStatic.prototype.defaults;

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
 /** @type {!JQBlockUIStatic} */
JQueryStatic.prototype.blockUI;
 /** @type {!JQBlockUIStatic} */
JQueryStatic.prototype.unblockUI;

/**
 * block the element(s)
 * @param {!JQBlockUIOptions=} option
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.block = function(option) {};

/**
 * unblock the element(s)
 * @param {!JQBlockUIOptions=} option
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.unblock = function(option) {};