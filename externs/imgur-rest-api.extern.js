/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/imgur-rest-api/index.d.ts:
/** @const */
var ImgurRestApi = {};
/**
 * @record
 * @struct
 */
ImgurRestApi.Response = function() {};
 /** @type {?} */
ImgurRestApi.Response.prototype.data;
 /** @type {number} */
ImgurRestApi.Response.prototype.status;
 /** @type {boolean} */
ImgurRestApi.Response.prototype.success;
/**
 * @record
 * @struct
 */
ImgurRestApi.Account = function() {};
 /** @type {number} */
ImgurRestApi.Account.prototype.id;
 /** @type {string} */
ImgurRestApi.Account.prototype.url;
 /** @type {string} */
ImgurRestApi.Account.prototype.bio;
 /** @type {number} */
ImgurRestApi.Account.prototype.reputation;
 /** @type {number} */
ImgurRestApi.Account.prototype.created;
 /** @type {?} */
ImgurRestApi.Account.prototype.pro_expiration;
/**
 * @record
 * @struct
 */
ImgurRestApi.AccountSettings = function() {};
 /** @type {string} */
ImgurRestApi.AccountSettings.prototype.email;
 /** @type {boolean} */
ImgurRestApi.AccountSettings.prototype.high_quality;
 /** @type {boolean} */
ImgurRestApi.AccountSettings.prototype.public_images;
 /** @type {string} */
ImgurRestApi.AccountSettings.prototype.album_privacy;
 /** @type {?} */
ImgurRestApi.AccountSettings.prototype.pro_expiration;
 /** @type {boolean} */
ImgurRestApi.AccountSettings.prototype.accepted_gallery_terms;
 /** @type {!Array<string>} */
ImgurRestApi.AccountSettings.prototype.active_emails;
 /** @type {boolean} */
ImgurRestApi.AccountSettings.prototype.messaging_enabled;
 /** @type {!Array<!ImgurRestApi.BlockedUser>} */
ImgurRestApi.AccountSettings.prototype.blocked_users;
/**
 * @record
 * @struct
 */
ImgurRestApi.Album = function() {};
 /** @type {string} */
ImgurRestApi.Album.prototype.id;
 /** @type {string} */
ImgurRestApi.Album.prototype.title;
 /** @type {string} */
ImgurRestApi.Album.prototype.description;
 /** @type {number} */
ImgurRestApi.Album.prototype.datetime;
 /** @type {string} */
ImgurRestApi.Album.prototype.cover;
 /** @type {number} */
ImgurRestApi.Album.prototype.cover_width;
 /** @type {number} */
ImgurRestApi.Album.prototype.cover_height;
 /** @type {string} */
ImgurRestApi.Album.prototype.account_url;
 /** @type {number} */
ImgurRestApi.Album.prototype.account_id;
 /** @type {string} */
ImgurRestApi.Album.prototype.privacy;
 /** @type {string} */
ImgurRestApi.Album.prototype.layout;
 /** @type {number} */
ImgurRestApi.Album.prototype.views;
 /** @type {string} */
ImgurRestApi.Album.prototype.link;
 /** @type {boolean} */
ImgurRestApi.Album.prototype.favorite;
 /** @type {boolean} */
ImgurRestApi.Album.prototype.nsfw;
 /** @type {string} */
ImgurRestApi.Album.prototype.section;
 /** @type {number} */
ImgurRestApi.Album.prototype.order;
 /** @type {string} */
ImgurRestApi.Album.prototype.deletehash;
 /** @type {number} */
ImgurRestApi.Album.prototype.images_count;
 /** @type {!Array<!ImgurRestApi.Image>} */
ImgurRestApi.Album.prototype.images;
/**
 * @record
 * @struct
 */
ImgurRestApi.BlockedUser = function() {};
 /** @type {number} */
ImgurRestApi.BlockedUser.prototype.blocked_id;
 /** @type {string} */
ImgurRestApi.BlockedUser.prototype.blocked_url;
/**
 * @record
 * @struct
 */
ImgurRestApi.Comment = function() {};
 /** @type {number} */
ImgurRestApi.Comment.prototype.id;
 /** @type {string} */
