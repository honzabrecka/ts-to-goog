/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/doubleclick-gpt/index.d.ts:
/** @const */
var googletag = {};

/** @typedef {!Array<number>} */
googletag.SingleSizeArray;

/** @typedef {string} */
googletag.NamedSize;

/** @typedef {(string|!Array<number>)} */
googletag.SingleSize;

/** @typedef {!Array<(string|!Array<number>)>} */
googletag.MultiSize;

/** @typedef {(string|!Array<number>|!Array<(string|!Array<number>)>)} */
googletag.GeneralSize;

/** @typedef {!Array<(string|!Array<number>|!Array<(string|!Array<number>)>)>} */
googletag.SizeMapping;

/** @typedef {!Array<!Array<(string|!Array<number>|!Array<(string|!Array<number>)>)>>} */
googletag.SizeMappingArray;
/**
 * @record
 * @struct
 */
googletag.CommandArray = function() {};

/**
 * @param {!Function} f
 * @return {number}
 */
googletag.CommandArray.prototype.push = function(f) {};
/**
 * @record
 * @struct
 */
googletag.Service = function() {};

/**
 * @param {string} eventType
 * @param {function((!googletag.events.ImpressionViewableEvent|!googletag.events.SlotOnloadEvent|!googletag.events.SlotRenderEndedEvent|!googletag.events.slotVisibilityChangedEvent)): void} listener
 * @return {void}
 */
googletag.Service.prototype.addEventListener = function(eventType, listener) {};
/**
 * @extends {googletag.Service}
 * @record
 * @struct
 */
googletag.CompanionAdsService = function() {};

/**
 * @return {void}
 */
googletag.CompanionAdsService.prototype.enableSyncLoading = function() {};

/**
 * @param {boolean} value
 * @return {void}
 */
googletag.CompanionAdsService.prototype.setRefreshUnfilledSlots = function(value) {};
/**
 * @extends {googletag.Service}
 * @record
 * @struct
 */
googletag.ContentService = function() {};

/**
 * @param {!googletag.Slot} slot
 * @param {!String} content
 * @return {void}
 */
googletag.ContentService.prototype.setContent = function(slot, content) {};
/**
 * @record
 * @struct
 */
googletag.ResponseInformation = function() {};
 /** @type {string} */
googletag.ResponseInformation.prototype.advertiserId;
 /** @type {string} */
googletag.ResponseInformation.prototype.campaignId;
 /** @type {number} */
googletag.ResponseInformation.prototype.creativeId;
 /** @type {!Array<number>} */
googletag.ResponseInformation.prototype.labelIds;
 /** @type {number} */
googletag.ResponseInformation.prototype.lineItemId;
/**
 * @record
 * @struct
 */
googletag.SafeFrameConfig = function() {};
 /** @type {boolean} */
googletag.SafeFrameConfig.prototype.allowOverlayExpansion;
 /** @type {boolean} */
googletag.SafeFrameConfig.prototype.allowPushExpansion;
 /** @type {boolean} */
googletag.SafeFrameConfig.prototype.sandbox;
/**
 * @record
 * @struct
 */
googletag.Googletag = function() {};
 /** @type {boolean} */
googletag.Googletag.prototype.apiReady;
 /** @type {!googletag.CommandArray} */
googletag.Googletag.prototype.cmd;
 /** @type {boolean} */
googletag.Googletag.prototype.pubadsReady;

/**
 * @return {!googletag.CompanionAdsService}
 */
googletag.Googletag.prototype.companionAds = function() {};

/**
 * @return {!googletag.ContentService}
 */
googletag.Googletag.prototype.content = function() {};

/**
 * @param {string} adUnitPath
 * @param {string=} opt_div
 * @return {!googletag.Slot}
 */
googletag.Googletag.prototype.defineOutOfPageSlot = function(adUnitPath, opt_div) {};

