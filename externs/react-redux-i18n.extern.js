/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-redux-i18n/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "react-redux-i18n"
/** @const */
tsickle_declare_module.react_redux_i__n = {};

/* TODO: ImportDeclaration in tsickle_declare_module.react_redux_i__n */

/* TODO: ImportDeclaration in tsickle_declare_module.react_redux_i__n */
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_redux_i__n.I18n = function() {};

/**
 * @param {string} code
 * @param {?=} options
 * @return {string}
 */
tsickle_declare_module.react_redux_i__n.I18n.prototype.t = function(code, options) {};

/**
 * @param {number} timestamp
 * @param {?=} options
 * @return {string}
 */
tsickle_declare_module.react_redux_i__n.I18n.prototype.l = function(timestamp, options) {};
 /** @type {?} */
tsickle_declare_module.react_redux_i__n.I18n;

/** @typedef {(string|!Object<string,(string|?)>)} */
tsickle_declare_module.react_redux_i__n.SubTranslationObject;

/** @typedef {!Object<string,(string|!Object<string,(string|?)>)>} */
tsickle_declare_module.react_redux_i__n.TranslationObjects;

/** @typedef {function(?, function(): S): ?} */
tsickle_declare_module.react_redux_i__n.DispatchCallback;

/** @typedef {{translations: !Object<string,(string|!Object<string,(string|?)>)>, locale: string}} */
tsickle_declare_module.react_redux_i__n.I18nState;

/** @typedef {?} */
tsickle_declare_module.react_redux_i__n.TranslateProps;

/** @typedef {{value: (string|number), dateFormat: string, options: !Object}} */
tsickle_declare_module.react_redux_i__n.LocalizeProps;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.react_redux_i__n.Translate = function() {};
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.react_redux_i__n.Localize = function() {};

/**
 * Reducer
 * @param {?=} state
 * @param {?=} options
 * @return {?}
 */
tsickle_declare_module.react_redux_i__n.i18nReducer = function(state, options) {};

/**
 * Reducer init
 * @param {?} store
 * @return {void}
 */
tsickle_declare_module.react_redux_i__n.syncTranslationWithStore = function(store) {};

/**
 *  Redux Actions
 * @param {!Object<string,(string|!Object<string,(string|?)>)>} translationsObject
 * @return {function(?, function(): ?): ?}
 */
tsickle_declare_module.react_redux_i__n.loadTranslations = function(translationsObject) {};

/**
 * @param {string} locale
 * @return {function(?, function(): ?): ?}
 */
tsickle_declare_module.react_redux_i__n.setLocale = function(locale) {};