/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ractive/index.d.ts:

/** @typedef {!Event} */
var _RactiveEvent;
/** @const */
var Ractive = {};
/**
 * @record
 * @struct
 */
Ractive.Node = function() {};
 /** @type {?} */
Ractive.Node.prototype._ractive;
/**
 * @record
 * @struct
 */
Ractive.Promise = function() {};
/**
 * @extends {Ractive.Promise}
 * @record
 * @struct
 */
Ractive.AnimationPromise = function() {};

/**
 * @return {void}
 */
Ractive.AnimationPromise.prototype.stop = function() {};
/**
 * @record
 * @struct
 */
Ractive.AdaptorPlugin = function() {};
/**
 * @extends {Ractive.Static}
 * @record
 * @struct
 */
Ractive.ComponentPlugin = function() {};
/**
 * @record
 * @struct
 */
Ractive.DecoratorPlugin = function() {};

/* TODO: CallSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.EventPlugin = function() {};
/**
 * @record
 * @struct
 */
Ractive.TransitionPlugin = function() {};

/* TODO: CallSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.AdaptorPlugins = function() {};

/* TODO: IndexSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.ComponentPlugins = function() {};

/* TODO: IndexSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.DecoratorPlugins = function() {};

/* TODO: IndexSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.EventPlugins = function() {};

/* TODO: IndexSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.TransitionPlugins = function() {};

/* TODO: IndexSignature: Ractive */
/**
 * @record
 * @struct
 */
Ractive.Event = function() {};
 /** @type {?} */
Ractive.Event.prototype.context;
 /** @type {!Ractive.Ractive} */
Ractive.Event.prototype.component;
 /** @type {!Object<string,number>} */
Ractive.Event.prototype.index;
 /** @type {string} */
Ractive.Event.prototype.keypath;
 /** @type {string} */
Ractive.Event.prototype.name;
 /** @type {!HTMLElement} */
Ractive.Event.prototype.node;
 /** @type {!Event} */
Ractive.Event.prototype.original;
/**
 * @record
 * @struct
 */
Ractive.NodeInfo = function() {};
 /** @type {!Ractive.Ractive} */
Ractive.NodeInfo.prototype.ractive;
 /** @type {string} */
Ractive.NodeInfo.prototype.keypath;
 /** @type {!Object<string,number>} */
Ractive.NodeInfo.prototype.index;
/**
 * @record
 * @struct
 */
Ractive.Observe = function() {};

/**
 * @return {void}
 */
Ractive.Observe.prototype.cancel = function() {};
/**
 * @record
 * @struct
 */
Ractive.Transition = function() {};
 /** @type {boolean} */
Ractive.Transition.prototype.isIntro;
 /** @type {string} */
Ractive.Transition.prototype.name;
 /** @type {!HTMLElement} */
Ractive.Transition.prototype.node;

/**
 * @param {string|!Object} prop_or_props
 * @param {?|!Ractive.TransitionAnimateOptions} value_or_options
 * @param {!Ractive.TransitionAnimateOptions|!Function} options_or_complete
 * @param {!Function=} complete
 * @return {void}
 */
Ractive.Transition.prototype.animateStyle = function(prop_or_props, value_or_options, options_or_complete, complete) {};

/**
 * @param {boolean=} noReset
 * @return {void}
 */
Ractive.Transition.prototype.complete = function(noReset) {};

/**
 * @param {string|!Array<string>} prop_or_props
 * @return {string|!Object}
 */
Ractive.Transition.prototype.getStyle = function(prop_or_props) {};

/**
 * @param {?} params
 * @param {!Object=} defaults
 * @return {!Object}
 */
Ractive.Transition.prototype.processParams = function(params, defaults) {};

/**
 * @return {void}
 */
Ractive.Transition.prototype.resetStyle = function() {};

/**
 * @param {string|!Object} prop_or_props
 * @param {?=} value
 * @return {!Ractive.Transition}
 */
Ractive.Transition.prototype.setStyle = function(prop_or_props, value) {};
/**
 * @record
 * @struct
 */
Ractive.TransitionAnimateOptions = function() {};
 /** @type {number} */
Ractive.TransitionAnimateOptions.prototype.duration;
 /** @type {string} */
Ractive.TransitionAnimateOptions.prototype.easing;
 /** @type {number} */
Ractive.TransitionAnimateOptions.prototype.delay;
/**
 * @record
 * @struct
 */
