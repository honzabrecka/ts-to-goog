/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ng-notify/index.d.ts:
/** @const */
var ngNotify = {};
/**
 * @record
 * @struct
 */
ngNotify.IUserOptions = function() {};
 /** @type {string} */
ngNotify.IUserOptions.prototype.type;
 /** @type {string} */
ngNotify.IUserOptions.prototype.theme;
 /** @type {string} */
ngNotify.IUserOptions.prototype.position;
 /** @type {number} */
ngNotify.IUserOptions.prototype.duration;
 /** @type {boolean} */
ngNotify.IUserOptions.prototype.sticky;
 /** @type {boolean} */
ngNotify.IUserOptions.prototype.button;
 /** @type {boolean} */
ngNotify.IUserOptions.prototype.html;
/**
 * @record
 * @struct
 */
ngNotify.INotifyService = function() {};

/**
 * Allows to create a whole new set of styles for each notification type.
 * @param {string} themeName The name used when setting the theme in the config object.
 * @param {string} className The class used to target this theme in the stylesheet.
 * @return {void}
 */
ngNotify.INotifyService.prototype.addTheme = function(themeName, className) {};

/**
 * Allows to create a new type of notification to use in their app.
 * @param {string} typeName The name used to trigger this notification type in the set method.
 * @param {string} className The class used to target this type in the stylesheet.
 * @return {void}
 */
ngNotify.INotifyService.prototype.addType = function(typeName, className) {};

/**
 * Sets default settings for all notifications to take into account when displaying.
 * @param {!ngNotify.IUserOptions} userOptions Notification configuration object
 * @return {void}
 */
ngNotify.INotifyService.prototype.config = function(userOptions) {};

/**
 * Manually dismisses any sticky notifications that may still be set.
 * @return {void}
 */
ngNotify.INotifyService.prototype.dismiss = function() {};

/**
 * Displays a notification message.
 * Displays a notification message and sets the type for this one notification.
 * displays a notification message and sets the formatting/behavioral options for this one notification.
 * @param {string} message A message text to display.
 * @param {string|!ngNotify.IUserOptions=} type_or_userOptions The type of the notification. / Notification configuration object.
 * @return {void}
 */
ngNotify.INotifyService.prototype.set = function(message, type_or_userOptions) {};