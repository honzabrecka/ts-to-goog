/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sinon/index.d.ts:
/**
 * @record
 * @struct
 */
function Event() {}
/**
 * @record
 * @struct
 */
function Document() {}
/** @const */
var Sinon = {};
/**
 * @record
 * @struct
 */
Sinon.SinonSpyCallApi = function() {};
 /** @type {?} */
Sinon.SinonSpyCallApi.prototype.thisValue;
 /** @type {!Array<?>} */
Sinon.SinonSpyCallApi.prototype.args;
 /** @type {?} */
Sinon.SinonSpyCallApi.prototype.exception;
 /** @type {?} */
Sinon.SinonSpyCallApi.prototype.returnValue;

/**
 * @param {?} obj
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.calledOn = function(obj) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.calledWith = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.calledWithExactly = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.calledWithMatch = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.notCalledWith = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.notCalledWithMatch = function(args) {};

/**
 * @param {?} value
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.returned = function(value) {};

/**
 * @param {string|?=} type_or_obj
 * @return {boolean}
 */
Sinon.SinonSpyCallApi.prototype.threw = function(type_or_obj) {};

/**
 * @param {number} pos
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.callArg = function(pos) {};

/**
 * @param {number} pos
 * @param {?} obj
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.callArgOn = function(pos, obj, args) {};

/**
 * @param {number} pos
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.callArgWith = function(pos, args) {};

/**
 * @param {number} pos
 * @param {?} obj
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.callArgOnWith = function(pos, obj, args) {};

/**
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.yield = function(args) {};

/**
 * @param {?} obj
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.yieldOn = function(obj, args) {};

/**
 * @param {string} property
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.yieldTo = function(property, args) {};

/**
 * @param {string} property
 * @param {?} obj
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpyCallApi.prototype.yieldToOn = function(property, obj, args) {};
/**
 * @extends {Sinon.SinonSpyCallApi}
 * @record
 * @struct
 */
Sinon.SinonSpyCall = function() {};

/**
 * @param {!Sinon.SinonSpyCall} call
 * @return {boolean}
 */
Sinon.SinonSpyCall.prototype.calledBefore = function(call) {};

/**
 * @param {!Sinon.SinonSpyCall} call
 * @return {boolean}
 */
Sinon.SinonSpyCall.prototype.calledAfter = function(call) {};

/**
 * @param {!Sinon.SinonSpyCall} call
 * @return {boolean}
 */
Sinon.SinonSpyCall.prototype.calledWithNew = function(call) {};
/**
 * @extends {Sinon.SinonSpyCallApi}
 * @record
 * @struct
 */
Sinon.SinonSpy = function() {};
 /** @type {number} */
Sinon.SinonSpy.prototype.callCount;
 /** @type {boolean} */
Sinon.SinonSpy.prototype.called;
 /** @type {boolean} */
Sinon.SinonSpy.prototype.notCalled;
 /** @type {boolean} */
Sinon.SinonSpy.prototype.calledOnce;
 /** @type {boolean} */
Sinon.SinonSpy.prototype.calledTwice;
 /** @type {boolean} */
Sinon.SinonSpy.prototype.calledThrice;
 /** @type {!Sinon.SinonSpyCall} */
Sinon.SinonSpy.prototype.firstCall;
 /** @type {!Sinon.SinonSpyCall} */
Sinon.SinonSpy.prototype.secondCall;
 /** @type {!Sinon.SinonSpyCall} */
Sinon.SinonSpy.prototype.thirdCall;
 /** @type {!Sinon.SinonSpyCall} */
Sinon.SinonSpy.prototype.lastCall;
 /** @type {!Array<?>} */
Sinon.SinonSpy.prototype.thisValues;
 /** @type {!Array<!Array<?>>} */
Sinon.SinonSpy.prototype.args;
 /** @type {!Array<?>} */
Sinon.SinonSpy.prototype.exceptions;
 /** @type {!Array<?>} */
Sinon.SinonSpy.prototype.returnValues;

/* TODO: CallSignature: Sinon */