Ractive.AnimateOptions = function() {};
 /** @type {number} */
Ractive.AnimateOptions.prototype.duration;
 /** @type {(string|!Function)} */
Ractive.AnimateOptions.prototype.easing;
 /** @type {function(number, number): void} */
Ractive.AnimateOptions.prototype.step;
 /** @type {function(number, number): void} */
Ractive.AnimateOptions.prototype.complate;
/**
 * @extends {Ractive.ObserveOnceOptions}
 * @record
 * @struct
 */
Ractive.ObserveOptions = function() {};
 /** @type {boolean} */
Ractive.ObserveOptions.prototype.init;
/**
 * @record
 * @struct
 */
Ractive.ObserveOnceOptions = function() {};
 /** @type {?} */
Ractive.ObserveOnceOptions.prototype.context;
 /** @type {boolean} */
Ractive.ObserveOnceOptions.prototype.defer;
/**
 * @record
 * @struct
 */
Ractive.ParseOptions = function() {};
 /** @type {boolean} */
Ractive.ParseOptions.prototype.preserveWhitespace;
 /** @type {?} */
Ractive.ParseOptions.prototype.sanitize;
/**
 * @record
 * @struct
 */
Ractive.SanitizeOptions = function() {};
 /** @type {!Array<string>} */
Ractive.SanitizeOptions.prototype.elements;
 /** @type {boolean} */
Ractive.SanitizeOptions.prototype.eventAttributes;
/**
 * @record
 * @struct
 */
Ractive.NewOptions = function() {};
 /** @type {!Array<(string|!Ractive.AdaptorPlugin)>} */
Ractive.NewOptions.prototype.adapt;
 /** @type {!Ractive.AdaptorPlugins} */
Ractive.NewOptions.prototype.adaptors;
 /** @type {?} */
Ractive.NewOptions.prototype.append;
 /** @type {!Function} */
Ractive.NewOptions.prototype.complete;
 /** @type {!Ractive.ComponentPlugins} */
Ractive.NewOptions.prototype.components;
 /** @type {!Object} */
Ractive.NewOptions.prototype.computed;
 /** @type {string} */
Ractive.NewOptions.prototype.css;
 /** @type {(!Object|!Function)} */
Ractive.NewOptions.prototype.data;
 /** @type {!Ractive.DecoratorPlugins} */
Ractive.NewOptions.prototype.decorators;
 /** @type {!Array<string>} */
Ractive.NewOptions.prototype.delimiters;
 /** @type {(string|!Function)} */
Ractive.NewOptions.prototype.easing;
 /** @type {?} */
Ractive.NewOptions.prototype.el;
 /** @type {!Ractive.EventPlugins} */
Ractive.NewOptions.prototype.events;
 /** @type {!Object<string,?>} */
Ractive.NewOptions.prototype.interpolators;
 /** @type {function(!Ractive.NewOptions): void} */
Ractive.NewOptions.prototype.onchange;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.oncomplete;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.onconfig;
 /** @type {function(!Ractive.NewOptions): void} */
Ractive.NewOptions.prototype.onconstruct;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.ondetach;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.oninit;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.oninsert;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.onrender;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.onunrender;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.onupdate;
 /** @type {function(): void} */
Ractive.NewOptions.prototype.onteardown;
 /** @type {!Object<string,?>} */
Ractive.NewOptions.prototype.partials;
 /** @type {(boolean|!Ractive.SanitizeOptions)} */
Ractive.NewOptions.prototype.sanitize;
 /** @type {!Array<string>} */
Ractive.NewOptions.prototype.staticDelimiters;
 /** @type {!Array<string>} */
Ractive.NewOptions.prototype.staticTripleDelimiters;
 /** @type {?} */
Ractive.NewOptions.prototype.template;
 /** @type {!Ractive.TransitionPlugins} */
Ractive.NewOptions.prototype.transitions;
 /** @type {!Array<string>} */
Ractive.NewOptions.prototype.tripleDelimiters;
 /** @type {boolean} */
Ractive.NewOptions.prototype.lazy;
 /** @type {boolean} */
Ractive.NewOptions.prototype.magic;
 /** @type {boolean} */
Ractive.NewOptions.prototype.modifyArrays;
 /** @type {boolean} */
Ractive.NewOptions.prototype.noCSSTransform;
 /** @type {boolean} */
