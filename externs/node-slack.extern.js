/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-slack/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {string} hookUrl
 * @param {!Slack.Option=} option
 */
function Slack(hookUrl, option) {}

/**
 * @param {!Slack.Message} message
 * @param {!Slack.SendCallback=} callback
 * @return {?|!request.Request}
 */
Slack.prototype.send = function(message, callback) {};

/**
 * @param {!Slack.Query} query
 * @param {!Slack.ResponseCallback=} callback
 * @return {!Slack.TextResponse}
 */
Slack.prototype.respond = function(query, callback) {};
/**
 * @record
 * @struct
 */
Slack.Option = function() {};
 /** @type {string} */
Slack.Option.prototype.proxy;
/**
 * @record
 * @struct
 */
Slack.Message = function() {};
 /** @type {string} */
Slack.Message.prototype.text;
 /** @type {string} */
Slack.Message.prototype.channel;
 /** @type {string} */
Slack.Message.prototype.username;
 /** @type {string} */
Slack.Message.prototype.icon_emoji;
 /** @type {!Array<?>} */
Slack.Message.prototype.attachments;
 /** @type {boolean} */
Slack.Message.prototype.unfurl_links;
 /** @type {number} */
Slack.Message.prototype.link_names;
/**
 * @record
 * @struct
 */
Slack.SendCallback = function() {};

/* TODO: CallSignature: Slack */
/**
 * @record
 * @struct
 */
Slack.Query = function() {};
 /** @type {string} */
Slack.Query.prototype.token;
 /** @type {string} */
Slack.Query.prototype.team_id;
 /** @type {string} */
Slack.Query.prototype.channel_id;
 /** @type {string} */
Slack.Query.prototype.channel_name;
 /** @type {number} */
Slack.Query.prototype.timestamp;
 /** @type {string} */
Slack.Query.prototype.user_id;
 /** @type {string} */
Slack.Query.prototype.user_name;
 /** @type {string} */
Slack.Query.prototype.text;
/**
 * @record
 * @struct
 */
Slack.TextResponse = function() {};
 /** @type {string} */
Slack.TextResponse.prototype.text;
/**
 * @record
 * @struct
 */
Slack.ResponseCallback = function() {};

/* TODO: CallSignature: Slack */

/* TODO: ExportAssignment in  */