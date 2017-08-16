/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/intro.js/index.d.ts:
/** @const */
var IntroJs = {};
/**
 * @record
 * @struct
 */
IntroJs.Step = function() {};
 /** @type {string} */
IntroJs.Step.prototype.intro;
 /** @type {(string|!HTMLElement|!Element)} */
IntroJs.Step.prototype.element;
 /** @type {string} */
IntroJs.Step.prototype.position;
/**
 * @record
 * @struct
 */
IntroJs.Hint = function() {};
 /** @type {string} */
IntroJs.Hint.prototype.hint;
 /** @type {(string|!HTMLElement|!Element)} */
IntroJs.Hint.prototype.element;
 /** @type {string} */
IntroJs.Hint.prototype.hintPosition;
/**
 * @record
 * @struct
 */
IntroJs.Options = function() {};
 /** @type {string} */
IntroJs.Options.prototype.nextLabel;
 /** @type {string} */
IntroJs.Options.prototype.prevLabel;
 /** @type {string} */
IntroJs.Options.prototype.skipLabel;
 /** @type {string} */
IntroJs.Options.prototype.doneLabel;
 /** @type {boolean} */
IntroJs.Options.prototype.hidePrev;
 /** @type {boolean} */
IntroJs.Options.prototype.hideNext;
 /** @type {string} */
IntroJs.Options.prototype.tooltipPosition;
 /** @type {string} */
IntroJs.Options.prototype.tooltipClass;
 /** @type {string} */
IntroJs.Options.prototype.highlightClass;
 /** @type {boolean} */
IntroJs.Options.prototype.exitOnEsc;
 /** @type {boolean} */
IntroJs.Options.prototype.exitOnOverlayClick;
 /** @type {boolean} */
IntroJs.Options.prototype.showStepNumbers;
 /** @type {boolean} */
IntroJs.Options.prototype.keyboardNavigation;
 /** @type {boolean} */
IntroJs.Options.prototype.showButtons;
 /** @type {boolean} */
IntroJs.Options.prototype.showBullets;
 /** @type {boolean} */
IntroJs.Options.prototype.showProgress;
 /** @type {boolean} */
IntroJs.Options.prototype.scrollToElement;
 /** @type {number} */
IntroJs.Options.prototype.overlayOpacity;
 /** @type {number} */
IntroJs.Options.prototype.scrollPadding;
 /** @type {!Array<string>} */
IntroJs.Options.prototype.positionPrecedence;
 /** @type {boolean} */
IntroJs.Options.prototype.disableInteraction;
 /** @type {string} */
IntroJs.Options.prototype.hintPosition;
 /** @type {string} */
IntroJs.Options.prototype.hintButtonLabel;
 /** @type {boolean} */
IntroJs.Options.prototype.hintAnimation;
 /** @type {!Array<!IntroJs.Step>} */
IntroJs.Options.prototype.steps;
 /** @type {!Array<!IntroJs.Hint>} */
IntroJs.Options.prototype.hints;
/**
 * @record
 * @struct
 */
IntroJs.IntroJs = function() {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.start = function() {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.exit = function() {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.clone = function() {};

/**
 * @param {number} stepId
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.goToStepNumber = function(stepId) {};

/**
 * @param {number} step
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.goToStep = function(step) {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.nextStep = function() {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.previousStep = function() {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.refresh = function() {};

/**
 * @param {string} option
 * @param {(string|number|boolean)} value
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.setOption = function(option, value) {};

/**
 * @param {!IntroJs.Options} options
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.setOptions = function(options) {};

/**
 * @param {!Function} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onexit = function(callback) {};

/**
 * @param {function(!HTMLElement): ?} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onbeforechange = function(callback) {};

/**
 * @param {function(!HTMLElement): ?} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onafterchange = function(callback) {};

/**
 * @param {function(!HTMLElement): ?} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onchange = function(callback) {};

/**
 * @param {!Function} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.oncomplete = function(callback) {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.addHints = function() {};

/**
 * @param {number} stepId
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.showHint = function(stepId) {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.showHints = function() {};

/**
 * @param {number} stepId
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.hideHint = function(stepId) {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.hideHints = function() {};

/**
 * @param {number} stepId
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.removeHint = function(stepId) {};

/**
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.removeHints = function() {};

/**
 * @param {!Function} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onhintsadded = function(callback) {};

/**
 * @param {function(!HTMLElement, !IntroJs.Step, number): ?} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onhintclick = function(callback) {};

/**
 * @param {function(number): ?} callback
 * @return {!IntroJs.IntroJs}
 */
IntroJs.IntroJs.prototype.onhintclose = function(callback) {};
/**
 * @record
 * @struct
 */
IntroJs.Factory = function() {};

/* TODO: CallSignature: IntroJs */

/* TODO: CallSignature: IntroJs */

/* TODO: CallSignature: IntroJs */
 /** @type {!IntroJs.Factory} */
var introJs;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "intro.js"
/** @const */
tsickle_declare_module.intro_js = {};

/* TODO: ExportAssignment in tsickle_declare_module.intro_js */