/**
 * @param {!Sinon.SinonSpy} anotherSpy
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.calledBefore = function(anotherSpy) {};

/**
 * @param {!Sinon.SinonSpy} anotherSpy
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.calledAfter = function(anotherSpy) {};

/**
 * @param {!Sinon.SinonSpy} anotherSpy
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.calledImmediatelyBefore = function(anotherSpy) {};

/**
 * @param {!Sinon.SinonSpy} anotherSpy
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.calledImmediatelyAfter = function(anotherSpy) {};

/**
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.calledWithNew = function() {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonSpy}
 */
Sinon.SinonSpy.prototype.withArgs = function(args) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.alwaysCalledOn = function(obj) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.alwaysCalledWith = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.alwaysCalledWithExactly = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.alwaysCalledWithMatch = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.neverCalledWith = function(args) {};

/**
 * @param {...?} args
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.neverCalledWithMatch = function(args) {};

/**
 * @param {string|?=} type_or_obj
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.alwaysThrew = function(type_or_obj) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
Sinon.SinonSpy.prototype.alwaysReturned = function(obj) {};

/**
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonSpy.prototype.invokeCallback = function(args) {};

/**
 * @param {number} n
 * @return {!Sinon.SinonSpyCall}
 */
Sinon.SinonSpy.prototype.getCall = function(n) {};

/**
 * @return {!Array<!Sinon.SinonSpyCall>}
 */
Sinon.SinonSpy.prototype.getCalls = function() {};

/**
 * @return {void}
 */
Sinon.SinonSpy.prototype.reset = function() {};

/**
 * @param {string} format
 * @param {...?} args
 * @return {string}
 */
Sinon.SinonSpy.prototype.printf = function(format, args) {};

/**
 * @return {void}
 */
Sinon.SinonSpy.prototype.restore = function() {};
/**
 * @record
 * @struct
 */
Sinon.SinonSpyStatic = function() {};

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */
/**
 * @record
 * @struct
 */
Sinon.SinonStatic = function() {};
 /** @type {!Sinon.SinonSpyStatic} */
Sinon.SinonStatic.prototype.spy;
/**
 * @extends {Sinon.SinonSpy}
 * @record
 * @struct
 */
Sinon.SinonStub = function() {};

/**
 * @return {void}
 */
Sinon.SinonStub.prototype.resetBehavior = function() {};

/**
 * @return {void}
 */
Sinon.SinonStub.prototype.resetHistory = function() {};

/**
 * @param {?} promiseLibrary
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.usingPromise = function(promiseLibrary) {};

/**
 * @param {?} obj
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.returns = function(obj) {};

/**
 * @param {number} index
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.returnsArg = function(index) {};

/**
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.returnsThis = function() {};

/**
 * @param {?=} value
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.resolves = function(value) {};

/**
 * @param {string|?=} type_or_obj
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.throws = function(type_or_obj) {};

/**
 * @param {number} index
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.throwsArg = function(index) {};

/**
 * @param {string|?=} type_or_obj
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.throwsException = function(type_or_obj) {};

/**
 * @param {string|?=} errorType_or_value
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.rejects = function(errorType_or_value) {};

/**
 * @param {number} index
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArg = function(index) {};

/**
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callThrough = function() {};

/**
 * @param {number} index
 * @param {?} context
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgOn = function(index, context) {};

/**
 * @param {number} index
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgWith = function(index, args) {};

/**
 * @param {number} index
 * @param {?} context
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgOnWith = function(index, context, args) {};

/**
 * @param {number} index
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgAsync = function(index) {};

/**
 * @param {number} index
 * @param {?} context
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgOnAsync = function(index, context) {};

/**
 * @param {number} index
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgWithAsync = function(index, args) {};

/**
 * @param {number} index
 * @param {?} context
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsArgOnWithAsync = function(index, context, args) {};

/**
 * @param {function(!Array<?>): void} func
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.callsFake = function(func) {};

/**
 * @param {function(): ?} func
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.get = function(func) {};

/**
 * @param {function(?): void} func
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.set = function(func) {};

/**
 * @param {number} n
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.onCall = function(n) {};

/**
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.onFirstCall = function() {};

/**
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.onSecondCall = function() {};

/**
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.onThirdCall = function() {};

/**
 * @param {?} val
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.value = function(val) {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yields = function(args) {};

/**
 * @param {?} context
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsOn = function(context, args) {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsRight = function(args) {};

/**
 * @param {string} property
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsTo = function(property, args) {};

/**
 * @param {string} property
 * @param {?} context
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsToOn = function(property, context, args) {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsAsync = function(args) {};

/**
 * @param {?} context
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsOnAsync = function(context, args) {};

/**
 * @param {string} property
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsToAsync = function(property, args) {};

/**
 * @param {string} property
 * @param {?} context
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.yieldsToOnAsync = function(property, context, args) {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonStub}
 */
