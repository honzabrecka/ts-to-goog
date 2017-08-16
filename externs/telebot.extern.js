/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/telebot/index.d.ts:

/* TODO: ExportAssignment in  */
/** @const */
var telebot = {};
/**
 * @record
 * @struct
 */
telebot.config = function() {};
 /** @type {string} */
telebot.config.prototype.token;
 /** @type {{interval: number, timeout: number, limit: number, retryTimeout: number, proxy: string}} */
telebot.config.prototype.polling;
 /** @type {{key: string, cert: string, url: string, host: string, port: number, maxConnections: number}} */
telebot.config.prototype.webhook;
 /** @type {!Array<string>} */
telebot.config.prototype.allowedUpdates;
 /** @type {!Array<string>} */
telebot.config.prototype.usePlugins;
 /** @type {string} */
telebot.config.prototype.pluginFolder;
 /** @type {?} */
telebot.config.prototype.pluginConfig;
/**
 * @record
 * @struct
 */
telebot.module = function() {};
 /** @type {string} */
telebot.module.prototype.id;
 /** @type {?} */
telebot.module.prototype.defaultConfig;

/**
 * @param {...?} args
 * @return {void}
 */
telebot.module.prototype.plugin = function(args) {};

/** @typedef {function(!Array<?>): ?} */
telebot.genericCb;

/**
 * @constructor
 * @struct
 * @param {string} id
 * @param {?=} opt
 */
telebot.AnswerList = function(id, opt) {};

/**
 * @param {string} type
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.add = function(type, set) {};

/**
 * @return {string}
 */