ImgurRestApi.Comment.prototype.image_id;
 /** @type {string} */
ImgurRestApi.Comment.prototype.comment;
 /** @type {string} */
ImgurRestApi.Comment.prototype.author;
 /** @type {number} */
ImgurRestApi.Comment.prototype.author_id;
 /** @type {boolean} */
ImgurRestApi.Comment.prototype.on_album;
 /** @type {string} */
ImgurRestApi.Comment.prototype.album_cover;
 /** @type {number} */
ImgurRestApi.Comment.prototype.ups;
 /** @type {number} */
ImgurRestApi.Comment.prototype.downs;
 /** @type {number} */
ImgurRestApi.Comment.prototype.points;
 /** @type {number} */
ImgurRestApi.Comment.prototype.datetime;
 /** @type {number} */
ImgurRestApi.Comment.prototype.parent_id;
 /** @type {boolean} */
ImgurRestApi.Comment.prototype.deleted;
 /** @type {string} */
ImgurRestApi.Comment.prototype.vote;
 /** @type {!Array<!ImgurRestApi.Comment>} */
ImgurRestApi.Comment.prototype.children;
/**
 * @record
 * @struct
 */
ImgurRestApi.Conversation = function() {};
 /** @type {number} */
ImgurRestApi.Conversation.prototype.id;
 /** @type {string} */
ImgurRestApi.Conversation.prototype.last_message_preview;
 /** @type {number} */
ImgurRestApi.Conversation.prototype.datetime;
 /** @type {number} */
ImgurRestApi.Conversation.prototype.with_account_id;
 /** @type {string} */
ImgurRestApi.Conversation.prototype.with_account;
 /** @type {number} */
ImgurRestApi.Conversation.prototype.message_count;
 /** @type {!Array<!ImgurRestApi.Message>} */
ImgurRestApi.Conversation.prototype.messages;
 /** @type {boolean} */
ImgurRestApi.Conversation.prototype.done;
 /** @type {number} */
ImgurRestApi.Conversation.prototype.page;
/**
 * @record
 * @struct
 */
ImgurRestApi.CustomGallery = function() {};
 /** @type {string} */
ImgurRestApi.CustomGallery.prototype.account_url;
 /** @type {string} */
ImgurRestApi.CustomGallery.prototype.link;
 /** @type {!Array<string>} */
ImgurRestApi.CustomGallery.prototype.tags;
 /** @type {number} */
ImgurRestApi.CustomGallery.prototype.item_count;
 /** @type {!Array<!ImgurRestApi.GalleryItem>} */
ImgurRestApi.CustomGallery.prototype.items;
/**
 * @record
 * @struct
 */
ImgurRestApi.GalleryItem = function() {};
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.id;
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.title;
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.description;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.datetime;
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.account_url;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.account_id;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.ups;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.downs;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.score;
 /** @type {boolean} */
ImgurRestApi.GalleryItem.prototype.is_album;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.views;
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.link;
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.vote;
 /** @type {boolean} */
ImgurRestApi.GalleryItem.prototype.favorite;
 /** @type {boolean} */
ImgurRestApi.GalleryItem.prototype.nsfw;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.comment_count;
 /** @type {string} */
ImgurRestApi.GalleryItem.prototype.topic;
 /** @type {number} */
ImgurRestApi.GalleryItem.prototype.topic_id;
/**
 * @extends {ImgurRestApi.GalleryItem}
 * @record
 * @struct
 */
ImgurRestApi.GalleryAlbum = function() {};
 /** @type {string} */
ImgurRestApi.GalleryAlbum.prototype.cover;
 /** @type {number} */
ImgurRestApi.GalleryAlbum.prototype.cover_width;
 /** @type {number} */
ImgurRestApi.GalleryAlbum.prototype.cover_height;
 /** @type {string} */
ImgurRestApi.GalleryAlbum.prototype.privacy;
 /** @type {string} */
ImgurRestApi.GalleryAlbum.prototype.layout;
 /** @type {number} */
ImgurRestApi.GalleryAlbum.prototype.images_count;
 /** @type {!Array<!ImgurRestApi.Image>} */