Sinon.SinonStub.prototype.withArgs = function(args) {};
/**
 * @record
 * @struct
 */
Sinon.SinonStubStatic = function() {};

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */
 /** @type {!Sinon.SinonStubStatic} */
Sinon.SinonStatic.prototype.stub;
/**
 * @extends {Sinon.SinonStub}
 * @record
 * @struct
 */
Sinon.SinonExpectation = function() {};

/**
 * @param {number} n
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.atLeast = function(n) {};

/**
 * @param {number} n
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.atMost = function(n) {};

/**
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.never = function() {};

/**
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.once = function() {};

/**
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.twice = function() {};

/**
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.thrice = function() {};

/**
 * @param {number} n
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.exactly = function(n) {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.withArgs = function(args) {};

/**
 * @param {...?} args
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.withExactArgs = function(args) {};

/**
 * @param {?} obj
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.on = function(obj) {};

/**
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectation.prototype.verify = function() {};

/**
 * @return {void}
 */
Sinon.SinonExpectation.prototype.restore = function() {};
/**
 * @record
 * @struct
 */
Sinon.SinonExpectationStatic = function() {};

/**
 * @param {string=} methodName
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonExpectationStatic.prototype.create = function(methodName) {};
/**
 * @record
 * @struct
 */
Sinon.SinonMock = function() {};

/**
 * @param {string} method
 * @return {!Sinon.SinonExpectation}
 */
Sinon.SinonMock.prototype.expects = function(method) {};

/**
 * @return {void}
 */
Sinon.SinonMock.prototype.restore = function() {};

/**
 * @return {void}
 */
Sinon.SinonMock.prototype.verify = function() {};
/**
 * @record
 * @struct
 */
Sinon.SinonMockStatic = function() {};

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */
 /** @type {!Sinon.SinonExpectationStatic} */
Sinon.SinonStatic.prototype.expectation;
 /** @type {!Sinon.SinonMockStatic} */
Sinon.SinonStatic.prototype.mock;
/**
 * @record
 * @struct
 */
Sinon.SinonFakeTimers = function() {};
 /** @type {number} */
Sinon.SinonFakeTimers.prototype.now;

/**
 * @param {number} now
 * @return {!Sinon.SinonFakeTimers}
 */
Sinon.SinonFakeTimers.prototype.create = function(now) {};

/**
 * @param {function(!Array<?>): void} callback
 * @param {number} timeout
 * @param {...?} args
 * @return {number}
 */
Sinon.SinonFakeTimers.prototype.setTimeout = function(callback, timeout, args) {};

/**
 * @param {number} id
 * @return {void}
 */
Sinon.SinonFakeTimers.prototype.clearTimeout = function(id) {};

/**
 * @param {function(!Array<?>): void} callback
 * @param {number} timeout
 * @param {...?} args
 * @return {number}
 */
Sinon.SinonFakeTimers.prototype.setInterval = function(callback, timeout, args) {};

/**
 * @param {number} id
 * @return {void}
 */
Sinon.SinonFakeTimers.prototype.clearInterval = function(id) {};

/**
 * @param {number} ms
 * @return {number}
 */
Sinon.SinonFakeTimers.prototype.tick = function(ms) {};

/**
 * @return {void}
 */
Sinon.SinonFakeTimers.prototype.reset = function() {};

/**
 * @param {number=} year
 * @param {number=} month
 * @param {number=} day
 * @param {number=} hour
 * @param {number=} minute
 * @param {number=} second
 * @param {number=} ms
 * @return {!Date}
 */
Sinon.SinonFakeTimers.prototype.Date = function(year, month, day, hour, minute, second, ms) {};

/**
 * @return {void}
 */
Sinon.SinonFakeTimers.prototype.restore = function() {};

