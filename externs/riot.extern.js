/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/riot/index.d.ts:
 /** @type {string} */
var version;
/**
 * @record
 * @struct
 */
function Settings() {}
 /** @type {string} */
Settings.prototype.brackets;
 /** @type {boolean} */
Settings.prototype.skipAnonymousTags;
 /** @type {boolean} */
Settings.prototype.autoUpdate;
 /** @type {number} */
Settings.prototype.asyncRenderTimeout;
 /** @type {?} */
var settings;
/**
 * @record
 * @struct
 */
function TemplateError() {}
 /** @type {?} */
TemplateError.prototype.riotData;
/**
 * @record
 * @struct
 */
function Tmpl() {}

/* TODO: CallSignature:  */
 /** @type {string} */
Tmpl.prototype.version;

/**
 * Utility hook function to catch all the errors swallowed by the riot template engine
 * @param {?} error
 * @return {void}
 */
Tmpl.prototype.errorHandler = function(error) {};
/**
 * @record
 * @struct
 */
function StyleManager() {}
 /** @type {!HTMLStyleElement} */
StyleManager.prototype.styleNode;

/**
 * Save a tag style to be later injected into DOM
 * @param {string} css
 * @param {string=} name
 * @return {void}
 */
StyleManager.prototype.add = function(css, name) {};

/**
 * Inject all previously saved tag styles into DOM
 * @return {void}
 */
StyleManager.prototype.inject = function() {};
/**
 * @record
 * @struct
 */
function DOMUtil() {}

/**
 * Select multiple nodes in the DOM
 * @param {string} selector - DOM selector
 * @param {!Element=} ctx - DOM node where the targets of our search will is located
 * @return {!Array<!Element>} DOM nodes found
 */
DOMUtil.prototype.$$ = function(selector, ctx) {};

/**
 * Select a single node in the DOM
 * @param {string} selector - unique dom selector
 * @param {!Element=} ctx - DOM node where the target of search will is located
 * @return {!Element} DOM node found
 */
DOMUtil.prototype.$ = function(selector, ctx) {};

/**
 * Create a document fragment
 * @return {!DocumentFragment} Document fragment
 */
DOMUtil.prototype.createFrag = function() {};

/**
 * Create a document text node
 * @return {!Text} Text node
 */
DOMUtil.prototype.createDOMPlaceholder = function() {};

/**
 * Check if a DOM node is an svg element
 * @param {!Element} element - node to check
 * @return {boolean}
 */
DOMUtil.prototype.isSvg = function(element) {};

/**
 * Create a generic DOM node
 * @param {string} name - name of the DOM node
 * @return {!Element} Created element
 */
DOMUtil.prototype.mkEl = function(name) {};

/**
 * Set the inner html of any DOM node SVGs included
 * @param {!Element} container - DOM node where html should be injected
 * @param {string} html - html to inject
 * @return {void}
 */
DOMUtil.prototype.setInnerHTML = function(container, html) {};

/**
 * Toggle the visibility of a DOM node
 * @param {!Element} element - DOM node to update visibility for
 * @param {boolean=} show - If true element is shown
 * @return {void}
 */
DOMUtil.prototype.toggleVisibility = function(element, show) {};

/**
 * Remove any DOM attribute from a node
 * @param {!Element} element - DOM node to update
 * @param {string} name - name of the attribute
 * @return {void}
 */
DOMUtil.prototype.remAttr = function(element, name) {};

/**
 * Get the value of any DOM attribute on a node
 * @param {!Element} element - DOM node
 * @param {string} name - name of the attribute
 * @return {string} Attribute value
 */
DOMUtil.prototype.getAttr = function(element, name) {};

/**
 * Set any DOM attribute
 * @param {!Element} element - DOM node we want to update
 * @param {string} name - name of the property we want to set
 * @param {string} value - value of the property we want to set
 * @return {void}
 */
DOMUtil.prototype.setAttr = function(element, name, value) {};

/**
 * Convert a style object to a string
 * @param {?} style - style object to parse
 * @return {string} Resulting css string
 */
DOMUtil.prototype.styleObjectToString = function(style) {};

/**
 * Insert tag safely
 * @param {!Node} root - children container
 * @param {!Node} curr - node to insert
 * @param {!Node} next - node that should precede inserted node
 * @return {void}
 */
