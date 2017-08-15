/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-hotkeys/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "angular"
/** @const */
tsickle_declare_module.angular.hotkeys = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider = function() {};
 /** @type {string} */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.template;
 /** @type {string} */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.templateTitle;
 /** @type {boolean} */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.includeCheatSheet;
 /** @type {string} */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.cheatSheetHotkey;
 /** @type {string} */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.cheatSheetDescription;

/**
 * @param {(string|!Array<string>)|!hotkeys.Hotkey} combo_or_hotkeyObj
 * @param {function(!Event, !hotkeys.Hotkey): void|string=} callback_or_description
 * @param {string|function(!Event, !hotkeys.Hotkey): void=} action_or_callback
 * @param {!Array<string>|string=} allowIn_or_action
 * @param {boolean|!Array<string>=} persistent_or_allowIn
 * @param {boolean=} persistent
 * @return {!hotkeys.Hotkey}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.add = function(combo_or_hotkeyObj, callback_or_description, action_or_callback, allowIn_or_action, persistent_or_allowIn, persistent) {};

/**
 * @param {!angular.IScope} scope
 * @return {!hotkeys.HotkeysProviderChained}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.bindTo = function(scope) {};

/**
 * @param {(string|!Array<string>)|!hotkeys.Hotkey} combo_or_hotkeyObj
 * @return {void}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.del = function(combo_or_hotkeyObj) {};

/**
 * @param {(string|!Array<string>)} combo
 * @return {!hotkeys.Hotkey}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.get = function(combo) {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.toggleCheatSheet = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProvider.prototype.purgeHotkeys = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.hotkeys.HotkeysProviderChained = function() {};

/**
 * @param {(string|!Array<string>)|!hotkeys.Hotkey} combo_or_hotkeyObj
 * @param {string=} description
 * @param {function(!Event, !hotkeys.Hotkey): void=} callback
 * @return {!hotkeys.HotkeysProviderChained}
 */
tsickle_declare_module.angular.hotkeys.HotkeysProviderChained.prototype.add = function(combo_or_hotkeyObj, description, callback) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.angular.hotkeys.Hotkey = function() {};
 /** @type {(string|!Array<string>)} */
tsickle_declare_module.angular.hotkeys.Hotkey.prototype.combo;
 /** @type {string} */
tsickle_declare_module.angular.hotkeys.Hotkey.prototype.description;
 /** @type {function(!Event, !hotkeys.Hotkey): void} */
tsickle_declare_module.angular.hotkeys.Hotkey.prototype.callback;
 /** @type {string} */
tsickle_declare_module.angular.hotkeys.Hotkey.prototype.action;
 /** @type {!Array<string>} */
tsickle_declare_module.angular.hotkeys.Hotkey.prototype.allowIn;
 /** @type {boolean} */
tsickle_declare_module.angular.hotkeys.Hotkey.prototype.persistent;