/**
 * Simulate the user changing the system clock while your program is running. It changes the 'now' timestamp
 * without affecting timers, intervals or immediates.
 * Simulate the user changing the system clock while your program is running. It changes the 'now' timestamp
 * without affecting timers, intervals or immediates.
 * @param {number|!Date} now_or_date The new 'now' in unix milliseconds
 * @return {void}
 */
Sinon.SinonFakeTimers.prototype.setSystemTime = function(now_or_date) {};
/**
 * @record
 * @struct
 */
Sinon.SinonFakeTimersStatic = function() {};

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */
 /** @type {!Sinon.SinonFakeTimersStatic} */
Sinon.SinonStatic.prototype.useFakeTimers;
 /** @type {!Sinon.SinonFakeTimers} */
Sinon.SinonStatic.prototype.clock;
/**
 * @record
 * @struct
 */
Sinon.SinonFakeUploadProgress = function() {};
 /** @type {{progress: !Array<?>, load: !Array<?>, abort: !Array<?>, error: !Array<?>}} */
Sinon.SinonFakeUploadProgress.prototype.eventListeners;

/**
 * @param {string} event
 * @param {function(?): ?} listener
 * @return {void}
 */
Sinon.SinonFakeUploadProgress.prototype.addEventListener = function(event, listener) {};

/**
 * @param {string} event
 * @param {function(?): ?} listener
 * @return {void}
 */
Sinon.SinonFakeUploadProgress.prototype.removeEventListener = function(event, listener) {};

/**
 * @param {?} event
 * @return {void}
 */
Sinon.SinonFakeUploadProgress.prototype.dispatchEvent = function(event) {};
/**
 * @record
 * @struct
 */
Sinon.SinonFakeXMLHttpRequest = function() {};
 /** @type {string} */
Sinon.SinonFakeXMLHttpRequest.prototype.url;
 /** @type {string} */
Sinon.SinonFakeXMLHttpRequest.prototype.method;
 /** @type {?} */
Sinon.SinonFakeXMLHttpRequest.prototype.requestHeaders;
 /** @type {string} */
Sinon.SinonFakeXMLHttpRequest.prototype.requestBody;
 /** @type {number} */
Sinon.SinonFakeXMLHttpRequest.prototype.status;
 /** @type {string} */
Sinon.SinonFakeXMLHttpRequest.prototype.statusText;
 /** @type {boolean} */
Sinon.SinonFakeXMLHttpRequest.prototype.async;
 /** @type {string} */
Sinon.SinonFakeXMLHttpRequest.prototype.username;
 /** @type {string} */
Sinon.SinonFakeXMLHttpRequest.prototype.password;
 /** @type {boolean} */
Sinon.SinonFakeXMLHttpRequest.prototype.withCredentials;
 /** @type {!Sinon.SinonFakeUploadProgress} */
Sinon.SinonFakeXMLHttpRequest.prototype.upload;
 /** @type {?} */
Sinon.SinonFakeXMLHttpRequest.prototype.responseXML;
 /** @type {boolean} */
Sinon.SinonFakeXMLHttpRequest.prototype.useFilters;

/**
 * @param {!Sinon.SinonFakeXMLHttpRequest} xhr
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.onCreate = function(xhr) {};

/**
 * @param {string} header
 * @return {string}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.getResponseHeader = function(header) {};

/**
 * @return {?}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.getAllResponseHeaders = function() {};

/**
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.restore = function() {};

/**
 * @param {function(string, string, boolean, string, string): boolean} filter
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.addFilter = function(filter) {};

/**
 * @param {?} headers
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.setResponseHeaders = function(headers) {};

/**
 * @param {string} body
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.setResponseBody = function(body) {};

/**
 * @param {number} status
 * @param {?} headers
 * @param {string} body
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.respond = function(status, headers, body) {};

/**
 * @param {number} ms
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.autoRespond = function(ms) {};

/**
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.error = function() {};

/**
 * @return {void}
 */
Sinon.SinonFakeXMLHttpRequest.prototype.onerror = function() {};

/** @typedef {function(): !Sinon.SinonFakeXMLHttpRequest} */
Sinon.SinonFakeXMLHttpRequestStatic;
 /** @type {function(): !Sinon.SinonFakeXMLHttpRequest} */
Sinon.SinonStatic.prototype.useFakeXMLHttpRequest;
 /** @type {!Sinon.SinonFakeXMLHttpRequest} */