/**
 * @param {string} adUnitPath
 * @param {(string|!Array<number>|!Array<(string|!Array<number>)>)} size
 * @param {string=} opt_div
 * @return {!googletag.Slot}
 */
googletag.Googletag.prototype.defineSlot = function(adUnitPath, size, opt_div) {};

/**
 * @param {!Array<!googletag.Slot>=} opt_slots
 * @return {boolean}
 */
googletag.Googletag.prototype.destroySlots = function(opt_slots) {};

/**
 * @return {void}
 */
googletag.Googletag.prototype.disablePublisherConsole = function() {};

/**
 * @param {string=} div
 * @return {void}
 */
googletag.Googletag.prototype.display = function(div) {};

/**
 * @return {void}
 */
googletag.Googletag.prototype.enableServices = function() {};

/**
 * @return {string}
 */
googletag.Googletag.prototype.getVersion = function() {};

/**
 * @param {string=} opt_div
 * @return {void}
 */
googletag.Googletag.prototype.openConsole = function(opt_div) {};

/**
 * @return {!googletag.PubAdsService}
 */
googletag.Googletag.prototype.pubads = function() {};

/**
 * @param {string} title
 * @return {void}
 */
googletag.Googletag.prototype.setAdIframeTitle = function(title) {};

/**
 * @return {!googletag.SizeMappingBuilder}
 */
googletag.Googletag.prototype.sizeMapping = function() {};
/**
 * @record
 * @struct
 */
googletag.Slot = function() {};

/**
 * @param {!googletag.Service} service
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.addService = function(service) {};

/**
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.clearCategoryExclusions = function() {};

/**
 * @param {string=} opt_key
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.clearTargeting = function(opt_key) {};

/**
 * @param {!Array<!Array<(string|!Array<number>|!Array<(string|!Array<number>)>)>>} sizeMapping
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.defineSizeMapping = function(sizeMapping) {};

/**
 * @param {string} key
 * @return {string}
 */
googletag.Slot.prototype.get = function(key) {};

/**
 * @return {string}
 */
googletag.Slot.prototype.getAdUnitPath = function() {};

/**
 * @return {!Array<string>}
 */
googletag.Slot.prototype.getAttributeKeys = function() {};

/**
 * @return {!Array<string>}
 */
googletag.Slot.prototype.getCategoryExclusions = function() {};

/**
 * @return {!googletag.ResponseInformation}
 */
googletag.Slot.prototype.getResponseInformation = function() {};

/**
 * @return {string}
 */
googletag.Slot.prototype.getSlotElementId = function() {};

/**
 * @param {string} key
 * @return {!Array<string>}
 */
googletag.Slot.prototype.getTargeting = function(key) {};

/**
 * @return {!Array<string>}
 */
googletag.Slot.prototype.getTargetingKeys = function() {};

/**
 * @param {string} key
 * @param {string} value
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.set = function(key, value) {};

/**
 * @param {string} categoryExclusion
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.setCategoryExclusion = function(categoryExclusion) {};

/**
 * @param {string} value
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.setClickUrl = function(value) {};

/**
 * @param {boolean} collapse
 * @param {boolean=} opt_collapseBeforeAdFetch
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.setCollapseEmptyDiv = function(collapse, opt_collapseBeforeAdFetch) {};

/**
 * @param {boolean} forceSafeFrame
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.setForceSafeFrame = function(forceSafeFrame) {};

/**
 * @param {!googletag.SafeFrameConfig} config
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.setSafeFrameConfig = function(config) {};

/**
 * @param {string} key
 * @param {(string|!Array<string>)} value
 * @return {!googletag.Slot}
 */
googletag.Slot.prototype.setTargeting = function(key, value) {};
/**
 * @record
 * @struct
 */
googletag.PassbackSlot = function() {};

/**
 * @return {void}
 */
googletag.PassbackSlot.prototype.display = function() {};

/**
 * @param {string} key
 * @return {string}
 */
googletag.PassbackSlot.prototype.get = function(key) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {!googletag.PassbackSlot}
 */
