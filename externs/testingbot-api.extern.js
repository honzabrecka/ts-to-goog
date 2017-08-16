/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/testingbot-api/index.d.ts:
/** @const */
var TestingBot = {};

/** @typedef {string} */
TestingBot.BrowserType;

/** @typedef {(boolean|number)} */
TestingBot.TestSuccess;
/**
 * @record
 * @struct
 */
TestingBot.TestingBotOptions = function() {};
 /** @type {string} */
TestingBot.TestingBotOptions.prototype.api_key;
 /** @type {string} */
TestingBot.TestingBotOptions.prototype.api_secret;
/**
 * @record
 * @struct
 */
TestingBot.UserInfo = function() {};
 /** @type {string} */
TestingBot.UserInfo.prototype.first_name;
 /** @type {string} */
TestingBot.UserInfo.prototype.last_name;
 /** @type {string} */
TestingBot.UserInfo.prototype.email;
/**
 * @record
 * @struct
 */
TestingBot.TestData = function() {};

/* TODO: PropertySignature: TestingBot.'test[success]' */

/* TODO: PropertySignature: TestingBot.'test[status_message]' */

/* TODO: PropertySignature: TestingBot.'test[name]' */

/* TODO: PropertySignature: TestingBot.'test[extra]' */
 /** @type {string} */
TestingBot.TestData.prototype.build;
 /** @type {string} */
TestingBot.TestData.prototype.groups;
/**
 * @record
 * @struct
 */
TestingBot.TestLabData = function() {};

/* TODO: PropertySignature: TestingBot.'test[url]' */

/* TODO: PropertySignature: TestingBot.'test[name]' */

/* TODO: PropertySignature: TestingBot.'test[cron]' */

/* TODO: PropertySignature: TestingBot.'test[enabled]' */
/**
 * @record
 * @struct
 */
TestingBot.TestingBot = function() {};

/**
 * @param {string} testID
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.getTestDetails = function(testID, callback) {};

/**
 * @param {function(?, ?): ?=} callback
 * @param {string=} type
 * @return {void}
 */
TestingBot.TestingBot.prototype.getBrowsers = function(callback, type) {};

/**
 * @param {string} testID
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.getLabTestDetails = function(testID, callback) {};

/**
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.getTunnel = function(callback) {};

/**
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.getUserInfo = function(callback) {};

/**
 * @param {function(?, ?): ?=} callback
 * @param {number=} offset
 * @param {number=} limit
 * @return {void}
 */
TestingBot.TestingBot.prototype.getTests = function(callback, offset, limit) {};

/**
 * @param {function(?, ?): ?=} callback
 * @param {number=} offset
 * @param {number=} limit
 * @return {void}
 */
TestingBot.TestingBot.prototype.getLabTests = function(callback, offset, limit) {};

/**
 * @param {!TestingBot.UserInfo} data
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.updateUserInfo = function(data, callback) {};

/**
 * @param {!TestingBot.TestData} data
 * @param {string} testID
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.updateTest = function(data, testID, callback) {};

/**
 * @param {!TestingBot.TestLabData} data
 * @param {string} testID
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.updateLabTest = function(data, testID, callback) {};

/**
 * @param {string} testID
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.deleteTest = function(testID, callback) {};

/**
 * @param {string} testID
 * @param {function(?, ?): ?=} callback
 * @return {void}
 */
TestingBot.TestingBot.prototype.deleteLabTest = function(testID, callback) {};
 /** @type {function(new: (!TestingBot.TestingBot), !TestingBot.TestingBotOptions): ?} */
var TestingBot;

/* TODO: ExportAssignment in  */