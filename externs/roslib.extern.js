/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/roslib/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var ROSLIB = {};

/**
 * @constructor
 * @struct
 * Manages connection to the server and all interactions with ROS.
 * 
 * Emits the following events:
 *  * 'error' - there was an error with ROS
 *  * 'connection' - connected to the WebSocket server
 *  * 'close' - disconnected to the WebSocket server
 *  * <topicName> - a message came from rosbridge with the given topic name
 *  * <serviceID> - a service response came from rosbridge with the given ID
 * 
 * @param {{url: string}} options - possible keys include:
 *   * url (optional) - the WebSocket URL for rosbridge (can be specified later with `connect`)
 */
ROSLIB.Ros = function(options) {};

/**
 * @param {string} eventName
 * @param {function(?): void} callback
 * @return {void}
 */
ROSLIB.Ros.prototype.on = function(eventName, callback) {};

/**
 * Connect to the specified WebSocket.
 * 
 * @param {string} url - WebSocket URL for Rosbridge
 * @return {void}
 */
ROSLIB.Ros.prototype.connect = function(url) {};

/**
 * Disconnect from the WebSocket server.
 * @return {void}
 */
ROSLIB.Ros.prototype.close = function() {};

/**
 * Sends an authorization request to the server.
 * 
 * @param {string} mac - MAC (hash) string given by the trusted source.
 * @param {string} client - IP of the client.
 * @param {string} dest - IP of the destination.
 * @param {string} rand - Random string given by the trusted source.
 * @param {number} t - Time of the authorization request.
 * @param {string} level - User level as a string given by the client.
 * @param {string} end - End time of the client's session.
 * @return {void}
 */
ROSLIB.Ros.prototype.authenticate = function(mac, client, dest, rand, t, level, end) {};

/**
 * Sends the message over the WebSocket, but queues the message up if not yet
 * connected.
 * @param {?} message
 * @return {void}
 */
ROSLIB.Ros.prototype.callOnConnection = function(message) {};

/**
 * Retrieves list of actionlib servers in ROS as an array.
 * 
 * @param {function(!Array<string>): void} callback function with params:
 *   * action_servers - Array of actionlib servers names
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getActionServers = function(callback, failedCallback) {};

/**
 * Retrieves list of topics in ROS as an array.
 * 
 * @param {function(!Array<string>): void} callback function with params:
 *   * topics - Array of topic names
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getTopics = function(callback, failedCallback) {};

/**
 * Retrieves Topics in ROS as an array as specific type
 * 
 * @param {string} topicType topic type to find:
 * @param {function(!Array<string>): void} callback function with params:
 *   * topics - Array of topic names
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getTopicsForType = function(topicType, callback, failedCallback) {};

/**
 * Retrieves list of active service names in ROS.
 * 
 * @param {function(!Array<string>): void} callback - function with the following params:
 *   * services - array of service names
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getServices = function(callback, failedCallback) {};

/**
 * Retrieves list of services in ROS as an array as specific type
 * 
 * @param {string} serviceType service type to find:
 * @param {function(!Array<string>): void} callback function with params:
 *   * topics - Array of service names
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getServicesForType = function(serviceType, callback, failedCallback) {};

/**
 * Retrieves list of active node names in ROS.
 * 
 * @param {function(!Array<string>): void} callback - function with the following params:
 *   * nodes - array of node names
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getNodes = function(callback, failedCallback) {};

/**
 * Retrieves list of param names from the ROS Parameter Server.
 * 
 * @param {function(!Array<string>): void} callback function with params:
 *  * params - array of param names.
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getParams = function(callback, failedCallback) {};

/**
 * Retrieves a type of ROS topic.
 * 
 * @param {string} topic name of the topic:
 * @param {function(string): void} callback - function with params:
 *   * type - String of the topic type
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getTopicType = function(topic, callback, failedCallback) {};

/**
 * Retrieves a type of ROS service.
 * 
 * @param {string} service name of service:
 * @param {function(string): void} callback - function with params:
 *   * type - String of the service type
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getServiceType = function(service, callback, failedCallback) {};

/**
 * Retrieves a detail of ROS message.
 * 
 * @param {!ROSLIB.Message} message - String of a topic type
 * @param {function(?): void} callback - function with params:
 *   * details - Array of the message detail
 * @param {function(?): void=} failedCallback - the callback function when the ros call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Ros.prototype.getMessageDetails = function(message, callback, failedCallback) {};

/**
 * Decode a typedefs into a dictionary like `rosmsg show foo/bar`
 * 
 * @param {?} defs - array of type_def dictionary
 * @return {void}
 */
