/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/documentdb-server/index.d.ts:
/**
 * @record
 * @struct
 */
function IContext() {}

/**
 * Gets the collection object.
 * @return {!ICollection}
 */
IContext.prototype.getCollection = function() {};

/**
 * Gets the request object.
 * @return {!IRequest}
 */
IContext.prototype.getRequest = function() {};

/**
 * Gets the response object.
 * Note: this is not available in pre-triggers.
 * @return {!IResponse}
 */
IContext.prototype.getResponse = function() {};
/**
 * @extends {ICollection}
 * @record
 * @struct
 */
function I__Object() {}
 /** @type {!IRequest} */
I__Object.prototype.request;
 /** @type {!IResponse} */
I__Object.prototype.response;
/**
 * @record
 * @struct
 */
function IQueryAPI() {}

/**
 * Execute a filter on the input stream of documents, resulting in a subset of the input stream that matches the given filter.
 * When filter is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
 * @template T
 * @param {function(!Object): boolean} predicate The predicate function for a filter query, which acts as a truth test of whether a document should be filtered or not.
 * @param {!IFeedOptions=} options Optional query options. Should not be used in a chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.filter = function(predicate, options, callback) {};

/**
 * Produce a new set of documents by mapping/projecting the properties of the documents in the input document stream through the given mapping predicate.
 * When map is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
 * @template T
 * @param {function(!Object): !Object} predicate The predicate function for a map/projection, which maps the input document's properties into a new document object.
 * @param {!IFeedOptions=} options Optional query options. Should not be used in a chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.map = function(predicate, options, callback) {};

/**
 * Produce a new set of documents by extracting a single property from each document in the input document stream. This is equivalent to a map call that projects only propertyName.
 * When pluck is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
 * @template T
 * @param {string} propertyName Name of the property to pluck from all documents in the current collection
 * @param {!IFeedOptions=} options Optional query options. Should not be used in a chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.pluck = function(propertyName, options, callback) {};

/**
 * Flatten nested arrays from each document in the input document stream.
 * When flatten is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
 * @template T
 * @param {boolean=} isShallow If true, flattens only the first level of nested arrays (false by default)
 * @param {!IFeedOptions=} options Optional query options. Should not be used in a chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.flatten = function(isShallow, options, callback) {};

/**
 * Produce a new set of documents by sorting the documents in the input document stream in ascending order using the given predicate.
 * When sortBy is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
 * @template T
 * @param {function(!Object): string|function(!Object): number} predicate Predicate function defining the property to sort by.
 * @param {!IFeedOptions=} options Optional query options. Should not be used in a chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.sortBy = function(predicate, options, callback) {};

/**
 * Produce a new set of documents by sorting the documents in the input document stream in descending order using the given predicate.
 * When sortByDescending is called by itself, the input document stream is the set of all documents in the current document collection. When used in a chained call, the input document stream is the set of documents returned from the previous query function.
 * @template T
 * @param {function(!Object): string|function(!Object): number} predicate Predicate function defining the property to sort by.
 * @param {!IFeedOptions=} options Optional query options. Should not be used in a chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body. Should not be used in a chained call.
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.sortByDescending = function(predicate, options, callback) {};

/**
 * Terminating call for a chained query. Should be used in conjunction with the opening chain call to perform chained queries.
 * When value is called, the query is queued for execution with the given options and callback.
 * @template T
 * @param {!IFeedOptions=} options Optional query options for the entire chained call.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback Optional callback for the operation. If no callback is provided, any error in the operation will be thrown and the result document set will be written to the Response body.
 * @return {!IQueryResponse}
 */
IQueryAPI.prototype.value = function(options, callback) {};
/**
 * @extends {IQueryAPI}
 * @record
 * @struct
 */
function ICollection() {}

/**
 * Opening call to start a chained query. Should be used in conjunction with the closing value call to perform chained queries.
 * @return {!IQueryResponse}
 */
ICollection.prototype.chain = function() {};

/**
 * Create an attachment for the document.
 * @param {string} documentLink resource link of the collection under which the document will be created
 * @param {!IAttachment} body metadata that defines the attachment media like media, contentType. It can include any other properties as part of the metedata.
 * @param {!ICreateOptions=} options optional create options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.createAttachment = function(documentLink, body, options, callback) {};

/**
 * Create a document under the collection.
 * @param {string} collectionLink resource link of the collection under which the document will be created
 * @param {!Object} body of the document. The "id" property is required and will be generated automatically if not provided (this behaviour can be overriden using the CreateOptions). Any other properties can be added.
 * @param {!ICreateOptions=} options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback
 * @return {boolean}
 */
ICollection.prototype.createDocument = function(collectionLink, body, options, callback) {};