ImgurRestApi.GalleryAlbum.prototype.images;
/**
 * @extends {ImgurRestApi.GalleryItem}
 * @record
 * @struct
 */
ImgurRestApi.GalleryImage = function() {};
 /** @type {string} */
ImgurRestApi.GalleryImage.prototype.type;
 /** @type {boolean} */
ImgurRestApi.GalleryImage.prototype.animated;
 /** @type {number} */
ImgurRestApi.GalleryImage.prototype.width;
 /** @type {number} */
ImgurRestApi.GalleryImage.prototype.height;
 /** @type {number} */
ImgurRestApi.GalleryImage.prototype.size;
 /** @type {number} */
ImgurRestApi.GalleryImage.prototype.bandwidth;
 /** @type {string} */
ImgurRestApi.GalleryImage.prototype.deletehash;
 /** @type {string} */
ImgurRestApi.GalleryImage.prototype.gifv;
 /** @type {string} */
ImgurRestApi.GalleryImage.prototype.mp4;
 /** @type {string} */
ImgurRestApi.GalleryImage.prototype.webm;
 /** @type {boolean} */
ImgurRestApi.GalleryImage.prototype.looping;
 /** @type {string} */
ImgurRestApi.GalleryImage.prototype.section;
/**
 * @record
 * @struct
 */
ImgurRestApi.GalleryProfile = function() {};
 /** @type {number} */
ImgurRestApi.GalleryProfile.prototype.total_gallery_comments;
 /** @type {number} */
ImgurRestApi.GalleryProfile.prototype.total_gallery_favorites;
 /** @type {number} */
ImgurRestApi.GalleryProfile.prototype.total_gallery_submissions;
 /** @type {!Array<!ImgurRestApi.Trophy>} */
ImgurRestApi.GalleryProfile.prototype.trophies;
/**
 * @record
 * @struct
 */
ImgurRestApi.Trophy = function() {};
 /** @type {number} */
ImgurRestApi.Trophy.prototype.id;
 /** @type {string} */
ImgurRestApi.Trophy.prototype.name;
 /** @type {string} */
ImgurRestApi.Trophy.prototype.name_clean;
 /** @type {string} */
ImgurRestApi.Trophy.prototype.description;
 /** @type {string} */
ImgurRestApi.Trophy.prototype.data;
 /** @type {string} */
ImgurRestApi.Trophy.prototype.data_link;
 /** @type {number} */
ImgurRestApi.Trophy.prototype.datetime;
 /** @type {string} */
ImgurRestApi.Trophy.prototype.image;
/**
 * @record
 * @struct
 */
ImgurRestApi.Image = function() {};
 /** @type {string} */
ImgurRestApi.Image.prototype.id;
 /** @type {string} */
ImgurRestApi.Image.prototype.title;
 /** @type {string} */
ImgurRestApi.Image.prototype.description;
 /** @type {number} */
ImgurRestApi.Image.prototype.datetime;
 /** @type {string} */
ImgurRestApi.Image.prototype.type;
 /** @type {boolean} */
ImgurRestApi.Image.prototype.animated;
 /** @type {number} */
ImgurRestApi.Image.prototype.width;
 /** @type {number} */
ImgurRestApi.Image.prototype.height;
 /** @type {number} */
ImgurRestApi.Image.prototype.size;
 /** @type {number} */
ImgurRestApi.Image.prototype.views;
 /** @type {number} */
ImgurRestApi.Image.prototype.bandwidth;
 /** @type {string} */
ImgurRestApi.Image.prototype.deletehash;
 /** @type {string} */
ImgurRestApi.Image.prototype.name;
 /** @type {string} */
ImgurRestApi.Image.prototype.section;
 /** @type {string} */
ImgurRestApi.Image.prototype.link;
 /** @type {string} */
ImgurRestApi.Image.prototype.gifv;
 /** @type {string} */
ImgurRestApi.Image.prototype.mp4;
 /** @type {string} */
ImgurRestApi.Image.prototype.webm;
 /** @type {boolean} */
ImgurRestApi.Image.prototype.looping;
 /** @type {string} */