Ractive.NewOptions.prototype.noIntro;
 /** @type {boolean} */
Ractive.NewOptions.prototype.preserveWhitespace;
 /** @type {boolean} */
Ractive.NewOptions.prototype.stripComments;
 /** @type {boolean} */
Ractive.NewOptions.prototype.transitionsEnabled;
 /** @type {boolean} */
Ractive.NewOptions.prototype.twoway;
/**
 * @extends {Ractive.NewOptions}
 * @record
 * @struct
 */
Ractive.ExtendOptions = function() {};
 /** @type {function(!Ractive.ExtendOptions): void} */
Ractive.ExtendOptions.prototype.beforeInit;
 /** @type {function(!Ractive.ExtendOptions): void} */
Ractive.ExtendOptions.prototype.init;
 /** @type {boolean} */
Ractive.ExtendOptions.prototype.isolated;
/**
 * @extends {Ractive.ExtendOptions}
 * @record
 * @struct
 */
Ractive.DefaultsOptions = function() {};
 /** @type {boolean} */
Ractive.DefaultsOptions.prototype.debug;
/**
 * @record
 * @struct
 */
Ractive.Static = function() {};

/* TODO: ConstructSignature: Ractive */
 /** @type {!Ractive.AdaptorPlugins} */
Ractive.Static.prototype.adaptors;
 /** @type {!Ractive.ComponentPlugins} */
Ractive.Static.prototype.components;
 /** @type {boolean} */
Ractive.Static.prototype.DEBUG;
 /** @type {!Ractive.DefaultsOptions} */
Ractive.Static.prototype.defaults;
 /** @type {!Ractive.DecoratorPlugins} */
Ractive.Static.prototype.decorators;
 /** @type {!Object<string,function(number): number>} */
Ractive.Static.prototype.easing;
 /** @type {!Ractive.EventPlugins} */
Ractive.Static.prototype.events;
 /** @type {!Object<string,?>} */
Ractive.Static.prototype.partials;
 /** @type {!Ractive.Promise} */
Ractive.Static.prototype.Promise;
 /** @type {!Ractive.TransitionPlugins} */
Ractive.Static.prototype.transitions;

/**
 * @param {!Ractive.ExtendOptions} options
 * @return {!Ractive.Static}
 */
Ractive.Static.prototype.extend = function(options) {};

/**
 * @param {!HTMLElement} node
 * @return {!Ractive.NodeInfo}
 */
Ractive.Static.prototype.getNodeInfo = function(node) {};

/**
 * @param {string} template
 * @param {!Ractive.ParseOptions=} options
 * @return {?}
 */
Ractive.Static.prototype.parse = function(template, options) {};
/**
 * @record
 * @struct
 */
Ractive.Ractive = function() {};
 /** @type {!Ractive.Ractive} */
Ractive.Ractive.prototype.container;
 /** @type {!Object} */
Ractive.Ractive.prototype.nodes;
 /** @type {!Object} */
Ractive.Ractive.prototype.partials;
 /** @type {!Ractive.Ractive} */
Ractive.Ractive.prototype.parent;
 /** @type {!Ractive.Ractive} */
Ractive.Ractive.prototype.root;
 /** @type {!Object} */
Ractive.Ractive.prototype.transitions;

/**
 * @param {string} keypath
 * @param {number=} number
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.add = function(keypath, number) {};

/**
 * @param {string|!Object} keypath_or_map
 * @param {?|!Ractive.AnimateOptions=} value_or_options
 * @param {!Ractive.AnimateOptions=} options
 * @return {!Ractive.AnimationPromise}
 */
Ractive.Ractive.prototype.animate = function(keypath_or_map, value_or_options, options) {};

/**
 * @return {!DocumentFragment}
 */
Ractive.Ractive.prototype.detach = function() {};

/**
 * @param {string} selector
 * @return {!HTMLElement}
 */
Ractive.Ractive.prototype.find = function(selector) {};

/**
 * @param {string} selector
 * @param {{live: boolean}=} options
 * @return {!Array<!HTMLElement>}
 */
Ractive.Ractive.prototype.findAll = function(selector, options) {};

/**
 * @param {string} name
 * @param {{live: boolean}=} options
 * @return {!Array<!Ractive.Ractive>}
 */
Ractive.Ractive.prototype.findAllComponents = function(name, options) {};

