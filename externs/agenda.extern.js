/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/agenda/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ExportAssignment in  */
/**
 * @record
 * @struct
 */
function Callback() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ResultCallback() {}

/* TODO: CallSignature:  */

/**
 * @constructor
 * @struct
 * Constructs a new Agenda object.
 * @param {!Agenda.AgendaConfiguration=} config Optional configuration to initialize the Agenda.
 * @param {?=} cb Optional callback called with the MongoDB colleciton.
 */
function Agenda(config, cb) {}

/**
 * Connect to the specified MongoDB server and database.
 * @param {string} url
 * @param {string=} collection
 * @param {?=} options
 * @param {?=} cb
 * @return {!Agenda}
 */
Agenda.prototype.database = function(url, collection, options, cb) {};

/**
 * Initialize agenda with an existing MongoDB connection.
 * @param {?} db
 * @param {string=} collection
 * @param {?=} cb
 * @return {!Agenda}
 */
Agenda.prototype.mongo = function(db, collection, cb) {};

/**
 * Sets the agenda name.
 * @param {string} value
 * @return {!Agenda}
 */
Agenda.prototype.name = function(value) {};

/**
 * Sets the interval with which the queue is checked. A number in milliseconds or a frequency string.
 * @param {(string|number)} interval
 * @return {!Agenda}
 */
Agenda.prototype.processEvery = function(interval) {};

/**
 * Takes a number which specifies the max number of jobs that can be running at any given moment. By default it
 * is 20.
 * @param {number} value The value to set.
 * @return {!Agenda}
 */
Agenda.prototype.maxConcurrency = function(value) {};

/**
 * Takes a number which specifies the default number of a specific job that can be running at any given moment.
 * By default it is 5.
 * @param {number} value The value to set.
 * @return {!Agenda}
 */
Agenda.prototype.defaultConcurrency = function(value) {};

/**
 * Takes a number shich specifies the max number jobs that can be locked at any given moment. By default it is
 * 0 for no max.
 * @param {number} value The value to set.
 * @return {!Agenda}
 */
Agenda.prototype.lockLimit = function(value) {};

/**
 * Takes a number which specifies the default number of a specific job that can be locked at any given moment.
 * By default it is 0 for no max.
 * @param {number} value The value to set.
 * @return {!Agenda}
 */
Agenda.prototype.defaultLockLimit = function(value) {};

/**
 * Takes a number which specifies the default lock lifetime in milliseconds. By default it is 10 minutes. This
 * can be overridden by specifying the lockLifetime option to a defined job.
 * @param {number} value The value to set.
 * @return {!Agenda}
 */
Agenda.prototype.defaultLockLifetime = function(value) {};

/**
 * Returns an instance of a jobName with data. This does NOT save the job in the database. See below to learn
 * how to manually work with jobs.
 * @param {string} name The name of the job.
 * @param {?=} data Data to associated with the job.
 * @return {!Agenda.Job}
 */
Agenda.prototype.create = function(name, data) {};

/**
 * Find all Jobs matching `query` and pass same back in cb().
 * @param {?} query
 * @param {?} cb
 * @return {void}
 */
Agenda.prototype.jobs = function(query, cb) {};

/**
 * Removes all jobs in the database without defined behaviors. Useful if you change a definition name and want
 * to remove old jobs.
 * @param {?=} cb Called with the number of jobs removed.
 * @return {void}
 */
Agenda.prototype.purge = function(cb) {};

/**
 * Defines a job with the name of jobName. When a job of job name gets run, it will be passed to fn(job, done).
 * To maintain asynchronous behavior, you must call done() when you are processing the job. If your function is
 * synchronous, you may omit done from the signature.
 * @param {string} name The name of the jobs.
 * @param {function(!Agenda.Job, function(!Error): void): void|!Agenda.JobOptions} handler_or_options The handler to execute.
 * @param {function(!Agenda.Job, function(!Error): void): void=} handler
 * @return {void}
 */
Agenda.prototype.define = function(name, handler_or_options, handler) {};

/**
 * Runs job name at the given interval. Optionally, data and options can be passed in.
 * @param {(string|number)} interval Can be a human-readable format String, a cron format String, or a Number.
 * @param {string|!Array<string>} names The name or names of the job(s) to run.
 * @param {?=} data An optional argument that will be passed to the processing function under job.attrs.data.
 * @param {?=} options An optional argument that will be passed to job.repeatEvery.
 * @param {?=} cb An optional callback function which will be called when the job has been persisted in the database.
 * @return {!Agenda.Job|!Array<!Agenda.Job>}
 */
Agenda.prototype.every = function(interval, names, data, options, cb) {};

/**
 * Schedules a job to run name once at a given time.
 * @param {(string|!Date)} when A Date or a String such as tomorrow at 5pm.
 * @param {string|!Array<string>} names The name or names of the job(s) to run.
 * @param {?=} data An optional argument that will be passed to the processing function under job.attrs.data.
 * @param {?=} cb An optional callback function which will be called when the job has been persisted in the database.
 * @return {!Agenda.Job|!Array<!Agenda.Job>}
 */
Agenda.prototype.schedule = function(when, names, data, cb) {};

/**
 * Schedules a job to run name once immediately.
 * @param {string} name The name of the job to run.
 * @param {?=} data An optional argument that will be passed to the processing function under job.attrs.data.
 * @param {?=} cb An optional callback function which will be called when the job has been persisted in the database.
 * @return {!Agenda.Job}
 */
Agenda.prototype.now = function(name, data, cb) {};

/**
 * Cancels any jobs matching the passed mongodb-native query, and removes them from the database.
 * @param {?} query Mongodb native query.
 * @param {?=} cb Called with the number of jobs removed.
 * @return {void}
 */