DOMUtil.prototype.safeInsert = function(root, curr, next) {};

/**
 * Run callback function for each attribute in html string
 * @param {string} html - html string we want to parse
 * @param {?} fn - callback function to apply on found attributes
 * @return {void}
 */
DOMUtil.prototype.walkAttrs = function(html, fn) {};

/**
 * Walk down recursively through all child nodes starting with provided dom node
 * @param {!Node} node - starting node where we will start the recursion
 * @param {?} fn - callback to transform the child node just found
 * @param {?} context - fn can optionally return an object, which is passed to children
 * @return {void}
 */
DOMUtil.prototype.walkNodes = function(node, fn, context) {};
/**
 * @record
 * @struct
 */
function CheckUtil() {}

/**
 * Check if provided value is name of boolean attribute
 * @param {string} value - name to check
 * @return {boolean} True if value is name of boolean attribute
 */
CheckUtil.prototype.isBoolAttr = function(value) {};

/**
 * Check if provided value is a function
 * @param {?} value - reference to check
 * @return {boolean} True if provided value is a function
 */
CheckUtil.prototype.isFunction = function(value) {};

/**
 * Check if provided value is an object (null excluded)
 * @param {?} value - reference to check
 * @return {boolean} True if provided value is an object
 */
CheckUtil.prototype.isObject = function(value) {};

/**
 * Check if provided value is undefined
 * @param {?} value - reference to check
 * @return {boolean} True if provided value is undefined
 */
CheckUtil.prototype.isUndefined = function(value) {};

/**
 * Check if provided value is a string
 * @param {?} value - reference to check
 * @return {boolean} True if provided value is a string
 */
CheckUtil.prototype.isString = function(value) {};

/**
 * Check if provided value is empty. Different from falsy, because 0 or false are not considered to be blank
 * @param {?} value - value to check
 * @return {boolean} True if provided value is undefined, null or empty string
 */
CheckUtil.prototype.isBlank = function(value) {};

/**
 * Check if provided value is an array
 * @param {?} value - reference to check
 * @return {boolean} True if provided value is an array
 */
CheckUtil.prototype.isArray = function(value) {};

/**
 * Check whether object's property could be overridden
 * @param {?} obj - source object
 * @param {string} key - object property
 * @return {boolean} True if value for specified key can be overridden
 */
CheckUtil.prototype.isWritable = function(obj, key) {};

/**
 * Check if provided string is a reserved name for Riot tag instances
 * @param {string} value - name to check
 * @return {boolean} True if provided string is a reserved name
 */
CheckUtil.prototype.isReservedName = function(value) {};
/**
 * @record
 * @struct
 */
function MiscUtil() {}

/**
 * Specialized function for looping over array-like collections
 * @param {?} list - collection of items
 * @param {?} fn - callback applied to each item
 * @return {void}
 */
MiscUtil.prototype.each = function(list, fn) {};

/**
 * Check whether an array contains an item
 * @param {!Array<?>} arr - target array
 * @param {?} item - item to test
 * @return {boolean} True if array contains item
 */
MiscUtil.prototype.contains = function(arr, item) {};

/**
 * Convert a string containing dashes to camel case
 * @param {string} str - input string
 * @return {string} my-string -> myString
 */
MiscUtil.prototype.toCamel = function(str) {};

/**
 * Check if string starts with specified value
 * @param {string} str - source string
 * @param {string} value - test string
 * @return {boolean} True if string starts with provided value
 */
MiscUtil.prototype.startsWith = function(str, value) {};

/**
 * Helper function to set an immutable property
 * @param {?} el - object where the new property will be set
 * @param {string} key - object key where the new property will be stored
 * @param {?} value - value of the new property
 * @param {?} options - set the property overriding the default options
 * @return {?} The initial object
 */
MiscUtil.prototype.defineProperty = function(el, key, value, options) {};

/**
 * Extend any object with other properties
 * @param {...?} args - objects to merge
 * @return {?} The resulting extended object
 */
MiscUtil.prototype.extend = function(args) {};
/**
 * @record
 * @struct
 */
function TagsUtil() {}

/**
 * Detect the tag implementation by a DOM node
 * @param {!Element} element - DOM node we need to parse to get its tag implementation
 * @return {?} Object containing the implementation of a custom tag (template and boot function)
 */
