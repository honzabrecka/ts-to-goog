/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-toastr/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.toastr = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastBaseConfig = function() {};
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.allowHtml;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.closeButton;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.closeHtml;
 /** @type {number} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.extendedTimeOut;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.messageClass;
 /** @type {function(boolean, !toastr.IToast): void} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.onHidden;
 /** @type {function(!toastr.IToast): void} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.onShown;
 /** @type {function(!toastr.IToast): void} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.onTap;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.progressBar;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.tapToDismiss;
 /** @type {{toast: string, progressbar: string}} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.templates;
 /** @type {number} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.timeOut;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.titleClass;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastBaseConfig.prototype.toastClass;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastContainerConfig = function() {};
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.autoDismiss;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.containerId;
 /** @type {number} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.maxOpened;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.newestOnTop;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.positionClass;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.preventDuplicates;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.preventOpenDuplicates;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastContainerConfig.prototype.target;
/**
 * @extends {toastr.IToastBaseConfig}
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastConfig = function() {};
 /** @type {{error: string, info: string, success: string, warning: string}} */
tsickle_declare_module.angular.toastr.IToastConfig.prototype.iconClasses;
/**
 * @extends {toastr.IToastContainerConfig}
 * @extends {toastr.IToastConfig}
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastrConfig = function() {};
/**
 * @extends {angular.IScope}
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastScope = function() {};
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastScope.prototype.message;
 /** @type {!toastr.IToastConfig} */
tsickle_declare_module.angular.toastr.IToastScope.prototype.options;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastScope.prototype.title;
 /** @type {number} */
tsickle_declare_module.angular.toastr.IToastScope.prototype.toastId;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastScope.prototype.toastType;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToast = function() {};
 /** @type {!angular.IAugmentedJQuery} */
tsickle_declare_module.angular.toastr.IToast.prototype.el;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToast.prototype.iconClass;
 /** @type {boolean} */
tsickle_declare_module.angular.toastr.IToast.prototype.isOpened;
 /** @type {!angular.IPromise<?>} */
tsickle_declare_module.angular.toastr.IToast.prototype.open;
 /** @type {!toastr.IToastScope} */
tsickle_declare_module.angular.toastr.IToast.prototype.scope;
 /** @type {number} */
tsickle_declare_module.angular.toastr.IToast.prototype.toastId;
/**
 * @extends {toastr.IToastBaseConfig}
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastOptions = function() {};
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastOptions.prototype.iconClass;
 /** @type {string} */
tsickle_declare_module.angular.toastr.IToastOptions.prototype.target;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.toastr.IToastrService = function() {};

/**
 * Return the number of active toasts in screen.
 * @return {number}
 */
tsickle_declare_module.angular.toastr.IToastrService.prototype.active = function() {};

/**
 * Remove toast from screen. If no toast is passed in, all toasts will be closed.
 * 
 * @param {!toastr.IToast=} toast
 * @return {void}
 */
tsickle_declare_module.angular.toastr.IToastrService.prototype.clear = function(toast) {};

/**
 * Create error toast notification message.
 * 
 * @param {string} message
 * @param {string=} title
 * @param {!toastr.IToastOptions=} options
 * @return {!toastr.IToast}
 */
tsickle_declare_module.angular.toastr.IToastrService.prototype.error = function(message, title, options) {};

/**
 * Create info toast notification message.
 * 
 * @param {string} message
 * @param {string=} title
 * @param {!toastr.IToastOptions=} options
 * @return {!toastr.IToast}
 */
tsickle_declare_module.angular.toastr.IToastrService.prototype.info = function(message, title, options) {};

/**
 * Create success toast notification message.
 * 
 * @param {string} message
 * @param {string=} title
 * @param {!toastr.IToastOptions=} options
 * @return {!toastr.IToast}
 */
tsickle_declare_module.angular.toastr.IToastrService.prototype.success = function(message, title, options) {};

/**
 * Create warning toast notification message.
 * 
 * @param {string} message
 * @param {string=} title
 * @param {!toastr.IToastOptions=} options
 * @return {!toastr.IToast}
 */
tsickle_declare_module.angular.toastr.IToastrService.prototype.warning = function(message, title, options) {};