Agenda.prototype.cancel = function(query, cb) {};

/**
 * Starts the job queue processing, checking processEvery time to see if there are new jobs.
 * @return {void}
 */
Agenda.prototype.start = function() {};

/**
 * Stops the job queue processing. Unlocks currently running jobs.
 * @param {?} cb Called after the job processing queue shuts down and unlocks all jobs.
 * @return {void}
 */
Agenda.prototype.stop = function(cb) {};
/**
 * @record
 * @struct
 */
Agenda.AgendaConfiguration = function() {};
 /** @type {(string|number)} */
Agenda.AgendaConfiguration.prototype.processEvery;
 /** @type {number} */
Agenda.AgendaConfiguration.prototype.defaultConcurrency;
 /** @type {number} */
Agenda.AgendaConfiguration.prototype.maxConcurrency;
 /** @type {number} */
Agenda.AgendaConfiguration.prototype.defaultLockLimit;
 /** @type {number} */
Agenda.AgendaConfiguration.prototype.lockLimit;
 /** @type {number} */
Agenda.AgendaConfiguration.prototype.defaultLockLifetime;
 /** @type {{db: ?, collection: string}} */
Agenda.AgendaConfiguration.prototype.mongo;
 /** @type {{address: string, collection: string, options: ?}} */
Agenda.AgendaConfiguration.prototype.db;
/**
 * @record
 * @struct
 */
Agenda.JobAttributes = function() {};
 /** @type {?} */
Agenda.JobAttributes.prototype._id;
 /** @type {string} */
Agenda.JobAttributes.prototype.name;
 /** @type {string} */
Agenda.JobAttributes.prototype.type;
 /** @type {!Object<string,?>} */
Agenda.JobAttributes.prototype.data;
 /** @type {number} */
Agenda.JobAttributes.prototype.priority;
 /** @type {(string|number)} */
Agenda.JobAttributes.prototype.repeatInterval;
 /** @type {string} */
Agenda.JobAttributes.prototype.repeatTimezone;
 /** @type {string} */
Agenda.JobAttributes.prototype.lastModifiedBy;
 /** @type {!Date} */
Agenda.JobAttributes.prototype.nextRunAt;
 /** @type {!Date} */
Agenda.JobAttributes.prototype.lockedAt;
 /** @type {!Date} */
Agenda.JobAttributes.prototype.lastRunAt;
 /** @type {!Date} */
Agenda.JobAttributes.prototype.lastFinishedAt;
 /** @type {string} */
Agenda.JobAttributes.prototype.failReason;
 /** @type {number} */
Agenda.JobAttributes.prototype.failCount;
 /** @type {!Date} */
Agenda.JobAttributes.prototype.failedAt;
 /** @type {boolean} */
Agenda.JobAttributes.prototype.disabled;
/**
 * @record
 * @struct
 */
Agenda.Job = function() {};
 /** @type {!Agenda.JobAttributes} */
Agenda.Job.prototype.attrs;

/**
 * Specifies an interval on which the job should repeat.
 * @param {(string|number)} interval A human-readable format String, a cron format String, or a Number.
 * @param {{timezone: string}=} options An optional argument that can include a timezone field. The timezone should be a string as
 * accepted by moment-timezone and is considered when using an interval in the cron string format.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.repeatEvery = function(interval, options) {};

/**
 * Specifies a time when the job should repeat. [Possible values](https://github.com/matthewmueller/date#examples).
 * @param {string} time
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.repeatAt = function(time) {};

/**
 * Disables the job.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.disable = function() {};

/**
 * Enables the job.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.enable = function() {};

/**
 * Ensure that only one instance of this job exists with the specified properties
 * @param {?} value The properties associated with the job that must be unqiue.
 * @param {{insertOnly: boolean}=} opts
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.unique = function(value, opts) {};

/**
 * Specifies the next time at which the job should run.
 * @param {(string|!Date)} time The next time at which the job should run.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.schedule = function(time) {};

/**
 * Specifies the priority weighting of the job.
 * @param {(string|number)} value The priority of the job (lowest|low|normal|high|highest|number).
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.priority = function(value) {};

/**
 * Sets job.attrs.failedAt to now, and sets job.attrs.failReason to reason.
 * @param {(string|!Error)} reason A message or Error object that indicates why the job failed.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.fail = function(reason) {};

/**
 * Runs the given job and calls callback(err, job) upon completion. Normally you never need to call this manually
 * @param {?=} cb Called when the job is completed.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.run = function(cb) {};

/**
 * Returns true if the job is running; otherwise, returns false.
 * @return {boolean}
 */
Agenda.Job.prototype.isRunning = function() {};

/**
 * Saves the job into the database.
 * @param {?=} cb  Called when the job is saved.
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.save = function(cb) {};

/**
 * Removes the job from the database and cancels the job.
 * @param {?=} cb Called after the job has beeb removed from the database.
 * @return {void}
 */
Agenda.Job.prototype.remove = function(cb) {};

/**
 * Resets the lock on the job. Useful to indicate that the job hasn't timed out when you have very long running
 * jobs.
 * @param {?=} cb Called after the job has been saved to the database.
 * @return {void}
 */
Agenda.Job.prototype.touch = function(cb) {};

/**
 * Calculates next time the job should run
 * @return {!Agenda.Job}
 */
Agenda.Job.prototype.computeNextRunAt = function() {};
/**
 * @record
 * @struct
 */
Agenda.JobOptions = function() {};
 /** @type {number} */
Agenda.JobOptions.prototype.concurrency;
 /** @type {number} */
Agenda.JobOptions.prototype.lockLimit;
 /** @type {number} */
Agenda.JobOptions.prototype.lockLifetime;
 /** @type {(string|number)} */
Agenda.JobOptions.prototype.priority;