TagsUtil.prototype.getTag = function(element) {};

/**
 * Inherit properties from a target tag instance
 * @this {?}
 * @param {?} target - tag where we will inherit properties
 * @param {!Array<string>} propsInSyncWithParent - array of properties to sync with the target
 * @return {void}
 */
TagsUtil.prototype.inheritFrom = function(target, propsInSyncWithParent) {};

/**
 * Move the position of a custom tag in its parent tag
 * @this {?}
 * @param {string} tagName - key where the tag was stored
 * @param {number} newPos - index where the new tag will be stored
 * @return {void}
 */
TagsUtil.prototype.moveChildTag = function(tagName, newPos) {};

/**
 * Create a new child tag including it correctly into its parent
 * @param {?} child - child tag implementation
 * @param {?} opts - tag options containing the DOM node where the tag will be mounted
 * @param {string} innerHTML - inner html of the child node
 * @param {?} parent - instance of the parent tag including the child custom tag
 * @return {?} Instance of the new child tag just created
 */
TagsUtil.prototype.initChildTag = function(child, opts, innerHTML, parent) {};

/**
 * Loop backward all the parents tree to detect the first custom parent tag
 * @param {?} tag - a tag instance
 * @return {?} Instance of the first custom parent tag found
 */
TagsUtil.prototype.getImmediateCustomParentTag = function(tag) {};

/**
 * Trigger the unmount method on all the expressions
 * @param {!Array<?>} expressions - DOM expressions
 * @return {void}
 */
TagsUtil.prototype.unmountAll = function(expressions) {};

/**
 * Get the tag name of any DOM node
 * @param {!Element} dom - DOM node we want to parse
 * @param {boolean} skipDataIs - hack to ignore the data-is attribute when attaching to parent
 * @return {string} Name to identify this dom node in riot
 */
TagsUtil.prototype.getTagName = function(dom, skipDataIs) {};

/**
 * With this function we avoid that the internal Tag methods get overridden
 * @param {?} data - options we want to use to extend the tag instance
 * @return {?} Clean object without containing the riot internal reserved words
 */
TagsUtil.prototype.cleanUpData = function(data) {};

/**
 * Set the property of an object for a given key. If something already
 * exists there, then it becomes an array containing both the old and new value.
 * @param {?} obj - object on which to set the property
 * @param {string} key - property name
 * @param {?} value - the value of the property to be set
 * @param {boolean=} ensureArray - ensure that the property remains an array
 * @param {number=} index - add the new item in a certain array position
 * @return {void}
 */
TagsUtil.prototype.arrayishAdd = function(obj, key, value, ensureArray, index) {};

/**
 * Removes an item from an object at a given key. If the key points to an array,
 * then the item is just removed from the array.
 * @param {?} obj - object on which to remove the property
 * @param {string} key - property name
 * @param {?} value - the value of the property to be removed
 * @param {boolean=} ensureArray - ensure that the property remains an array
 * @return {void}
 */
TagsUtil.prototype.arrayishRemove = function(obj, key, value, ensureArray) {};

/**
 * Mount a tag creating new Tag instance
 * @param {!Element} root - dom node where the tag will be mounted
 * @param {string} tagName - name of the riot tag we want to mount
 * @param {?=} opts - options to pass to the Tag instance
 * @param {?=} ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
 * @return {?} Created tag instance
 */
TagsUtil.prototype.mountTo = function(root, tagName, opts, ctx) {};

/**
 * Makes a tag virtual and replaces a reference in the dom
 * @param {?} tag - tag to make virtual
 * @param {!Node} ref - dom reference location
 * @return {void}
 */
TagsUtil.prototype.makeReplaceVirtual = function(tag, ref) {};

/**
 * Adds the elements for a virtual tag
 * @this {?}
 * @param {!Node} src - the node that will do the inserting or appending
 * @param {?=} target - only if inserting, insert before this tag's first child
 * @return {void}
 */
TagsUtil.prototype.makeVirtual = function(src, target) {};

/**
 * Move virtual tag and all child nodes
 * @this {?}
 * @param {!Node} src  - the node that will do the inserting
 * @param {?} target - insert before this tag's first child
 * @return {void}
 */
TagsUtil.prototype.moveVirtual = function(src, target) {};

