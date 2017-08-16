/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gandi-livedns/index.d.ts:
/**
 * @record
 * @struct
 */
function Zone() {}
 /** @type {string} */
Zone.prototype.uuid;
 /** @type {string} */
Zone.prototype.name;
 /** @type {string} */
Zone.prototype.primary_ns;
 /** @type {string} */
Zone.prototype.apex_alias;
 /** @type {string} */
Zone.prototype.email;
 /** @type {number} */
Zone.prototype.serial;
 /** @type {number} */
Zone.prototype.refresh;
 /** @type {number} */
Zone.prototype.retry;
 /** @type {number} */
Zone.prototype.expire;
 /** @type {number} */
Zone.prototype.minimum;
/**
 * @record
 * @struct
 */
function ZoneRecord() {}
 /** @type {string} */
ZoneRecord.prototype.rrset_name;
 /** @type {string} */
ZoneRecord.prototype.rrset_type;
 /** @type {number} */
ZoneRecord.prototype.rrset_ttl;
 /** @type {!Array<string>} */
ZoneRecord.prototype.rrset_values;
/**
 * @record
 * @struct
 */
function Domain() {}
 /** @type {string} */
Domain.prototype.fqdn;
 /** @type {string} */
Domain.prototype.zone_uuid;
/**
 * @record
 * @struct
 */
function Snapshot() {}
 /** @type {number} */
Snapshot.prototype.serial;
 /** @type {string} */
Snapshot.prototype.zone_uuid;
 /** @type {string} */
Snapshot.prototype.change_time;
 /** @type {!Array<!ZoneRecord>} */
Snapshot.prototype.zone_data;