/**
 * Delete an attachment.
 * @param {string} attachmentLink resource link of the attachment to be deleted
 * @param {!IDeleteOptions=} options optional delete options.
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.deleteAttachment = function(attachmentLink, options, callback) {};

/**
 * Delete a document.
 * @param {string} documentLink resource link of the document to delete
 * @param {!IDeleteOptions=} options optional delete options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.deleteDocument = function(documentLink, options, callback) {};

/**
 * Get alt link (name-based link) of current collection.
 * @return {string}
 */
ICollection.prototype.getAltLink = function() {};

/**
 * Get self link of current collection.
 * @return {string}
 */
ICollection.prototype.getSelfLink = function() {};

/**
 * Execute a SQL query on the attachments for the document.
 * @param {string} documentLink resource link of the document whose attachments are being queried
 * @param {string|!IParameterizedQuery} query SQL query string. This can also be a JSON object to pass in a parameterized query along with the values.
 * @param {!IFeedOptions=} options optional query options
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.queryAttachments = function(documentLink, query, options, callback) {};

/**
 * Execute a SQL query on the documents of the collection.
 * @template T
 * @param {string} collectionLink resource link of the collection whose documents are being queried
 * @param {string|!IParameterizedQuery} filterQuery SQL query string. This can also be a JSON object to pass in a parameterized query along with the values.
 * @param {!IFeedOptions=} options optional query options.
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.queryDocuments = function(collectionLink, filterQuery, options, callback) {};

/**
 * Read an Attachment.
 * @param {string} attachmenLink resource link of the attachment to read
 * @param {!IReadOptions=} options optional read options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.readAttachment = function(attachmenLink, options, callback) {};

/**
 * Get all attachments for the document.
 * @param {string} documentLink resource link of the document whose attachments are being read
 * @param {!IFeedOptions=} options optional read feed options
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.readAttachments = function(documentLink, options, callback) {};

/**
 * Read a document.
 * @template T
 * @param {string} documentLink resource link of the document to read
 * @param {!IReadOptions=} options optional read options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void|function(!IRequestCallbackError, T, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.readDocument = function(documentLink, options, callback) {};

/**
 * Get all documents for the collection.
 * @template T
 * @param {string} collectionLink resource link of the collection whose documents are being read
 * @param {!IFeedOptions=} options optional read feed options
 * @param {function(!IFeedCallbackError, !Array<!Object>, !IFeedCallbackOptions): void|function(!IFeedCallbackError, !Array<T>, !IFeedCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.readDocuments = function(collectionLink, options, callback) {};

/**
 * Replace an attachment.
 * @param {string} attachmentLink resource link of the attachment to be replaced
 * @param {!Object} attachment new attachment body
 * @param {!IReplaceOptions=} options optional replace options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.replaceAttachment = function(attachmentLink, attachment, options, callback) {};

/**
 * Replace a document.
 * @param {string} documentLink resource link of the document
 * @param {!Object} document new document body
 * @param {!IReplaceOptions=} options optional replace options
 * @param {function(!IRequestCallbackError, !Object, !IRequestCallbackOptions): void=} callback optional callback for the operation. If no callback is provided, any error in the operation will be thrown.
 * @return {boolean}
 */
ICollection.prototype.replaceDocument = function(documentLink, document, options, callback) {};
/**
 * @record
 * @struct
 */
function ICreateOptions() {}
 /** @type {string} */
ICreateOptions.prototype.indexAction;
 /** @type {string} */
ICreateOptions.prototype.disableAutomaticIdGeneration;
/**
 * @record
 * @struct
 */
function IDeleteOptions() {}
 /** @type {string} */
IDeleteOptions.prototype.etag;
/**
 * @record
 * @struct
 */
function IFeedCallbackError() {}
 /** @type {number} */
IFeedCallbackError.prototype.number;
 /** @type {string} */
IFeedCallbackError.prototype.body;
/**
 * @record
 * @struct
 */
function IFeedCallbackOptions() {}
 /** @type {string} */
IFeedCallbackOptions.prototype.continuation;
 /** @type {string} */
IFeedCallbackOptions.prototype.currentCollectionSizeInMB;
 /** @type {string} */
IFeedCallbackOptions.prototype.maxCollectionSizeInMB;
/**
 * @record
 * @struct
 */
function IFeedOptions() {}
 /** @type {number} */
IFeedOptions.prototype.pageSize;
 /** @type {string} */
IFeedOptions.prototype.continuation;
 /** @type {boolean} */
IFeedOptions.prototype.enableScan;
 /** @type {boolean} */
IFeedOptions.prototype.enableLowPrecisionOrderBy;
/**
 * @extends {IQueryAPI}
 * @record
 * @struct
 */
function IQueryResponse() {}
 /** @type {boolean} */
IQueryResponse.prototype.isAccepted;
/**
 * @record
 * @struct
 */
function IReadOptions() {}
 /** @type {string} */
IReadOptions.prototype.ifNoneMatch;
/**
 * @record
 * @struct
 */
function IReplaceOptions() {}
 /** @type {string} */
IReplaceOptions.prototype.indexAction;
 /** @type {string} */