/**
 * Get selectors for tags
 * @param {!Array<string>} tags - tag names to select
 * @return {string} Selector
 */
TagsUtil.prototype.selectTags = function(tags) {};
/**
 * @record
 * @struct
 */
function Util() {}
 /** @type {?} */
Util.prototype.tmpl;
 /** @type {!Array<?>} */
Util.prototype.vdom;
 /** @type {?} */
Util.prototype.styleManager;
 /** @type {?} */
Util.prototype.dom;
 /** @type {?} */
Util.prototype.check;
 /** @type {?} */
Util.prototype.misc;
 /** @type {?} */
Util.prototype.tags;
 /** @type {?} */
var util;

/** @typedef {?} */
var ObservableCallback;
/**
 * @record
 * @struct
 */
function Observable() {}

/**
 * Register callback for specified events.
 * Callback is executed each time event is triggered
 * @param {string} event Event name or wildcard '*' that matches all events
 * @param {?} callback Callback function
 * @return {?}
 */
Observable.prototype.on = function(event, callback) {};

/**
 * Register callback for specified events.
 * Callback is executed at most once.
 * @param {string} event Event name.
 * @param {?} callback Callback function
 * @return {?}
 */
Observable.prototype.one = function(event, callback) {};

/**
 * For specified event remove specified callback or all registered callbacks if callback is not passed in
 * @param {string} event Event name or wildcard '*' that matches all events
 * @param {?=} callback Callback function to remove
 * @return {?}
 */
Observable.prototype.off = function(event, callback) {};

/**
 * Execute all callback functions registered for specified list of events
 * @param {string} event Event name
 * @param {...?} args Arguments provided to callbacks
 * @return {?}
 */
Observable.prototype.trigger = function(event, args) {};

/**
 * Adds Observer support for the given object or
 * if the argument is empty a new observable instance is created and returned.
 * @param {?=} el Object to become observable
 * @return {?}
 */
function observable(el) {}

/**
 * Mount custom tags with specified tag name. Returns an array of mounted tag instances.
 * Mount a custom tag on DOM nodes matching provided selector or on provided DOM node.
 * @param {string|(string|!Element)} selector Tag selector.
 * It can be tag name, css selector or special '*' selector that matches all tags on the page. / CSS selector
 * @param {?|string=} opts_or_tagName Optional object passed for the tags to consume. / Custom tag name
 * @param {?=} opts Optional object passed for the tag to consume.
 * @return {!Array<?>} An array of mounted tag instances.
 */
function mount(selector, opts_or_tagName, opts) {}

/**
 * Unregister a tag previously created via compiler or via `riot.tag()`
 * @param {string} tagName - name of the tag to unregister
 * @return {void}
 */
function unregister(tagName) {}

/**
 * Render a tag to html. This method is available only on server-side.
 * @param {string} tagName Custom tag name
 * @param {?=} opts Optional object passed for the tag to consume.
 * @return {string}
 */
function render(tagName, opts) {}

/**
 * Require and compile riot tag in runtime. This method is available only on server-side.
 * @param {string} tagPath path to tag file
 * @param {?=} opts riot-compiler options
 * @return {string} Tag name
 */
function require(tagPath, opts) {}

/**
 * Asynchronously render tag to html. This method is available only on server-side.
 * @param {string} tagName name of the tag
 * @param {?=} opts Tag opts
 * @return {!Promise<string>} Promise that is resolved with resulting html
 */
function renderAsync(tagName, opts) {}

/**
 * Update all the mounted tags and their expressions on the page.
 * Returns an array of tag instances that are mounted on the page.
 * @return {!Array<?>}
 */
function update() {}

/**
 * Register a global mixin and automatically add it to all tag instances.
 * Register a shared mixin, globally available to be used in any tag using `TagInstance.mixin(mixinName)`
 * @param {?|string} mixinObject_or_mixinName Mixin object / Name of the mixin
 * @param {?=} mixinObject Mixin object
 * @return {void}
 */
function mixin(mixinObject_or_mixinName, mixinObject) {}