googletag.PassbackSlot.prototype.set = function(key, value) {};

/**
 * @param {string} url
 * @return {!googletag.PassbackSlot}
 */
googletag.PassbackSlot.prototype.setClickUrl = function(url) {};

/**
 * @param {boolean} forceSafeFrame
 * @return {!googletag.PassbackSlot}
 */
googletag.PassbackSlot.prototype.setForceSafeFrame = function(forceSafeFrame) {};

/**
 * @param {number} value
 * @return {!googletag.PassbackSlot}
 */
googletag.PassbackSlot.prototype.setTagForChildDirectedTreatment = function(value) {};

/**
 * @param {string} key
 * @param {(string|!Array<string>)} value
 * @return {!googletag.PassbackSlot}
 */
googletag.PassbackSlot.prototype.setTargeting = function(key, value) {};

/**
 * @param {!Object} map
 * @return {!googletag.PassbackSlot}
 */
googletag.PassbackSlot.prototype.updateTargetingFromMap = function(map) {};
/**
 * @extends {googletag.Service}
 * @record
 * @struct
 */
googletag.PubAdsService = function() {};

/**
 * @param {!Array<!googletag.Slot>=} opt_slots
 * @return {boolean}
 */
googletag.PubAdsService.prototype.clear = function(opt_slots) {};

/**
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.clearCategoryExclusions = function() {};

/**
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.clearTagForChildDirectedTreatment = function() {};

/**
 * @param {string=} opt_key
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.clearTargeting = function(opt_key) {};

/**
 * @param {boolean=} opt_collapseBeforeAdFetch
 * @return {boolean}
 */
googletag.PubAdsService.prototype.collapseEmptyDivs = function(opt_collapseBeforeAdFetch) {};

/**
 * @param {string} adUnitPath
 * @return {!googletag.PassbackSlot}
 */
googletag.PubAdsService.prototype.defineOutOfPagePassback = function(adUnitPath) {};

/**
 * @param {string} adUnitPath
 * @param {(string|!Array<number>|!Array<(string|!Array<number>)>)} size
 * @return {!googletag.PassbackSlot}
 */
googletag.PubAdsService.prototype.definePassback = function(adUnitPath, size) {};

/**
 * @return {void}
 */
googletag.PubAdsService.prototype.disableInitialLoad = function() {};

/**
 * @param {string} adUnitPath
 * @param {(string|!Array<number>|!Array<(string|!Array<number>)>)} size
 * @param {string=} opt_div
 * @param {string=} opt_clickUrl
 * @return {!googletag.Slot}
 */
googletag.PubAdsService.prototype.display = function(adUnitPath, size, opt_div, opt_clickUrl) {};

/**
 * @return {boolean}
 */
googletag.PubAdsService.prototype.enableAsyncRendering = function() {};

/**
 * @return {boolean}
 */
googletag.PubAdsService.prototype.enableSingleRequest = function() {};

/**
 * @return {boolean}
 */
googletag.PubAdsService.prototype.enableSyncRendering = function() {};

/**
 * @return {void}
 */
googletag.PubAdsService.prototype.enableVideoAds = function() {};

/**
 * @param {string} key
 * @return {string}
 */
googletag.PubAdsService.prototype.get = function(key) {};

/**
 * @return {!Array<string>}
 */
googletag.PubAdsService.prototype.getAttributeKeys = function() {};

/**
 * @param {string} key
 * @return {!Array<string>}
 */
googletag.PubAdsService.prototype.getTargeting = function(key) {};

/**
 * @return {!Array<string>}
 */
googletag.PubAdsService.prototype.getTargetingKeys = function() {};

/**
 * @param {!Array<!googletag.Slot>=} opt_slots
 * @param {{changeCorrelator: boolean}=} opt_options
 * @return {void}
 */
googletag.PubAdsService.prototype.refresh = function(opt_slots, opt_options) {};

