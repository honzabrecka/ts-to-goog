/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-notifications/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.notifications = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.notifications.IAnimation = function() {};
 /** @type {number} */
tsickle_declare_module.angular.notifications.IAnimation.prototype.duration;
 /** @type {boolean} */
tsickle_declare_module.angular.notifications.IAnimation.prototype.enabled;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.notifications.ISettings = function() {};
 /** @type {!notifications.IAnimation} */
tsickle_declare_module.angular.notifications.ISettings.prototype.info;
 /** @type {!notifications.IAnimation} */
tsickle_declare_module.angular.notifications.ISettings.prototype.warning;
 /** @type {!notifications.IAnimation} */
tsickle_declare_module.angular.notifications.ISettings.prototype.error;
 /** @type {!notifications.IAnimation} */
tsickle_declare_module.angular.notifications.ISettings.prototype.success;
 /** @type {!notifications.IAnimation} */
tsickle_declare_module.angular.notifications.ISettings.prototype.progress;
 /** @type {!notifications.IAnimation} */
tsickle_declare_module.angular.notifications.ISettings.prototype.custom;
 /** @type {boolean} */
tsickle_declare_module.angular.notifications.ISettings.prototype.details;
 /** @type {boolean} */
tsickle_declare_module.angular.notifications.ISettings.prototype.localStorage;
 /** @type {boolean} */
tsickle_declare_module.angular.notifications.ISettings.prototype.html5Mode;
 /** @type {string} */
tsickle_declare_module.angular.notifications.ISettings.prototype.html5DefaultIcon;
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.notifications.INotification = function() {};
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.type;
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.image;
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.icon;
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.title;
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.content;
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.timestamp;
 /** @type {string} */
tsickle_declare_module.angular.notifications.INotification.prototype.userData;
/**
 * @extends {angular.IModule}
 * @record
 * @struct
 */
tsickle_declare_module.angular.notifications.INotificationFactory = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.disableHtml5Mode = function() {};

/**
 * @param {string} notificationType
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.disableType = function(notificationType) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.enableHtml5Mode = function() {};

/**
 * @param {string} notificationType
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.enableType = function(notificationType) {};

/**
 * @return {!notifications.ISettings}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.getSettings = function() {};

/**
 * @param {string} notificationType
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.toggleType = function(notificationType) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.toggleHtml5Mode = function() {};

/**
 * @return {boolean}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.requestHtml5ModePermissions = function() {};

/**
 * @return {!Array<!notifications.INotification>}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.getAll = function() {};

/**
 * @return {!Array<!notifications.INotification>}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.getQueue = function() {};

/**
 * @param {string} title
 * @param {string=} content
 * @param {?=} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.info = function(title, content, userData) {};

/**
 * @param {string} title
 * @param {string=} content
 * @param {?=} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.error = function(title, content, userData) {};

/**
 * @param {string} title
 * @param {string=} content
 * @param {?=} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.success = function(title, content, userData) {};

/**
 * @param {string} title
 * @param {string=} content
 * @param {?=} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.warning = function(title, content, userData) {};

/**
 * @param {string} type
 * @param {string} icon
 * @param {string} title
 * @param {string} content
 * @param {?} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.awesomeNotify = function(type, icon, title, content, userData) {};

/**
 * @param {string} image
 * @param {string} title
 * @param {string} content
 * @param {?} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.notify = function(image, title, content, userData) {};

/**
 * @param {string} type
 * @param {string} image
 * @param {string} icon
 * @param {string} title
 * @param {string} content
 * @param {?} userData
 * @return {!notifications.INotification}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.makeNotification = function(type, image, icon, title, content, userData) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.save = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.restore = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.notifications.INotificationFactory.prototype.clear = function() {};