Sinon.SinonStatic.prototype.FakeXMLHttpRequest;
/**
 * @record
 * @struct
 */
Sinon.SinonFakeServer = function() {};
 /** @type {boolean} */
Sinon.SinonFakeServer.prototype.autoRespond;
 /** @type {number} */
Sinon.SinonFakeServer.prototype.autoRespondAfter;
 /** @type {boolean} */
Sinon.SinonFakeServer.prototype.fakeHTTPMethods;
 /** @type {!Array<!Sinon.SinonFakeXMLHttpRequest>} */
Sinon.SinonFakeServer.prototype.requests;
 /** @type {boolean} */
Sinon.SinonFakeServer.prototype.respondImmediately;

/**
 * @param {!Sinon.SinonFakeXMLHttpRequest} request
 * @return {string}
 */
Sinon.SinonFakeServer.prototype.getHTTPMethod = function(request) {};

/**
 * @param {string|!Array<?>|function(!Sinon.SinonFakeXMLHttpRequest): void|!RegExp} body_or_response_or_fn_or_url_or_method
 * @param {string|!Array<?>|function(!Sinon.SinonFakeXMLHttpRequest): void|!RegExp=} body_or_response_or_fn_or_url
 * @param {string|!Array<?>|function(!Sinon.SinonFakeXMLHttpRequest): void=} body_or_response_or_fn
 * @return {void}
 */
Sinon.SinonFakeServer.prototype.respondWith = function(body_or_response_or_fn_or_url_or_method, body_or_response_or_fn_or_url, body_or_response_or_fn) {};

/**
 * @return {void}
 */
Sinon.SinonFakeServer.prototype.respond = function() {};

/**
 * @return {void}
 */
Sinon.SinonFakeServer.prototype.restore = function() {};
/**
 * @record
 * @struct
 */
Sinon.SinonFakeServerStatic = function() {};

/**
 * @return {!Sinon.SinonFakeServer}
 */
Sinon.SinonFakeServerStatic.prototype.create = function() {};
 /** @type {!Sinon.SinonFakeServerStatic} */
Sinon.SinonStatic.prototype.fakeServer;
 /** @type {!Sinon.SinonFakeServerStatic} */
Sinon.SinonStatic.prototype.fakeServerWithClock;
/**
 * @record
 * @struct
 */
Sinon.SinonExposeOptions = function() {};
 /** @type {string} */
Sinon.SinonExposeOptions.prototype.prefix;
 /** @type {boolean} */
Sinon.SinonExposeOptions.prototype.includeFail;
/**
 * @record
 * @struct
 */
Sinon.SinonAssert = function() {};
 /** @type {string} */
Sinon.SinonAssert.prototype.failException;

/**
 * @param {string=} message
 * @return {void}
 */
Sinon.SinonAssert.prototype.fail = function(message) {};

/**
 * @param {?} assertion
 * @return {void}
 */
Sinon.SinonAssert.prototype.pass = function(assertion) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @return {void}
 */
Sinon.SinonAssert.prototype.notCalled = function(spy) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @return {void}
 */
Sinon.SinonAssert.prototype.called = function(spy) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledOnce = function(spy) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledTwice = function(spy) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledThrice = function(spy) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {number} count
 * @return {void}
 */
Sinon.SinonAssert.prototype.callCount = function(spy, count) {};

/**
 * @param {...!Sinon.SinonSpy} spies
 * @return {void}
 */
Sinon.SinonAssert.prototype.callOrder = function(spies) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {?} obj
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledOn = function(spy, obj) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {?} obj
 * @return {void}
 */
Sinon.SinonAssert.prototype.alwaysCalledOn = function(spy, obj) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledWith = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.alwaysCalledWith = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.neverCalledWith = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledWithExactly = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.alwaysCalledWithExactly = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.calledWithMatch = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.alwaysCalledWithMatch = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {...?} args
 * @return {void}
 */
Sinon.SinonAssert.prototype.neverCalledWithMatch = function(spy, args) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {string|?=} exception
 * @return {void}
 */
Sinon.SinonAssert.prototype.threw = function(spy, exception) {};

/**
 * @param {!Sinon.SinonSpy} spy
 * @param {string|?=} exception
 * @return {void}
 */