ROSLIB.Ros.prototype.decodeTypeDefs = function(defs) {};

/**
 * @constructor
 * @struct
 * Message objects are used for publishing and subscribing to and from topics.
 * 
 * @param {?} values - object matching the fields defined in the .msg definition file
 */
ROSLIB.Message = function(values) {};

/**
 * @constructor
 * @struct
 * A ROS parameter.
 * 
 * @param {{ros: !ROSLIB.Ros, name: string}} options - possible keys include:
 *   * ros - the ROSLIB.Ros connection handle
 *   * name - the param name, like max_vel_x
 */
ROSLIB.Param = function(options) {};

/**
 * Fetches the value of the param.
 * 
 * @param {function(?): void} callback - function with the following params:
 *  * value - the value of the param from ROS.
 * @return {void}
 */
ROSLIB.Param.prototype.get = function(callback) {};

/**
 * Sets the value of the param in ROS.
 * 
 * @param {?} value - value to set param to.
 * @param {function(?): void=} callback - function with params:
 *   * response - the response from the service request
 * @return {void}
 */
ROSLIB.Param.prototype.set = function(value, callback) {};

/**
 * Delete this parameter on the ROS server.
 * @param {function(?): void} callback
 * @return {void}
 */
ROSLIB.Param.prototype.delete = function(callback) {};

/**
 * @constructor
 * @struct
 * A ROS service client.
 * 
 * \@params options - possible keys include:
 *   * ros - the ROSLIB.Ros connection handle
 *   * name - the service name, like /add_two_ints
 *   * serviceType - the service type, like 'rospy_tutorials/AddTwoInts'
 * @param {{ros: !ROSLIB.Ros, name: string, serviceType: string}} data
 */
ROSLIB.Service = function(data) {};
 /** @type {string} */
ROSLIB.Service.prototype.name;
 /** @type {string} */
ROSLIB.Service.prototype.serviceType;

/**
 * Calls the service. Returns the service response in the callback.
 * 
 * @param {!ROSLIB.ServiceRequest} request - the ROSLIB.ServiceRequest to send
 * @param {function(?): void} callback - function with params:
 *   * response - the response from the service request
 * @param {function(?): void=} failedCallback - the callback function when the service call failed (optional). Params:
 *   * error - the error message reported by ROS
 * @return {void}
 */
ROSLIB.Service.prototype.callService = function(request, callback, failedCallback) {};

/**
 * Advertise this service and call the callback each time a client calls it.
 * 
 * @param {function(?, ?): void} callback - function with the following params:
 *   * request - the service request data
 *   * response - the data which should be sent back to the caller
 * @return {void}
 */
ROSLIB.Service.prototype.advertise = function(callback) {};

/**
 * Unadvertise a previously advertised service
 * @return {void}
 */
ROSLIB.Service.prototype.unadvertise = function() {};

/**
 * @constructor
 * @struct
 * A ServiceRequest is passed into the service call.
 * 
 * @param {?=} values - object matching the fields defined in the .srv definition file
 */
ROSLIB.ServiceRequest = function(values) {};

/**
 * @constructor
 * @struct
 * A ServiceResponse is returned from the service call.
 * 
 * @param {?=} values - object matching the fields defined in the .srv definition file
 */
ROSLIB.ServiceResponse = function(values) {};

