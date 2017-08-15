/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/datadog-metrics/index.d.ts:
/**
 * @record
 * @struct
 */
function BufferedMetricsLoggerOptions() {}
 /** @type {string} */
BufferedMetricsLoggerOptions.prototype.apiKey;
 /** @type {string} */
BufferedMetricsLoggerOptions.prototype.appKey;
 /** @type {!Array<string>} */
BufferedMetricsLoggerOptions.prototype.defaultTags;
 /** @type {number} */
BufferedMetricsLoggerOptions.prototype.flushIntervalSeconds;
 /** @type {string} */
BufferedMetricsLoggerOptions.prototype.host;
 /** @type {string} */
BufferedMetricsLoggerOptions.prototype.prefix;

/**
 * @constructor
 * @struct
 * @param {?} options
 */
function BufferedMetricsLogger(options) {}

/**
 * Record the current value of a metric. They most recent value in a given flush
 * interval will be recorded. Optionally, specify a set of tags to associate with
 * the metric. This should be used for sum values such as total hard disk space,
 * process uptime, total number of active users, or number of rows in a database table.
 * @param {string} key
 * @param {number} value
 * @param {...string} tags
 * @return {void}
 */
BufferedMetricsLogger.prototype.gauge = function(key, value, tags) {};

/**
 * Increment the counter by the given value (or 1 by default). Optionally, specify a
 * list of tags to associate with the metric. This is useful for counting things such
 * as incrementing a counter each time a page is requested.
 * @param {string} key
 * @param {number=} value
 * @param {...string} tags
 * @return {void}
 */
BufferedMetricsLogger.prototype.increment = function(key, value, tags) {};

/**
 * Sample a histogram value. Histograms will produce metrics that describe the distribution
 * of the recorded values, namely the minimum, maximum, average, count and the 75th, 85th,
 * 95th and 99th percentiles. Optionally, specify a list of tags to associate with the metric.
 * @param {string} key
 * @param {number} value
 * @param {...string} tags
 * @return {void}
 */
BufferedMetricsLogger.prototype.histogram = function(key, value, tags) {};

/**
 * Calling flush sends any buffered metrics to DataDog. Unless you set flushIntervalSeconds
 * to 0 it won't be necessary to call this function.
 * It can be useful to trigger a manual flush by calling if you want to make sure pending
 * metrics have been sent before you quit the application process, for example.
 * @param {?=} onSuccess
 * @param {?=} onError
 * @return {void}
 */
BufferedMetricsLogger.prototype.flush = function(onSuccess, onError) {};

/**
 * @param {?} options
 * @return {void}
 */
function init(options) {}

/**
 * Record the current value of a metric. They most recent value in a given flush
 * interval will be recorded. Optionally, specify a set of tags to associate with
 * the metric. This should be used for sum values such as total hard disk space,
 * process uptime, total number of active users, or number of rows in a database table.
 * @param {string} key
 * @param {number} value
 * @param {...string} tags
 * @return {void}
 */
function gauge(key, value, tags) {}

/**
 * Increment the counter by the given value (or 1 by default). Optionally, specify a
 * list of tags to associate with the metric. This is useful for counting things such
 * as incrementing a counter each time a page is requested.
 * @param {string} key
 * @param {number=} value
 * @param {...string} tags
 * @return {void}
 */
function increment(key, value, tags) {}

/**
 * Sample a histogram value. Histograms will produce metrics that describe the distribution
 * of the recorded values, namely the minimum, maximum, average, count and the 75th, 85th,
 * 95th and 99th percentiles. Optionally, specify a list of tags to associate with the metric.
 * @param {string} key
 * @param {number} value
 * @param {...string} tags
 * @return {void}
 */
function histogram(key, value, tags) {}

/**
 * Calling flush sends any buffered metrics to DataDog. Unless you set flushIntervalSeconds
 * to 0 it won't be necessary to call this function.
 * It can be useful to trigger a manual flush by calling if you want to make sure pending
 * metrics have been sent before you quit the application process, for example.
 * @param {?=} onSuccess
 * @param {?=} onError
 * @return {void}
 */
function flush(onSuccess, onError) {}