telebot.AnswerList.prototype.results = function() {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addArticle = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addPhoto = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addVideo = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addGif = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addVideoGif = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addSticker = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addVoice = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addDocument = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addLocation = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addVenue = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.addGame = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedPhoto = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedGif = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedVideoGif = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedSticker = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedDocument = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedVideo = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedVoice = function(set) {};

/**
 * @param {?=} set
 * @return {?}
 */
telebot.AnswerList.prototype.cachedAudio = function(set) {};

/**
 * @param {!telebot.module} module
 * @return {void}
 */
telebot.prototype.plug = function(module) {};

/**
 * @param {!telebot.module} module
 * @return {void}
 */
telebot.prototype.use = function(module) {};

/**
 * @param {...?} args
 * @return {void}
 */
telebot.prototype.start = function(args) {};

/**
 * @param {...?} args
 * @return {void}
 */
telebot.prototype.connect = function(args) {};

/**
 * @param {string} message
 * @return {void}
 */
telebot.prototype.stop = function(message) {};

/**
 * @param {number} offset
 * @param {number} limit
 * @param {number} timeout
 * @param {(string|!Array<string>)} allowed_updates
 * @return {void}
 */
telebot.prototype.getUpdates = function(offset, limit, timeout, allowed_updates) {};

/**
 * @param {!Array<?>} updateList
 * @return {!Promise<?>}
 */
telebot.prototype.receiveUpdates = function(updateList) {};

/**
 * @param {string} url
 * @param {?} form
 * @param {?} data
 * @return {!Promise<?>}
 */
telebot.prototype.request = function(url, form, data) {};

/**
 * @param {(string|!Array<string>)} names
 * @param {function(!Array<?>): ?} fn
 * @return {?}
 */
telebot.prototype.mod = function(names, fn) {};

/**
 * @param {string} name
 * @param {?} data
 * @return {?}
 */
telebot.prototype.modRun = function(name, data) {};

/**
 * @param {string} name
 * @param {function(!Array<?>): ?} fn
 * @return {boolean}
 */
telebot.prototype.removeMod = function(name, fn) {};

/**
 * @param {(string|!RegExp|!Array<string>)} types
 * @param {function(!Array<?>): ?} fn
 * @param {?=} opt
 * @return {boolean}
 */
telebot.prototype.on = function(types, fn, opt) {};

/**
 * @param {(string|!Array<string>)} types
 * @param {?} data
 * @param {?=} self
 * @return {!Promise<?>}
 */
telebot.prototype.event = function(types, data, self) {};

/**
 * @param {string} type
 * @return {boolean}
 */
telebot.prototype.cleanEvent = function(type) {};

/**
 * @param {string} type
 * @param {function(!Array<?>): ?} fn
 * @return {boolean}
 */
telebot.prototype.removeEvent = function(type, fn) {};

/**
 * @param {string} type
 * @return {boolean}
 */
telebot.prototype.destroyEvent = function(type) {};

/**
 * @param {?} form
 * @param {?} opt
 * @return {?}
 */
telebot.prototype.properties = function(form, opt) {};

/**
 * @param {...?} methods
 * @return {?}
 */
telebot.addMethods = function(methods) {};

/**
 * @param {!Array<!Array<?>>} buttons
 * @param {?=} opt
 * @return {?}
 */
telebot.prototype.keyboard = function(buttons, opt) {};

/**
 * @param {string} type
 * @param {string=} text
 * @return {?}
 */
telebot.prototype.button = function(type, text) {};

/**
 * @param {!Array<!Array<?>>} inlineButtons
 * @return {?}
 */
telebot.prototype.inlineKeyboard = function(inlineButtons) {};

/**
 * @param {!Array<!Array<?>>} config
 * @return {?}
 */
telebot.prototype.inlineQueryKeyboard = function(config) {};

/**
 * @param {string} text
 * @param {?=} opt
 * @return {?}
 */
telebot.prototype.inlineButton = function(text, opt) {};

/**
 * @param {string} id
 * @param {?=} opt
 * @return {!telebot.AnswerList}
 */
telebot.prototype.answerList = function(id, opt) {};

/**
 * @return {?}
 */
telebot.prototype.getMe = function() {};

/**
 * @param {...?} param
 * @return {boolean}
 */
telebot.prototype.answerQuery = function(param) {};

/**
 * @param {(string|number)} chat_id
 * @param {string} text
 * @param {{parseMode: string, replyToMessage: number, replyMarkup: ?, notification: boolean, webPreview: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendMessage = function(chat_id, text, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {(string|number)} from_chat_id
 * @param {number} message_id
 * @param {{notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.forwardMessage = function(chat_id, from_chat_id, message_id, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {number} from_message_id
 * @return {boolean}
 */
telebot.prototype.deleteMessage = function(chat_id, from_message_id) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{caption: string, fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendPhoto = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{title: string, performer: string, duration: number, caption: string, fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendAudio = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{caption: string, fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendDocument = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendSticker = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{duration: number, width: number, height: number, caption: string, fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendVideo = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{duration: number, fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendVideoNote = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {?} file
 * @param {{duration: number, caption: string, fileName: string, serverDownload: boolean, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendVoice = function(chat_id, file, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {!Array<?>} coords
 * @param {{replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendLocation = function(chat_id, coords, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {!Array<?>} coords
 * @param {string} title
 * @param {string} address
 * @param {{foursquareId: string, replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendVenue = function(chat_id, coords, title, address, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {string} number
 * @param {string} firstName
 * @param {string=} lastName
 * @param {{replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendContact = function(chat_id, number, firstName, lastName, opt) {};

/**
 * @param {(string|number)} chat_id
 * @param {string} action
 * @return {boolean}
 */
telebot.prototype.sendAction = function(chat_id, action) {};

/**
 * @param {(string|number)} chat_id
 * @param {string} game_short_name
 * @param {{replyToMessage: number, replyMarkup: ?, notification: boolean}=} opt
 * @return {?}
 */
telebot.prototype.sendGame = function(chat_id, game_short_name, opt) {};

/**
 * @param {number} user_id
 * @param {number} score
 * @param {{force: boolean, disableEditMessage: boolean, chatId: number, messageId: number, inlineMessageId: string}=} opt
 * @return {?}
 */
telebot.prototype.setGameScore = function(user_id, score, opt) {};

/**
 * @param {number} user_id
 * @param {{chatId: number, messageId: number, inlineMessageId: string}=} opt
 * @return {!Array<?>}
 */
telebot.prototype.getGameHighScores = function(user_id, opt) {};

/**
 * @param {number} user_id
 * @param {{offset: number, limit: number}=} opt
 * @return {?}
 */
telebot.prototype.getUserProfilePhotos = function(user_id, opt) {};

/**
 * @param {string} file_id
 * @return {?}
 */
telebot.prototype.getFile = function(file_id) {};

/**
 * @param {(string|number)} chat_id
 * @param {{title: string, description: string, payload: string, providerToken: string, startParameter: string, currency: string, prices: !Array<?>, photo: {url: string, width: number, height: number}, need: {name: boolean, phoneNumber: boolean, email: boolean, shippingAddress: boolean}, isFlexible: boolean, notification: boolean, replyToMessage: number, replyMarkup: ?}} invoiceDetails
 * @return {?}
 */
telebot.prototype.sendInvoice = function(chat_id, invoiceDetails) {};

/**
 * @param {(string|number)} chat_id
 * @return {?}
 */
telebot.prototype.getChat = function(chat_id) {};

/**
 * @param {(string|number)} chat_id
 * @return {boolean}
 */
telebot.prototype.leaveChat = function(chat_id) {};

/**
 * @param {(string|number)} chat_id
 * @return {?}
 */
telebot.prototype.getChatAdministrators = function(chat_id) {};

/**
 * @param {(string|number)} chat_id
 * @return {number}
 */
telebot.prototype.getChatMembersCount = function(chat_id) {};

/**
 * @param {(string|number)} chat_id
 * @param {number} user_id
 * @return {?}
 */
telebot.prototype.getChatMember = function(chat_id, user_id) {};

/**
 * @param {(string|number)} chat_id
 * @param {number} user_id
 * @return {boolean}
 */
telebot.prototype.kickChatMember = function(chat_id, user_id) {};

/**
 * @param {(string|number)} chat_id
 * @param {number} user_id
 * @return {boolean}
 */
telebot.prototype.unbanChatMember = function(chat_id, user_id) {};

/**
 * @param {{chatId: (string|number), messageId: number, inlineMsgId: number}} config
 * @param {string} text
 * @return {?}
 */
telebot.prototype.editMessageText = function(config, text) {};

/**
 * @param {{chatId: (string|number), messageId: number, inlineMsgId: number}} config
 * @param {string} caption
 * @return {?}
 */
telebot.prototype.editMessageCaption = function(config, caption) {};

/**
 * @param {{chatId: (string|number), messageId: number, inlineMsgId: number}} config
 * @param {?} replyMarkup
 * @return {?}
 */
telebot.prototype.editMessageReplyMarkup = function(config, replyMarkup) {};

/**
 * @param {string} callback_query_id
 * @param {{text: string, url: string, showAlert: boolean, cacheTime: number}=} opt
 * @return {boolean}
 */
telebot.prototype.answerCallbackQuery = function(callback_query_id, opt) {};

/**
 * @param {string} shipping_query_id
 * @param {boolean} ok
 * @param {{shippingOptions: !Array<?>, errorMessage: string}=} opt
 * @return {boolean}
 */
telebot.prototype.answerShippingQuery = function(shipping_query_id, ok, opt) {};

/**
 * @param {string} pre_checkout_query_id
 * @param {boolean} ok
 * @param {{errorMessage: string}=} opt
 * @return {boolean}
 */
telebot.prototype.answerPreCheckoutQuery = function(pre_checkout_query_id, ok, opt) {};

/**
 * @param {string} url
 * @param {?=} certificate
 * @param {!Array<string>=} allowed_updates
 * @param {number=} max_connections
 * @return {boolean}
 */
telebot.prototype.setWebhook = function(url, certificate, allowed_updates, max_connections) {};

/**
 * @return {?}
 */
telebot.prototype.getWebhookInfo = function() {};

/**
 * @return {boolean}
 */
telebot.prototype.deleteWebhook = function() {};