/**
 * @param {string} key
 * @param {string} value
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.set = function(key, value) {};

/**
 * @param {string} categoryExclusion
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setCategoryExclusion = function(categoryExclusion) {};

/**
 * @param {boolean} centerAds
 * @return {void}
 */
googletag.PubAdsService.prototype.setCentering = function(centerAds) {};

/**
 * @param {number} cookieOptions
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setCookieOptions = function(cookieOptions) {};

/**
 * @param {boolean} forceSafeFrame
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setForceSafeFrame = function(forceSafeFrame) {};

/**
 * @param {(string|number)} latitudeOrAddress
 * @param {number=} opt_longitude
 * @param {number=} opt_radius
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setLocation = function(latitudeOrAddress, opt_longitude, opt_radius) {};

/**
 * @param {string} ppid
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setPublisherProvidedId = function(ppid) {};

/**
 * @param {!googletag.SafeFrameConfig} config
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setSafeFrameConfig = function(config) {};

/**
 * @param {number} value
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setTagForChildDirectedTreatment = function(value) {};

/**
 * @param {string} key
 * @param {(string|!Array<string>)} value
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.setTargeting = function(key, value) {};

/**
 * @param {string} videoContentId
 * @param {string} videoCmsId
 * @return {void}
 */
googletag.PubAdsService.prototype.setVideoContent = function(videoContentId, videoCmsId) {};

/**
 * @return {!googletag.PubAdsService}
 */
googletag.PubAdsService.prototype.updateCorrelator = function() {};
/**
 * @record
 * @struct
 */
googletag.SizeMappingBuilder = function() {};

/**
 * @param {!Array<number>} viewportSize
 * @param {(string|!Array<number>|!Array<(string|!Array<number>)>)} slotSize
 * @return {!googletag.SizeMappingBuilder}
 */
googletag.SizeMappingBuilder.prototype.addSize = function(viewportSize, slotSize) {};

/**
 * @return {!Array<!Array<(string|!Array<number>|!Array<(string|!Array<number>)>)>>}
 */
googletag.SizeMappingBuilder.prototype.build = function() {};
/** @const */
googletag.events = {};
/**
 * @record
 * @struct
 */
googletag.events.ImpressionViewableEvent = function() {};
 /** @type {string} */
googletag.events.ImpressionViewableEvent.prototype.serviceName;
 /** @type {!googletag.Slot} */
googletag.events.ImpressionViewableEvent.prototype.slot;
/**
 * @record
 * @struct
 */
googletag.events.SlotOnloadEvent = function() {};
 /** @type {string} */
googletag.events.SlotOnloadEvent.prototype.serviceName;
 /** @type {!googletag.Slot} */
googletag.events.SlotOnloadEvent.prototype.slot;
/**
 * @record
 * @struct
 */
googletag.events.SlotRenderEndedEvent = function() {};
 /** @type {number} */
googletag.events.SlotRenderEndedEvent.prototype.creativeId;
 /** @type {boolean} */
googletag.events.SlotRenderEndedEvent.prototype.isEmpty;
 /** @type {number} */
googletag.events.SlotRenderEndedEvent.prototype.lineItemId;
 /** @type {string} */
googletag.events.SlotRenderEndedEvent.prototype.serviceName;
 /** @type {(string|!Array<number>)} */
googletag.events.SlotRenderEndedEvent.prototype.size;
 /** @type {!googletag.Slot} */
googletag.events.SlotRenderEndedEvent.prototype.slot;
/**
 * @record
 * @struct
 */
googletag.events.slotVisibilityChangedEvent = function() {};
 /** @type {number} */
googletag.events.slotVisibilityChangedEvent.prototype.inViewPercentage;
 /** @type {string} */
googletag.events.slotVisibilityChangedEvent.prototype.serviceName;
 /** @type {!googletag.Slot} */
googletag.events.slotVisibilityChangedEvent.prototype.slot;
 /** @type {!googletag.Googletag} */
var googletag;