/**
 * @constructor
 * @struct
 * Publish and/or subscribe to a topic in ROS.
 * 
 * Emits the following events:
 *  * 'warning' - if there are any warning during the Topic creation
 *  * 'message' - the message data from rosbridge
 * 
 * @param {{ros: !ROSLIB.Ros, name: string, messageType: string, compression: string, throttle_rate: number, queue_size: number, latch: boolean, queue_length: number}} options - object with following keys:
 *   * ros - the ROSLIB.Ros connection handle
 *   * name - the topic name, like /cmd_vel
 *   * messageType - the message type, like 'std_msgs/String'
 *   * compression - the type of compression to use, like 'png'
 *   * throttle_rate - the rate (in ms in between messages) at which to throttle the topics
 *   * queue_size - the queue created at bridge side for re-publishing webtopics (defaults to 100)
 *   * latch - latch the topic when publishing
 *   * queue_length - the queue length at bridge side used when subscribing (defaults to 0, no queueing).
 */
ROSLIB.Topic = function(options) {};
 /** @type {string} */
ROSLIB.Topic.prototype.name;
 /** @type {string} */
ROSLIB.Topic.prototype.messageType;

/**
 * Every time a message is published for the given topic, the callback
 * will be called with the message object.
 * 
 * @param {function(!ROSLIB.Message): void} callback - function with the following params:
 *   * message - the published message
 * @return {void}
 */
ROSLIB.Topic.prototype.subscribe = function(callback) {};

/**
 * Unregisters as a subscriber for the topic. Unsubscribing stop remove
 * all subscribe callbacks. To remove a call back, you must explicitly
 * pass the callback function in.
 * 
 * @param {function(function(!ROSLIB.Message): void): void=} callback - the optional callback to unregister, if
 *     * provided and other listeners are registered the topic won't
 *     * unsubscribe, just stop emitting to the passed listener
 * @return {void}
 */
ROSLIB.Topic.prototype.unsubscribe = function(callback) {};

/**
 * Registers as a publisher for the topic.
 * @return {void}
 */
ROSLIB.Topic.prototype.advertise = function() {};

/**
 * Unregisters as a publisher for the topic.
 * @return {void}
 */
ROSLIB.Topic.prototype.unadvertise = function() {};

/**
 * Publish the message.
 * 
 * @param {!ROSLIB.Message} message - A ROSLIB.Message object.
 * @return {void}
 */
ROSLIB.Topic.prototype.publish = function(message) {};

/**
 * @constructor
 * @struct
 * An actionlib action client.
 * 
 * Emits the following events:
 *  * 'timeout' - if a timeout occurred while sending a goal
 *  * 'status' - the status messages received from the action server
 *  * 'feedback' -  the feedback messages received from the action server
 *  * 'result' - the result returned from the action server
 * 
 *  \@constructor
 *  \@param options - object with following keys:
 *   * ros - the ROSLIB.Ros connection handle
 *   * serverName - the action server name, like /fibonacci
 *   * actionName - the action message name, like 'actionlib_tutorials/FibonacciAction'
 *   * timeout - the timeout length when connecting to the action server
 * @param {{ros: !ROSLIB.Ros, serverName: string, actionName: string, timeout: number}} options
 */
ROSLIB.ActionClient = function(options) {};

/**
 * Cancel all goals associated with this ActionClient.
 * @return {void}
 */
ROSLIB.ActionClient.prototype.cancel = function() {};

/**
 * @constructor
 * @struct
 * An actionlib goal goal is associated with an action server.
 * 
 * Emits the following events:
 *  * 'timeout' - if a timeout occurred while sending a goal
 * 
 *  \@constructor
 *  \@param options with following keys:
 *   * actionClient - the ROSLIB.ActionClient to use with this goal
 *   * goalMessage - The JSON object containing the goal for the action server
 * @param {{actionClient: !ROSLIB.ActionClient, goalMessage: ?}} options
 */
ROSLIB.Goal = function(options) {};

/**
 * Send the goal to the action server.
 * 
 * @param {number=} timeout (optional) - a timeout length for the goal's result
 * @return {void}
 */
ROSLIB.Goal.prototype.send = function(timeout) {};

/**
 * Cancel the current goal.
 * @return {void}
 */
ROSLIB.Goal.prototype.cancel = function() {};