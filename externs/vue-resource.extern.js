/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/vue-resource/index.d.ts:
/**
 * @record
 * @struct
 */
vuejs.HttpHeaders = function() {};
 /** @type {!Object<string,string>} */
vuejs.HttpHeaders.prototype.put;
 /** @type {!Object<string,string>} */
vuejs.HttpHeaders.prototype.post;
 /** @type {!Object<string,string>} */
vuejs.HttpHeaders.prototype.patch;
 /** @type {!Object<string,string>} */
vuejs.HttpHeaders.prototype.delete;
 /** @type {!Object<string,string>} */
vuejs.HttpHeaders.prototype.common;
 /** @type {!Object<string,string>} */
vuejs.HttpHeaders.prototype.custom;

/* TODO: IndexSignature: vuejs */
/**
 * @record
 * @struct
 */
vuejs.HttpResponse = function() {};
 /** @type {!Object} */
vuejs.HttpResponse.prototype.data;
 /** @type {boolean} */
vuejs.HttpResponse.prototype.ok;
 /** @type {number} */
vuejs.HttpResponse.prototype.status;
 /** @type {string} */
vuejs.HttpResponse.prototype.statusText;
 /** @type {!Function} */
vuejs.HttpResponse.prototype.headers;

/**
 * @return {string}
 */
vuejs.HttpResponse.prototype.text = function() {};

/**
 * @return {?}
 */
vuejs.HttpResponse.prototype.json = function() {};

/**
 * @return {!Blob}
 */
vuejs.HttpResponse.prototype.blob = function() {};
/**
 * @record
 * @struct
 */
vuejs.HttpOptions = function() {};
 /** @type {string} */
vuejs.HttpOptions.prototype.url;
 /** @type {string} */
vuejs.HttpOptions.prototype.method;
 /** @type {?} */
vuejs.HttpOptions.prototype.body;
 /** @type {?} */
vuejs.HttpOptions.prototype.params;
 /** @type {?} */
vuejs.HttpOptions.prototype.headers;
 /** @type {boolean} */
vuejs.HttpOptions.prototype.credentials;
 /** @type {boolean} */
vuejs.HttpOptions.prototype.emulateHTTP;
 /** @type {boolean} */
vuejs.HttpOptions.prototype.emulateJSON;

/**
 * @param {?} request
 * @return {?}
 */
vuejs.HttpOptions.prototype.before = function(request) {};

/**
 * @param {?} event
 * @return {?}
 */
vuejs.HttpOptions.prototype.progress = function(event) {};
/**
 * @record
 * @struct
 */
vuejs.$http = function() {};

/* TODO: CallSignature: vuejs */

/* TODO: CallSignature: vuejs */
/**
 * @record
 * @struct
 */
vuejs.HttpInterceptor = function() {};

/**
 * @param {!vuejs.HttpOptions} request
 * @return {!vuejs.HttpOptions}
 */
vuejs.HttpInterceptor.prototype.request = function(request) {};

/**
 * @param {!vuejs.HttpResponse} response
 * @return {!vuejs.HttpResponse}
 */
vuejs.HttpInterceptor.prototype.response = function(response) {};
/**
 * @record
 * @struct
 */
vuejs.Http = function() {};
 /** @type {?} */
vuejs.Http.prototype.options;
 /** @type {!vuejs.HttpHeaders} */
vuejs.Http.prototype.headers;
 /** @type {!Array<(!vuejs.HttpInterceptor|function(): !vuejs.HttpInterceptor)>} */
vuejs.Http.prototype.interceptors;
 /** @type {!vuejs.$http} */
vuejs.Http.prototype.get;
 /** @type {!vuejs.$http} */
vuejs.Http.prototype.post;
 /** @type {!vuejs.$http} */
vuejs.Http.prototype.put;
 /** @type {!vuejs.$http} */
vuejs.Http.prototype.patch;
 /** @type {!vuejs.$http} */
vuejs.Http.prototype.delete;
 /** @type {!vuejs.$http} */
vuejs.Http.prototype.jsonp;
/**
 * @record
 * @struct
 */
vuejs.ResourceActions = function() {};
 /** @type {{method: string}} */
vuejs.ResourceActions.prototype.get;
 /** @type {{method: string}} */
vuejs.ResourceActions.prototype.save;
 /** @type {{method: string}} */
vuejs.ResourceActions.prototype.query;
 /** @type {{method: string}} */
vuejs.ResourceActions.prototype.update;
 /** @type {{method: string}} */
vuejs.ResourceActions.prototype.remove;
 /** @type {{method: string}} */
vuejs.ResourceActions.prototype.delete;
/**
 * @record
 * @struct
 */
vuejs.ResourceMethod = function() {};

/* TODO: CallSignature: vuejs */

/* TODO: CallSignature: vuejs */

/* TODO: CallSignature: vuejs */
/**
 * @record
 * @struct
 */
vuejs.ResourceMethods = function() {};
 /** @type {!vuejs.ResourceMethod} */
vuejs.ResourceMethods.prototype.get;
 /** @type {!vuejs.ResourceMethod} */
vuejs.ResourceMethods.prototype.save;
 /** @type {!vuejs.ResourceMethod} */
vuejs.ResourceMethods.prototype.query;
 /** @type {!vuejs.ResourceMethod} */
vuejs.ResourceMethods.prototype.update;
 /** @type {!vuejs.ResourceMethod} */
vuejs.ResourceMethods.prototype.remove;
 /** @type {!vuejs.ResourceMethod} */
vuejs.ResourceMethods.prototype.delete;
/**
 * @record
 * @struct
 */
vuejs.$resource = function() {};

/* TODO: CallSignature: vuejs */
/**
 * @extends {vuejs.$resource}
 * @record
 * @struct
 */
vuejs.Resource = function() {};
 /** @type {!vuejs.ResourceActions} */
vuejs.Resource.prototype.actions;
 /** @type {?} */
vuejs.Vue.prototype.$http;
 /** @type {!vuejs.$resource} */
vuejs.Vue.prototype.$resource;
 /** @type {!vuejs.Http} */
vuejs.VueStatic.prototype.http;
 /** @type {!vuejs.Resource} */
vuejs.VueStatic.prototype.resource;
 /** @type {?} */
vuejs.ComponentOption.prototype.http;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "vue-resource"
/** @const */
tsickle_declare_module.vue_resource = {};
 /** @type {function(!vuejs.VueStatic): void} */
tsickle_declare_module.vue_resource.install;

/* TODO: ExportAssignment in tsickle_declare_module.vue_resource */