Sinon.SinonAssert.prototype.alwaysThrew = function(spy, exception) {};

/**
 * @param {?} obj
 * @param {!Sinon.SinonExposeOptions=} options
 * @return {void}
 */
Sinon.SinonAssert.prototype.expose = function(obj, options) {};
 /** @type {!Sinon.SinonAssert} */
Sinon.SinonStatic.prototype.assert;
/**
 * @record
 * @struct
 */
Sinon.SinonMatcher = function() {};

/**
 * @param {!Sinon.SinonMatcher} expr
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatcher.prototype.and = function(expr) {};

/**
 * @param {!Sinon.SinonMatcher} expr
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatcher.prototype.or = function(expr) {};
/**
 * @extends {Sinon.SinonMatcher}
 * @record
 * @struct
 */
Sinon.SinonArrayMatcher = function() {};

/**
 * Requires an Array to be deep equal another one.
 * @param {!Array<?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonArrayMatcher.prototype.deepEquals = function(expected) {};

/**
 * Requires an Array to start with the same values as another one.
 * @param {!Array<?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonArrayMatcher.prototype.startsWith = function(expected) {};

/**
 * Requires an Array to end with the same values as another one.
 * @param {!Array<?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonArrayMatcher.prototype.endsWith = function(expected) {};

/**
 * Requires an Array to contain each one of the values the given array has.
 * @param {!Array<?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonArrayMatcher.prototype.contains = function(expected) {};
/**
 * @extends {Sinon.SinonMatcher}
 * @record
 * @struct
 */
Sinon.SinonMapMatcher = function() {};

/**
 * Requires a Map to be deep equal another one.
 * @param {!Map<?, ?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMapMatcher.prototype.deepEquals = function(expected) {};

/**
 * Requires a Map to contain each one of the items the given map has.
 * @param {!Map<?, ?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMapMatcher.prototype.contains = function(expected) {};
/**
 * @extends {Sinon.SinonMatcher}
 * @record
 * @struct
 */
Sinon.SinonSetMatcher = function() {};

/**
 *  Requires a Set to be deep equal another one.
 * @param {!Set<?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonSetMatcher.prototype.deepEquals = function(expected) {};

/**
 * Requires a Set to contain each one of the items the given set has.
 * @param {!Set<?>} expected
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonSetMatcher.prototype.contains = function(expected) {};
/**
 * @record
 * @struct
 */
Sinon.SinonMatch = function() {};

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */

/* TODO: CallSignature: Sinon */
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.any;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.defined;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.truthy;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.falsy;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.bool;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.number;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.string;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.object;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.func;
 /** @type {!Sinon.SinonMapMatcher} */
Sinon.SinonMatch.prototype.map;
 /** @type {!Sinon.SinonSetMatcher} */
Sinon.SinonMatch.prototype.set;
 /** @type {!Sinon.SinonArrayMatcher} */
Sinon.SinonMatch.prototype.array;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.regexp;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.date;
 /** @type {!Sinon.SinonMatcher} */
Sinon.SinonMatch.prototype.symbol;

/**
 * @param {?} obj
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatch.prototype.same = function(obj) {};

/**
 * @param {string} type
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatch.prototype.typeOf = function(type) {};

/**
 * @param {?} type
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatch.prototype.instanceOf = function(type) {};

/**
 * @param {string} property
 * @param {?=} expect
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatch.prototype.has = function(property, expect) {};

/**
 * @param {string} property
 * @param {?=} expect
 * @return {!Sinon.SinonMatcher}
 */
Sinon.SinonMatch.prototype.hasOwn = function(property, expect) {};
 /** @type {!Sinon.SinonMatch} */
Sinon.SinonStatic.prototype.match;
/**
 * @record
 * @struct
 */
Sinon.SinonSandboxConfig = function() {};
 /** @type {?} */
Sinon.SinonSandboxConfig.prototype.injectInto;
 /** @type {!Array<string>} */
Sinon.SinonSandboxConfig.prototype.properties;
 /** @type {?} */
Sinon.SinonSandboxConfig.prototype.useFakeTimers;
 /** @type {?} */
Sinon.SinonSandboxConfig.prototype.useFakeServer;
/**
 * @record
 * @struct
 */
Sinon.SinonSandbox = function() {};
 /** @type {!Sinon.SinonAssert} */