ImgurRestApi.Image.prototype.vote;
 /** @type {boolean} */
ImgurRestApi.Image.prototype.favorite;
 /** @type {boolean} */
ImgurRestApi.Image.prototype.nsfw;
 /** @type {string} */
ImgurRestApi.Image.prototype.account_url;
 /** @type {number} */
ImgurRestApi.Image.prototype.account_id;
/**
 * @record
 * @struct
 */
ImgurRestApi.MemeMetadata = function() {};
 /** @type {string} */
ImgurRestApi.MemeMetadata.prototype.meme_name;
 /** @type {string} */
ImgurRestApi.MemeMetadata.prototype.top_text;
 /** @type {string} */
ImgurRestApi.MemeMetadata.prototype.bottom_text;
 /** @type {string} */
ImgurRestApi.MemeMetadata.prototype.bg_image;
/**
 * @record
 * @struct
 */
ImgurRestApi.Message = function() {};
 /** @type {number} */
ImgurRestApi.Message.prototype.id;
 /** @type {string} */
ImgurRestApi.Message.prototype.from;
 /** @type {number} */
ImgurRestApi.Message.prototype.account_id;
 /** @type {number} */
ImgurRestApi.Message.prototype.sender_id;
 /** @type {string} */
ImgurRestApi.Message.prototype.body;
 /** @type {number} */
ImgurRestApi.Message.prototype.conversation_id;
 /** @type {number} */
ImgurRestApi.Message.prototype.datetime;
/**
 * @record
 * @struct
 */
ImgurRestApi.Notification = function() {};
 /** @type {number} */
ImgurRestApi.Notification.prototype.id;
 /** @type {number} */
ImgurRestApi.Notification.prototype.account_id;
 /** @type {boolean} */
ImgurRestApi.Notification.prototype.viewed;
 /** @type {T} */
ImgurRestApi.Notification.prototype.content;
/**
 * @record
 * @struct
 */
ImgurRestApi.AccountNotifications = function() {};
 /** @type {!Array<!ImgurRestApi.Notification<!ImgurRestApi.Comment>>} */
ImgurRestApi.AccountNotifications.prototype.replies;
 /** @type {!Array<!ImgurRestApi.Notification<!ImgurRestApi.Conversation>>} */
ImgurRestApi.AccountNotifications.prototype.messages;
/**
 * @record
 * @struct
 */
ImgurRestApi.Tag = function() {};
 /** @type {string} */
ImgurRestApi.Tag.prototype.name;
 /** @type {number} */
ImgurRestApi.Tag.prototype.followers;
 /** @type {number} */
ImgurRestApi.Tag.prototype.total_items;
 /** @type {boolean} */
ImgurRestApi.Tag.prototype.following;
 /** @type {!Array<!ImgurRestApi.GalleryItem>} */
ImgurRestApi.Tag.prototype.items;
/**
 * @record
 * @struct
 */
ImgurRestApi.TagVote = function() {};
 /** @type {number} */
ImgurRestApi.TagVote.prototype.ups;
 /** @type {number} */
ImgurRestApi.TagVote.prototype.downs;
 /** @type {string} */
ImgurRestApi.TagVote.prototype.name;
 /** @type {string} */
ImgurRestApi.TagVote.prototype.author;
/**
 * @record
 * @struct
 */
ImgurRestApi.Topic = function() {};
 /** @type {number} */
ImgurRestApi.Topic.prototype.id;
 /** @type {string} */
ImgurRestApi.Topic.prototype.name;
 /** @type {string} */
ImgurRestApi.Topic.prototype.description;
/**
 * @record
 * @struct
 */
ImgurRestApi.Vote = function() {};
 /** @type {number} */
ImgurRestApi.Vote.prototype.ups;
 /** @type {number} */
ImgurRestApi.Vote.prototype.downs;
/**
 * @record
 * @struct
 */
ImgurRestApi.Error = function() {};
 /** @type {string} */
ImgurRestApi.Error.prototype.error;
 /** @type {string} */
ImgurRestApi.Error.prototype.request;
 /** @type {string} */
ImgurRestApi.Error.prototype.method;