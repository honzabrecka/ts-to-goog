/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/wolfy87-eventemitter/index.d.ts:
/**
 * @extends {Wolfy87EventEmitter.EventEmitter}
 * @constructor
 * @struct
 */
function EventEmitter() {}

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var Wolfy87EventEmitter = {};
/**
 * @record
 * @struct
 */
Wolfy87EventEmitter.MultipleEvents = function() {};

/* TODO: IndexSignature: Wolfy87EventEmitter */
/**
 * @constructor
 * @struct
 */
Wolfy87EventEmitter.EventEmitter = function() {};

/**
 * Reverts the global {\@link EventEmitter} to its previous value and returns a reference to this version.
 * @return {?}
 */
Wolfy87EventEmitter.EventEmitter.noConflict = function() {};

/**
 * Returns the listener array for the specified event.
 * Will initialise the event object and listener arrays if required.
 * Will return an object if you use a regex search. The object contains keys for each matched event.
 * So /ba[rz]/ might return an object containing bar and baz.
 * But only if you have either defined them with defineEvent or added some listeners to them.
 * Each property in the object response is an array of listener functions.
 * 
 * Returns the listener array for the specified event.
 * Will initialise the event object and listener arrays if required.
 * Will return an object if you use a regex search. The object contains keys for each matched event.
 * So /ba[rz]/ might return an object containing bar and baz.
 * But only if you have either defined them with defineEvent or added some listeners to them.
 * Each property in the object response is an array of listener functions.
 * 
 * @param {string|!RegExp} event
 * @return {!Array<!Function>|!Object<string,!Function>}
 */
Wolfy87EventEmitter.EventEmitter.prototype.getListeners = function(event) {};

/**
 * Adds a listener function to the specified event.
 * The listener will not be added if it is a duplicate.
 * If the listener returns true then it will be removed after it is called.
 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
 * 
 * If the function returns true then it will be removed after calling.
 * Adds a listener function to the specified event.
 * The listener will not be added if it is a duplicate.
 * If the listener returns true then it will be removed after it is called.
 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
 * 
 * If the function returns true then it will be removed after calling.
 * @param {string|!RegExp} event
 * @param {!Function} listener
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.addListener = function(event, listener) {};

/**
 * Adds a listener function to the specified event.
 * The listener will not be added if it is a duplicate.
 * If the listener returns true then it will be removed after it is called.
 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
 * 
 * If the function returns true then it will be removed after calling.
 * Adds a listener function to the specified event.
 * The listener will not be added if it is a duplicate.
 * If the listener returns true then it will be removed after it is called.
 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
 * 
 * If the function returns true then it will be removed after calling.
 * @param {string|!RegExp} event
 * @param {!Function} listener
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.on = function(event, listener) {};

/**
 * Takes a list of listener objects and flattens it into a list of listener functions.
 * 
 * @param {!Array<{listener: !Function}>} listeners
 * @return {!Array<!Function>}
 */
Wolfy87EventEmitter.EventEmitter.prototype.flattenListeners = function(listeners) {};

/**
 * Fetches the requested listeners via getListeners but will always return the results inside an object.
 * This is mainly for internal use but others may find it useful.
 * 
 * Fetches the requested listeners via getListeners but will always return the results inside an object.
 * This is mainly for internal use but others may find it useful.
 * 
 * @param {string|!RegExp} event {string|RegExp} Name of the event to return the listeners from.
 * @return {!Object<string,!Function>}
 */
Wolfy87EventEmitter.EventEmitter.prototype.getListenersAsObject = function(event) {};