Sinon.SinonSandbox.prototype.assert;
 /** @type {!Sinon.SinonFakeTimers} */
Sinon.SinonSandbox.prototype.clock;
 /** @type {!Sinon.SinonFakeXMLHttpRequest} */
Sinon.SinonSandbox.prototype.requests;
 /** @type {!Sinon.SinonFakeServer} */
Sinon.SinonSandbox.prototype.server;
 /** @type {!Sinon.SinonSpyStatic} */
Sinon.SinonSandbox.prototype.spy;
 /** @type {!Sinon.SinonStubStatic} */
Sinon.SinonSandbox.prototype.stub;
 /** @type {!Sinon.SinonMockStatic} */
Sinon.SinonSandbox.prototype.mock;
 /** @type {!Sinon.SinonFakeTimersStatic} */
Sinon.SinonSandbox.prototype.useFakeTimers;
 /** @type {function(): !Sinon.SinonFakeXMLHttpRequest} */
Sinon.SinonSandbox.prototype.useFakeXMLHttpRequest;

/**
 * @return {!Sinon.SinonFakeServer}
 */
Sinon.SinonSandbox.prototype.useFakeServer = function() {};

/**
 * @return {void}
 */
Sinon.SinonSandbox.prototype.restore = function() {};

/**
 * @return {void}
 */
Sinon.SinonSandbox.prototype.reset = function() {};

/**
 * @return {void}
 */
Sinon.SinonSandbox.prototype.resetHistory = function() {};

/**
 * @return {void}
 */
Sinon.SinonSandbox.prototype.resetBehavior = function() {};

/**
 * @param {?} promiseLibrary
 * @return {!Sinon.SinonSandbox}
 */
Sinon.SinonSandbox.prototype.usingPromise = function(promiseLibrary) {};

/**
 * @return {void}
 */
Sinon.SinonSandbox.prototype.verify = function() {};

/**
 * @return {void}
 */
Sinon.SinonSandbox.prototype.verifyAndRestore = function() {};
/**
 * @record
 * @struct
 */
Sinon.SinonSandboxStatic = function() {};

/**
 * @param {!Sinon.SinonSandboxConfig=} config
 * @return {!Sinon.SinonSandbox}
 */
Sinon.SinonSandboxStatic.prototype.create = function(config) {};
 /** @type {!Sinon.SinonSandboxStatic} */
Sinon.SinonStatic.prototype.sandbox;
/**
 * @record
 * @struct
 */
Sinon.SinonTestConfig = function() {};
 /** @type {boolean} */
Sinon.SinonTestConfig.prototype.injectIntoThis;
 /** @type {?} */
Sinon.SinonTestConfig.prototype.injectInto;
 /** @type {!Array<string>} */
Sinon.SinonTestConfig.prototype.properties;
 /** @type {boolean} */
Sinon.SinonTestConfig.prototype.useFakeTimers;
 /** @type {boolean} */
Sinon.SinonTestConfig.prototype.useFakeServer;
/**
 * @extends {Sinon.SinonSandbox}
 * @record
 * @struct
 */
Sinon.SinonTestWrapper = function() {};

/* TODO: CallSignature: Sinon */

/**
 * Creates a new object with the given functions as the prototype and stubs all implemented functions.
 * 
 * \@remarks The given constructor function is not invoked. See also the stub API.
 * Creates a new object with the given functions as the prototype and stubs all implemented functions.
 * 
 * \@remarks The given constructor function is not invoked. See also the stub API.
 * @template TType
 * @param {?|!Sinon.StubbableType<TType>} constructor   Object or class to stub.
 * @return {?} A stubbed version of the constructor.
 */
Sinon.SinonStatic.prototype.createStubInstance = function(constructor) {};

/**
 * @param {?} obj
 * @return {string}
 */
Sinon.SinonStatic.prototype.format = function(obj) {};

/**
 * @param {?} object
 * @return {void}
 */
Sinon.SinonStatic.prototype.restore = function(object) {};
/**
 * @record
 * @struct
 */
Sinon.StubbableType = function() {};

/* TODO: ConstructSignature: Sinon */

/** @typedef {?} */
Sinon.SinonStubbedInstance;
 /** @type {!Sinon.SinonStatic} */
var Sinon;

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */