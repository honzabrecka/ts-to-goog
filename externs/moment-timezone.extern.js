/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/moment-timezone/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "moment"
/**
 * @record
 * @struct
 */
tsickle_declare_module.moment.MomentZone = function() {};
 /** @type {string} */
tsickle_declare_module.moment.MomentZone.prototype.name;
 /** @type {!Array<string>} */
tsickle_declare_module.moment.MomentZone.prototype.abbrs;
 /** @type {!Array<number>} */
tsickle_declare_module.moment.MomentZone.prototype.untils;
 /** @type {!Array<number>} */
tsickle_declare_module.moment.MomentZone.prototype.offsets;

/**
 * @param {number} timestamp
 * @return {string}
 */
tsickle_declare_module.moment.MomentZone.prototype.abbr = function(timestamp) {};

/**
 * @param {number} timestamp
 * @return {number}
 */
tsickle_declare_module.moment.MomentZone.prototype.offset = function(timestamp) {};

/**
 * @param {number} timestamp
 * @return {number}
 */
tsickle_declare_module.moment.MomentZone.prototype.parse = function(timestamp) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.moment.MomentTimezone = function() {};

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/* TODO: CallSignature: tsickle_declare_module.moment */

/**
 * @param {string} timezone
 * @return {!MomentZone}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.zone = function(timezone) {};

/**
 * @param {string|!Array<string>} packedZoneString
 * @return {void}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.add = function(packedZoneString) {};

/**
 * @param {string|!Array<string>} packedLinkString
 * @return {void}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.link = function(packedLinkString) {};

/**
 * @param {{version: string, links: !Array<string>, zones: !Array<string>}} data
 * @return {void}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.load = function(data) {};

/**
 * @return {!Array<string>}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.names = function() {};

/**
 * @return {string}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.guess = function() {};

/**
 * @param {string} timezone
 * @return {void}
 */
tsickle_declare_module.moment.MomentTimezone.prototype.setDefault = function(timezone) {};

/**
 * @param {string=} timezone
 * @return {string|!moment.Moment}
 */
tsickle_declare_module.moment.Moment.prototype.tz = function(timezone) {};

/**
 * @return {string}
 */
tsickle_declare_module.moment.Moment.prototype.zoneAbbr = function() {};

/**
 * @return {string}
 */
tsickle_declare_module.moment.Moment.prototype.zoneName = function() {};
 /** @type {!MomentTimezone} */
tsickle_declare_module.moment.tz;