/**
 * Create a new custom tag “manually” without the compiler. Returns name of the tag.
 * Create wrapper tag without template
 * @template T
 * @param {string} tagName The tag name
 * @param {string|boolean} html The layout with expressions / Should be set to false
 * @param {string|?=} css_or_constructor The style of the tag / The initialization function being called before
 * the tag expressions are calculated and before the tag is mounted
 * @param {string=} attrs String of attributes for the tag
 * @param {?=} constructor The initialization function being called before
 * the tag expressions are calculated and before the tag is mounted
 * @return {string} Tag name
 */
function tag(tagName, html, css_or_constructor, attrs, constructor) {}
/**
 * @record
 * @struct
 */
function TagOpts() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function TagRefs() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function NestedTags() {}

/* TODO: IndexSignature:  */
/**
 * @extends {Observable}
 * @record
 * @struct
 */
function TagInterface() {}
 /** @type {boolean} */
TagInterface.prototype.isMounted;
 /** @type {?} */
TagInterface.prototype.opts;
 /** @type {?} */
TagInterface.prototype.parent;
 /** @type {!Element} */
TagInterface.prototype.root;
 /** @type {?} */
TagInterface.prototype.refs;
 /** @type {?} */
TagInterface.prototype.tags;

/**
 * Updates all the expressions on the current tag instance as well as on all the children.
 * @param {?=} data Context data
 * @return {void}
 */
TagInterface.prototype.update = function(data) {};

/**
 * Extend tag with functionality available on shared mixin registered with `riot.mixin(mixinName, mixinObject)`
 * or extend tag functionality with functionality available on provided mixin object.
 * @param {(string|?)} mixin Name of shared mixin or mixin object
 * @return {void}
 */
TagInterface.prototype.mixin = function(mixin) {};

/**
 * Mount the tag
 * @return {void}
 */
TagInterface.prototype.mount = function() {};

/**
 * Detach the tag and its children from the page.
 * @param {boolean=} keepTheParent If `true` unmounting tag doesn't remove the parent tag
 * @return {void}
 */
TagInterface.prototype.unmount = function(keepTheParent) {};
/**
 * @extends {TagInterface}
 * @record
 * @struct
 */
function TagInstance() {}

/* TODO: IndexSignature:  */

/**
 * @constructor
 * @struct
 * Tag constructor
 * @param {!Element} element DOM element to mount tag on
 * @param {?=} opts Tag opts
 */
function Tag(element, opts) {}
 /** @type {?} */
Tag.prototype.opts;
 /** @type {!Element} */
Tag.prototype.root;
 /** @type {?} */
Tag.prototype.refs;
 /** @type {?} */
Tag.prototype.tags;

/**
 * @param {?=} data
 * @return {void}
 */
Tag.prototype.update = function(data) {};

/**
 * @param {(string|?)} mixinName
 * @return {void}
 */
Tag.prototype.mixin = function(mixinName) {};

/**
 * @return {void}
 */
Tag.prototype.mount = function() {};

/**
 * @param {boolean=} keepTheParent
 * @return {void}
 */
Tag.prototype.unmount = function(keepTheParent) {};

/**
 * @param {string} event
 * @param {?} callback
 * @return {?}
 */
Tag.prototype.on = function(event, callback) {};

/**
 * @param {string} event
 * @param {?} callback
 * @return {?}
 */
Tag.prototype.one = function(event, callback) {};

/**
 * @param {string} event
 * @param {?=} callback
 * @return {?}
 */
Tag.prototype.off = function(event, callback) {};

/**
 * @param {string} event
 * @param {...?} args
 * @return {?}
 */
Tag.prototype.trigger = function(event, args) {};
/**
 * @record
 * @struct
 */
function TagMixin() {}

/**
 * Special method which can initialize the mixin when it's loaded to the tag.
 * This method is not accessible from the tag its mixed in
 * @this {?}
 * @return {void}
 */
TagMixin.prototype.init = function() {};

/**
 * Compile all tags defined with <script type="riot/tag"> to JavaScript.
 * Compiles the given tag but doesn't execute it, if `skipExecution` parameter is `true`
 * Loads the given URL and compiles all tags after which the callback is called
 * @param {?|string} callback_or_tag_or_url Function that is called after all scripts are compiled / Tag definition / URL to load
 * @param {boolean|?=} skipExecution_or_callback If `true` tag is not executed after compilation / Function that is called after all tags are compiled
 * @return {void|string}
 */
function compile(callback_or_tag_or_url, skipExecution_or_callback) {}