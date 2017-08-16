/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/zmq/index.d.ts:
/**
 * @record
 * @struct
 */
function EventEmitter() {}
/**
 * @record
 * @struct
 */
function SocketTypes() {}
 /** @type {number} */
SocketTypes.prototype.pub;
 /** @type {number} */
SocketTypes.prototype.xpub;
 /** @type {number} */
SocketTypes.prototype.sub;
 /** @type {number} */
SocketTypes.prototype.xsub;
 /** @type {number} */
SocketTypes.prototype.req;
 /** @type {number} */
SocketTypes.prototype.xreq;
 /** @type {number} */
SocketTypes.prototype.rep;
 /** @type {number} */
SocketTypes.prototype.xrep;
 /** @type {number} */
SocketTypes.prototype.push;
 /** @type {number} */
SocketTypes.prototype.pull;
 /** @type {number} */
SocketTypes.prototype.dealer;
 /** @type {number} */
SocketTypes.prototype.router;
 /** @type {number} */
SocketTypes.prototype.pair;
/**
 * @record
 * @struct
 */
function SocketOptions() {}
 /** @type {number} */
SocketOptions.prototype._fd;
 /** @type {number} */
SocketOptions.prototype._ioevents;
 /** @type {number} */
SocketOptions.prototype._receiveMore;
 /** @type {number} */
SocketOptions.prototype._subscribe;
 /** @type {number} */
SocketOptions.prototype._unsubscribe;
 /** @type {number} */
SocketOptions.prototype.affinity;
 /** @type {number} */
SocketOptions.prototype.backlog;
 /** @type {number} */
SocketOptions.prototype.hwm;
 /** @type {number} */
SocketOptions.prototype.identity;
 /** @type {number} */
SocketOptions.prototype.linger;
 /** @type {number} */
SocketOptions.prototype.mcast_loop;
 /** @type {number} */
SocketOptions.prototype.rate;
 /** @type {number} */
SocketOptions.prototype.rcvbuf;
 /** @type {number} */
SocketOptions.prototype.last_endpoint;
 /** @type {number} */
SocketOptions.prototype.reconnect_ivl;
 /** @type {number} */
SocketOptions.prototype.recovery_ivl;
 /** @type {number} */
SocketOptions.prototype.sndbuf;
 /** @type {number} */
SocketOptions.prototype.swap;
/**
 * @extends {EventEmitter}
 * @record
 * @struct
 */
function Socket() {}
 /** @type {?} */
Socket.prototype._fd;
 /** @type {?} */
Socket.prototype._ioevents;
 /** @type {?} */
Socket.prototype._receiveMore;
 /** @type {?} */
Socket.prototype._subscribe;
 /** @type {?} */
Socket.prototype._unsubscribe;
 /** @type {?} */
Socket.prototype.affinity;
 /** @type {?} */
Socket.prototype.hwm;
 /** @type {?} */
Socket.prototype.identity;
 /** @type {?} */
Socket.prototype.linger;
 /** @type {?} */
Socket.prototype.mcast_loop;
 /** @type {?} */
Socket.prototype.rate;
 /** @type {?} */
Socket.prototype.rcvbuf;
 /** @type {?} */
Socket.prototype.last_endpoint;
 /** @type {?} */
Socket.prototype.reconnect_ivl;
 /** @type {?} */
Socket.prototype.recovery_ivl;
 /** @type {?} */
Socket.prototype.sndbuf;
 /** @type {?} */
Socket.prototype.swap;

/**
 * Set `opt` to `val`.
 * 
 * Set `opt` to `val`.
 * 
 * @param {number|string} opt Option
 * @param {?} val Value
 * @return {?}
 */
Socket.prototype.setsocketopt = function(opt, val) {};

/**
 * Get socket `opt`.
 * 
 * Get socket `opt`.
 * 
 * @param {number|string} opt Option number / Option string
 * @return {?}
 */
Socket.prototype.getsocketopt = function(opt) {};

/**
 * Async bind.
 * 
 * Emits the "bind" event.
 * 
 * @param {string} addr Socket address
 * @param {?=} callback
 * @return {?}
 */
Socket.prototype.bind = function(addr, callback) {};

/**
 * Sync bind.
 * 
 * @param {string} addr Socket address
 * @return {?}
 */
Socket.prototype.bindSync = function(addr) {};

/**
 * Async unbind.
 * 
 * Emits the "unbind" event.
 * 
 * @param {string} addr Socket address
 * @param {?=} callback
 * @return {?}
 */
Socket.prototype.unbind = function(addr, callback) {};

/**
 * Sync unbind.
 * 
 * @param {string} addr Socket address
 * @return {?}
 */
Socket.prototype.unbindSync = function(addr) {};

/**
 * Connect to `addr`.
 * 
 * @param {string} addr Connection address
 * @return {?}
 */
Socket.prototype.connect = function(addr) {};

/**
 * Disconnect from `addr`.
 * 
 * @param {string} addr The address
 * @return {?}
 */
Socket.prototype.disconnect = function(addr) {};

/**
 * Subscribe with the given `filter`.
 * 
 * @param {string} filter The filter
 * @return {?}
 */
Socket.prototype.subscribe = function(filter) {};

/**
 * Unsubscribe with the given `filter`.
 * 
 * @param {string} filter The filter
 * @return {?}
 */
Socket.prototype.unsubscribe = function(filter) {};

/**
 * Send the given `msg`.
 * 
 * Send the given `msg`.
 * 
 * Send the given `msg`.
 * 
 * @param {string|?|!Array<?>} msg The message / {Buffer} The message
 * @param {number=} flags Message flags / {number} Optional message flags
 * @return {?}
 */
Socket.prototype.send = function(msg, flags) {};

/**
 * Enable monitoring of a Socket
 * 
 * @param {number=} interval
 * @return {?}
 */
Socket.prototype.monitor = function(interval) {};

/**
 * Close the socket.
 * 
 * @return {?}
 */
Socket.prototype.close = function() {};

/**
 * Socket event
 * @param {string} eventName {string}
 * @param {?} callback {Function}
 * @return {void}
 */
Socket.prototype.on = function(eventName, callback) {};

/**
 * @return {void}
 */
Socket.prototype.pause = function() {};

/**
 * @return {void}
 */
Socket.prototype.resume = function() {};

/**
 * @return {?}
 */
Socket.prototype.backlog = function() {};
 /** @type {string} */
var version;
 /** @type {?} */
var types;
 /** @type {?} */
var options;

/**
 * @param {string|number} type
 * @param {?=} options
 * @return {?}
 */
function socket(type, options) {}

/**
 * @param {string} type
 * @param {?=} options
 * @return {?}
 */
function createSocket(type, options) {}