IReplaceOptions.prototype.etag;
/**
 * @record
 * @struct
 */
function IRequestCallbackError() {}
 /** @type {number} */
IRequestCallbackError.prototype.number;
 /** @type {string} */
IRequestCallbackError.prototype.body;
/**
 * @record
 * @struct
 */
function IRequestCallbackOptions() {}
 /** @type {string} */
IRequestCallbackOptions.prototype.currentCollectionSizeInMB;
 /** @type {string} */
IRequestCallbackOptions.prototype.maxCollectionSizeInMB;
 /** @type {boolean} */
IRequestCallbackOptions.prototype.notModified;
/**
 * @record
 * @struct
 */
function IAttachment() {}
 /** @type {string} */
IAttachment.prototype.contentType;
 /** @type {string} */
IAttachment.prototype.media;
/**
 * @record
 * @struct
 */
function IDocumentMeta() {}
 /** @type {string} */
IDocumentMeta.prototype.id;
 /** @type {string} */
IDocumentMeta.prototype._self;
 /** @type {string} */
IDocumentMeta.prototype._ts;
 /** @type {string} */
IDocumentMeta.prototype._rid;
 /** @type {string} */
IDocumentMeta.prototype._etag;
 /** @type {string} */
IDocumentMeta.prototype._attachments;
/**
 * @record
 * @struct
 */
function IRequest() {}

/**
 * Gets the request body.
 * @template T
 * @return {!Object|T}
 */
IRequest.prototype.getBody = function() {};

/**
 * Gets a specified request header value.
 * @param {string} key the name of the header to retrieve
 * @return {string}
 */
IRequest.prototype.getValue = function(key) {};

/**
 * Sets the request body.
 * Note: this can be only used in a pre-trigger to overwrite the existing request body.
 * The overwritten request body will then be used in the operation associated with this pre-trigger.
 * @param {string|!Object} value the value to set in the request body
 * @return {void}
 */
IRequest.prototype.setBody = function(value) {};

/**
 * Sets a specified request header value.
 * Note: this method cannot be used to create new headers.
 * @param {string} key the name of the header
 * @param {string} value the value of the header
 * @return {void}
 */
IRequest.prototype.setValue = function(key, value) {};
/**
 * @record
 * @struct
 */
function IResponse() {}

/**
 * Gets the response body.
 * @template T
 * @return {!Object|T}
 */
IResponse.prototype.getBody = function() {};

/**
 * Gets a maximum quota allowed for the resource associated with a post-trigger
 * Note: this method is only available in post-triggers
 * @return {string}
 */
IResponse.prototype.getMaxResourceQuota = function() {};

/**
 * Gets a current quota usage for the resource associated with a post-trigger
 * Note: this method is only available in post-triggers
 * @return {string}
 */
IResponse.prototype.getResourceQuotaCurrentUsage = function() {};

/**
 * Gets a specified response header value.
 * Sets a specified response header value.
 * Note: this method cannot be used to create new headers.
 * @param {string} key the name of the header to retrieve / the name of the header
 * @param {string=} value the value of the header
 * @return {string|void}
 */
IResponse.prototype.getValue = function(key, value) {};

/**
 * Sets the response body.
 * Note: This cannot be done in pre-triggers.
 * In post-triggers, the response body is already set with the requested resource and will be overwritten with this call.
 * In stored procedures, this call can be used to set the response message body as output to the calling client.
 * @param {string|!Object} value
 * @return {void}
 */
IResponse.prototype.setBody = function(value) {};

/**
 * @param {string|!Object} value
 * @return {void}
 */
IResponse.prototype.appendBody = function(value) {};
/**
 * @record
 * @struct
 */
function IParameterizedQuery() {}
 /** @type {string} */
IParameterizedQuery.prototype.query;
 /** @type {!Array<!IQueryParam>} */
IParameterizedQuery.prototype.parameters;
/**
 * @record
 * @struct
 */
function IQueryParam() {}
 /** @type {string} */
IQueryParam.prototype.name;
 /** @type {?} */
IQueryParam.prototype.value;
/**
 * @record
 * @struct
 */
function IErrorCodes() {}
 /** @type {number} */
IErrorCodes.prototype.BadRequest;
 /** @type {number} */
IErrorCodes.prototype.Forbidden;
 /** @type {number} */
IErrorCodes.prototype.NotFound;
 /** @type {number} */
IErrorCodes.prototype.Conflict;
 /** @type {number} */
IErrorCodes.prototype.PreconditionFailed;
 /** @type {number} */
IErrorCodes.prototype.RequestEntityTooLarge;
 /** @type {number} */
IErrorCodes.prototype.RetryWith;
 /** @type {number} */
IErrorCodes.prototype.InternalServerError;

/**
 * @return {!IContext}
 */
function getContext() {}
 /** @type {!I__Object} */
var __;
 /** @type {!IErrorCodes} */
var ErrorCodes;