/**
 * @param {string=} name
 * @return {!Ractive.Ractive}
 */
Ractive.Ractive.prototype.findComponent = function(name) {};

/**
 * @param {string} name
 * @return {!Ractive.Ractive}
 */
Ractive.Ractive.prototype.findContainer = function(name) {};

/**
 * @param {string} name
 * @return {!Ractive.Ractive}
 */
Ractive.Ractive.prototype.findParent = function(name) {};

/**
 * @param {string} eventName
 * @param {...?} args
 * @return {void}
 */
Ractive.Ractive.prototype.fire = function(eventName, args) {};

/**
 * @param {string=} keypath
 * @return {?|!Object}
 */
Ractive.Ractive.prototype.get = function(keypath) {};

/**
 * @param {?} target
 * @param {?=} anchor
 * @return {void}
 */
Ractive.Ractive.prototype.insert = function(target, anchor) {};

/**
 * @param {string} keypath
 * @param {!Array<?>} value
 * @param {{compare: (string|boolean|!Function)}=} options
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.merge = function(keypath, value, options) {};

/**
 * @param {string|!Object} keypath_or_map
 * @param {function(?, ?, string): void|!Ractive.ObserveOptions=} callback_or_options
 * @param {!Ractive.ObserveOptions=} options
 * @return {!Ractive.Observe}
 */
Ractive.Ractive.prototype.observe = function(keypath_or_map, callback_or_options, options) {};

/**
 * @param {string} keypath
 * @param {function(?, ?, string): void} callback
 * @param {!Ractive.ObserveOnceOptions=} options
 * @return {!Ractive.Observe}
 */
Ractive.Ractive.prototype.observeOnce = function(keypath, callback, options) {};

/**
 * @param {string=} eventName
 * @param {function(?, !Array<?>): ?=} handler
 * @return {!Ractive.Ractive}
 */
Ractive.Ractive.prototype.off = function(eventName, handler) {};

/**
 * @param {string|!Object<string,function(?, !Array<?>): ?>} eventName_or_map
 * @param {function(?, !Array<?>): ?=} handler
 * @return {!Ractive.Observe}
 */
Ractive.Ractive.prototype.on = function(eventName_or_map, handler) {};

/**
 * @param {string} eventName
 * @param {function(?, !Array<?>): ?} handler
 * @return {!Ractive.Observe}
 */
Ractive.Ractive.prototype.once = function(eventName, handler) {};

/**
 * @param {string} keypath
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.pop = function(keypath) {};

/**
 * @param {string} keypath
 * @param {?} value
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.push = function(keypath, value) {};

/**
 * @param {?} target
 * @return {void}
 */
Ractive.Ractive.prototype.render = function(target) {};

/**
 * @param {!Object=} data
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.reset = function(data) {};

/**
 * @param {string} name
 * @param {?} partial
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.resetPartial = function(name, partial) {};

/**
 * @return {void}
 */
Ractive.Ractive.prototype.resetTemplate = function() {};

/**
 * @param {string|!Object} keypath_or_map
 * @param {?=} value
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.set = function(keypath_or_map, value) {};

/**
 * @param {string} keypath
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.shift = function(keypath) {};

/**
 * @param {string} keypath
 * @param {number} index
 * @param {number} removeCount
 * @param {...?} add
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.splice = function(keypath, index, removeCount, add) {};

/**
 * @param {string} keypath
 * @param {number=} number
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.subtract = function(keypath, number) {};

/**
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.teardown = function() {};

/**
 * @param {string} keypath
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.toggle = function(keypath) {};

/**
 * @return {string}
 */
Ractive.Ractive.prototype.toHTML = function() {};

/**
 * @return {void}
 */
Ractive.Ractive.prototype.unrender = function() {};

/**
 * @param {string} keypath
 * @param {?} value
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.unshift = function(keypath, value) {};

/**
 * @param {string=} keypath
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.update = function(keypath) {};

/**
 * Update out of sync two-way bindings
 * @param {string=} keypath A string
 * @param {boolean=} cascade A boolean with default false
 * @return {!Ractive.Promise}
 */
Ractive.Ractive.prototype.updateModel = function(keypath, cascade) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "ractive"
/** @const */
tsickle_declare_module.ractive = {};

/* TODO: ExportAssignment in tsickle_declare_module.ractive */
 /** @type {!Ractive.Static} */
var Ractive;