/**
 * Semi-alias of addListener. It will add a listener that will be
 * automatically removed after it's first execution.
 * 
 * Semi-alias of addListener. It will add a listener that will be
 * automatically removed after it's first execution.
 * 
 * @param {string|!RegExp} event {string|RegExp} Name of the event to attach the listener to.
 * @param {!Function} listener {Function} Method to be called when the event is emitted.
 * If the function returns true then it will be removed after calling.
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.addOnceListener = function(event, listener) {};

/**
 * Semi-alias of addListener. It will add a listener that will be
 * automatically removed after it's first execution.
 * 
 * Semi-alias of addListener. It will add a listener that will be
 * automatically removed after it's first execution.
 * 
 * @param {string|!RegExp} event {string|RegExp} Name of the event to attach the listener to.
 * @param {!Function} listener {Function} Method to be called when the event is emitted.
 * If the function returns true then it will be removed after calling.
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.once = function(event, listener) {};

/**
 * Defines an event name.
 * This is required if you want to use a regex to add a listener to multiple events at once.
 * If you don't do this then how do you expect it to know what event to add to?
 * Should it just add to every possible match for a regex? No. That is scary and bad.
 * You need to tell it what event names should be matched by a regex.
 * 
 * @param {string} event
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.defineEvent = function(event) {};

/**
 * Defines an event name.
 * This is required if you want to use a regex to add a listener to multiple events at once.
 * If you don't do this then how do you expect it to know what event to add to?
 * Should it just add to every possible match for a regex? No. That is scary and bad.
 * You need to tell it what event names should be matched by a regex.
 * 
 * @param {!Array<string>} events
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.defineEvents = function(events) {};

/**
 * Removes a listener function from the specified event.
 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
 * 
 * Removes a listener function from the specified event.
 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
 * 
 * @param {string|!RegExp} event
 * @param {!Function} listener
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.removeListener = function(event, listener) {};

/**
 * Removes a listener function from the specified event.
 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
 * 
 * Removes a listener function from the specified event.
 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
 * 
 * @param {string|!RegExp} event
 * @param {!Function} listener
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.off = function(event, listener) {};

/**
 * Adds listeners in bulk using the manipulateListeners method.
 * If you pass an object as the second argument you can add to multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be added.
 * You can also pass it a regular expression to add the array of listeners to all events that match it.
 * Yeah, this function does quite a bit. That's probably a bad thing.
 * 
 * An object if you wish to add to multiple events at once.
 * Adds listeners in bulk using the manipulateListeners method.
 * If you pass an object as the second argument you can add to multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be added.
 * You can also pass it a regular expression to add the array of listeners to all events that match it.
 * Yeah, this function does quite a bit. That's probably a bad thing.
 * 
 * An object if you wish to add to multiple events at once.
 * Adds listeners in bulk using the manipulateListeners method.
 * If you pass an object as the second argument you can add to multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be added.
 * You can also pass it a regular expression to add the array of listeners to all events that match it.
 * Yeah, this function does quite a bit. That's probably a bad thing.
 * 
 * An object if you wish to add to multiple events at once.
 * @param {string|!RegExp|!Wolfy87EventEmitter.MultipleEvents} event
 * @param {!Array<!Function>=} listeners
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.addListeners = function(event, listeners) {};

/**
 * Removes listeners in bulk using the manipulateListeners method.
 * If you pass an object as the second argument you can remove from multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be removed.
 * You can also pass it a regular expression to remove the listeners from all events that match it.
 * 
 * An object if you wish to remove from multiple events at once.
 * Removes listeners in bulk using the manipulateListeners method.
 * If you pass an object as the second argument you can remove from multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be removed.
 * You can also pass it a regular expression to remove the listeners from all events that match it.
 * 
 * An object if you wish to remove from multiple events at once.
 * Removes listeners in bulk using the manipulateListeners method.
 * If you pass an object as the second argument you can remove from multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be removed.
 * You can also pass it a regular expression to remove the listeners from all events that match it.
 * 
 * An object if you wish to remove from multiple events at once.
 * @param {string|!RegExp|!Wolfy87EventEmitter.MultipleEvents} event
 * @param {!Array<!Function>=} listeners
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.removeListeners = function(event, listeners) {};

/**
 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job.
 * You should really use those instead, this is a little lower level.
 * The first argument will determine if the listeners are removed (true) or added (false).
 * If you pass an object as the second argument you can add/remove from multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be added/removed.
 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
 * 
 * An object if you wish to add/remove from multiple events at once.
 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job.
 * You should really use those instead, this is a little lower level.
 * The first argument will determine if the listeners are removed (true) or added (false).
 * If you pass an object as the second argument you can add/remove from multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be added/removed.
 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
 * 
 * An object if you wish to add/remove from multiple events at once.
 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job.
 * You should really use those instead, this is a little lower level.
 * The first argument will determine if the listeners are removed (true) or added (false).
 * If you pass an object as the second argument you can add/remove from multiple events at once.
 * The object should contain key value pairs of events and listeners or listener arrays.
 * You can also pass it an event name and an array of listeners to be added/removed.
 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
 * 
 * An object if you wish to add/remove from multiple events at once.
 * @param {boolean} remove
 * @param {string|!RegExp|!Wolfy87EventEmitter.MultipleEvents} event
 * @param {!Array<!Function>=} listeners
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.manipulateListeners = function(remove, event, listeners) {};

/**
 * Removes all listeners from a specified event.
 * If you do not specify an event then all listeners will be removed.
 * That means every event will be emptied.
 * You can also pass a regex to remove all events that match it.
 * 
 * Will remove from every event if not passed.
 * Removes all listeners from a specified event.
 * If you do not specify an event then all listeners will be removed.
 * That means every event will be emptied.
 * You can also pass a regex to remove all events that match it.
 * 
 * Will remove from every event if not passed.
 * @param {string|!RegExp=} event
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.removeEvent = function(event) {};

/**
 * Alias of removeEvent.
 * 
 * Added to mirror the node API.
 * Alias of removeEvent.
 * 
 * Added to mirror the node API.
 * @param {string|!RegExp=} event
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.removeAllListeners = function(event) {};

/**
 * Emits an event of your choice.
 * When emitted, every listener attached to that event will be executed.
 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
 * So they will not arrive within the array on the other side, they will be separate.
 * You can also pass a regular expression to emit to all events that match it.
 * 
 * Emits an event of your choice.
 * When emitted, every listener attached to that event will be executed.
 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
 * So they will not arrive within the array on the other side, they will be separate.
 * You can also pass a regular expression to emit to all events that match it.
 * 
 * @param {string|!RegExp} event
 * @param {...?} args
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.emitEvent = function(event, args) {};

/**
 * Emits an event of your choice.
 * When emitted, every listener attached to that event will be executed.
 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
 * So they will not arrive within the array on the other side, they will be separate.
 * You can also pass a regular expression to emit to all events that match it.
 * 
 * Emits an event of your choice.
 * When emitted, every listener attached to that event will be executed.
 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
 * So they will not arrive within the array on the other side, they will be separate.
 * You can also pass a regular expression to emit to all events that match it.
 * 
 * @param {string|!RegExp} event
 * @param {...?} args
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.trigger = function(event, args) {};

/**
 * Subtly different from emitEvent in that it will pass its arguments on to the listeners,
 * as opposed to taking a single array of arguments to pass on.
 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
 * 
 * Subtly different from emitEvent in that it will pass its arguments on to the listeners,
 * as opposed to taking a single array of arguments to pass on.
 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
 * 
 * @param {string|!RegExp} event
 * @param {...?} args
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.emit = function(event, args) {};

/**
 * Sets the current value to check against when executing listeners. If a
 * listeners return value matches the one set here then it will be removed
 * after execution. This value defaults to true.
 * 
 * @param {?} value
 * @return {!Wolfy87EventEmitter.EventEmitter}
 */
Wolfy87EventEmitter.EventEmitter.prototype.setOnceReturnValue = function(value) {};