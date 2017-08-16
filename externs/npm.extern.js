/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/npm/index.d.ts:
 /** @type {!NPM.Static} */
var npm;

/* TODO: ExportAssignment in  */
/** @const */
var NPM = {};
/**
 * @record
 * @struct
 */
NPM.Static = function() {};
 /** @type {!NPM.Config} */
NPM.Static.prototype.config;
 /** @type {!NPM.Commands} */
NPM.Static.prototype.commands;
 /** @type {!Array<?>} */
NPM.Static.prototype.rollbacks;
 /** @type {!NPM.Spinner} */
NPM.Static.prototype.spinner;
 /** @type {!Array<string>} */
NPM.Static.prototype.fullList;
 /** @type {!NPM.Dictionary<string>} */
NPM.Static.prototype.abbrevs;
 /** @type {string} */
NPM.Static.prototype.prefix;
 /** @type {string} */
NPM.Static.prototype.bin;
 /** @type {string} */
NPM.Static.prototype.globalBin;
 /** @type {string} */
NPM.Static.prototype.dir;
 /** @type {string} */
NPM.Static.prototype.globalDir;
 /** @type {string} */
NPM.Static.prototype.root;
 /** @type {string} */
NPM.Static.prototype.cache;
 /** @type {string} */
NPM.Static.prototype.tmp;

/**
 * @param {!NPM.ConfigOptions|!NPM.SimpleCallback<!NPM.Config>} cli_or_callback
 * @param {!NPM.SimpleCallback<!NPM.Config>=} callback
 * @return {void}
 */
NPM.Static.prototype.load = function(cli_or_callback, callback) {};

/**
 * @param {string} command
 * @return {string}
 */
NPM.Static.prototype.deref = function(command) {};
/**
 * @record
 * @struct
 */
NPM.Commands = function() {};
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.install;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.uninstall;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.cache;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.config;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.set;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.get;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.update;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.outdated;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.prune;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.submodule;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.pack;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.dedupe;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.rebuild;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.link;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.publish;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.star;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.stars;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.tag;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.adduser;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.unpublish;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.owner;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.deprecate;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.shrinkwrap;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.help;

/* TODO: PropertySignature: NPM."help-search" */
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.ls;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.search;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.view;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.init;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.version;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.edit;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.explore;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.docs;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.repo;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.bugs;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.faq;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.root;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.prefix;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.bin;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.whoami;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.test;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.stop;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.start;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.restart;

/* TODO: PropertySignature: NPM."run-script" */
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.completion;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.rm;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.r;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.un;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.unlink;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.remove;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.rb;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.list;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.la;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.ll;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.i;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.isntall;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.up;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.c;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.info;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.show;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.find;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.s;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.se;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.author;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.home;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.issues;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.unstar;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.apihelp;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.long;

/* TODO: PropertySignature: NPM."add-user" */
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.tst;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.t;

/* TODO: PropertySignature: NPM."find-dupes" */
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.ddp;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.v;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.build;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.unbuild;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.xmas;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.substack;
 /** @type {!NPM.CommandFunction} */
NPM.Commands.prototype.visnup;
/**
 * @record
 * @struct
 */
NPM.CommandFunction = function() {};

/* TODO: CallSignature: NPM */
/**
 * @record
 * @struct
 */
NPM.CommandCallback = function() {};

/* TODO: CallSignature: NPM */
/**
 * @record
 * @struct
 */
NPM.Spinner = function() {};
 /** @type {string} */
NPM.Spinner.prototype.int;
 /** @type {boolean} */
NPM.Spinner.prototype.started;

/**
 * @return {void}
 */
NPM.Spinner.prototype.start = function() {};

/**
 * @return {void}
 */
NPM.Spinner.prototype.stop = function() {};
/**
 * @record
 * @struct
 */
NPM.ConfigStatic = function() {};

/* TODO: ConstructSignature: NPM */

/* TODO: CallSignature: NPM */
/**
 * @record
 * @struct
 */
NPM.Config = function() {};
 /** @type {boolean} */
NPM.Config.prototype.loaded;
 /** @type {!NPM.Dictionary<!NPM.ConfigSource>} */
NPM.Config.prototype.sources;
 /** @type {!NPM.Config} */
NPM.Config.prototype.rootConf;
 /** @type {boolean} */
NPM.Config.prototype.usingBuiltin;
 /** @type {!NPM.Config} */
NPM.Config.prototype.root;
 /** @type {!NPM.ConfigStatic} */
NPM.Config.prototype.Conf;
 /** @type {!NPM.ConfigDefs} */
NPM.Config.prototype.defs;

/**
 * @param {string} setting
 * @return {string}
 */
NPM.Config.prototype.get = function(setting) {};

/**
 * @param {string} setting
 * @param {string} value
 * @return {void}
 */
NPM.Config.prototype.set = function(setting, value) {};

/**
 * @param {!NPM.ErrorCallback} cb
 * @return {void}
 */
NPM.Config.prototype.loadPrefix = function(cb) {};

/**
 * @param {string} caFilePath
 * @param {!NPM.ErrorCallback} cb
 * @return {void}
 */
NPM.Config.prototype.loadCAFile = function(caFilePath, cb) {};

/**
 * @param {!NPM.SimpleCallback<string>} cb
 * @return {void}
 */
NPM.Config.prototype.loadUid = function(cb) {};

/**
 * @param {!NPM.ErrorCallback} cb
 * @return {void}
 */
NPM.Config.prototype.setUser = function(cb) {};

/**
 * @param {string} prefix
 * @param {!NPM.SimpleCallback<string>} cb
 * @return {void}
 */
NPM.Config.prototype.findPrefix = function(prefix, cb) {};

/**
 * @param {string} uri
 * @return {!NPM.Credentials}
 */
NPM.Config.prototype.getCredentialsByURI = function(uri) {};

/**
 * @param {string} uri
 * @param {!NPM.Credentials} cred
 * @return {void}
 */
NPM.Config.prototype.setCredentialsByURI = function(uri, cred) {};

/**
 * @param {!NPM.ErrorCallback} cb
 * @return {void}
 */
NPM.Config.prototype.loadExtras = function(cb) {};

/**
 * @param {string} where
 * @param {!NPM.ErrorCallback} cb
 * @return {!NPM.Config}
 */
NPM.Config.prototype.save = function(where, cb) {};

/**
 * @param {string} file
 * @param {string} name
 * @return {!NPM.Config}
 */
NPM.Config.prototype.addFile = function(file, name) {};

/**
 * @param {string} content
 * @param {string} file
 * @return {?}
 */
NPM.Config.prototype.parse = function(content, file) {};

/**
 * @param {!Object} data
 * @param {!Object} marker
 * @return {?}
 */
NPM.Config.prototype.add = function(data, marker) {};

/**
 * @param {!NPM.Dictionary<string>} env
 * @return {?}
 */
NPM.Config.prototype.addEnv = function(env) {};
/**
 * @record
 * @struct
 */
NPM.ConfigDefs = function() {};
 /** @type {!NPM.ConfigOptions} */
NPM.ConfigDefs.prototype.defaults;
 /** @type {!NPM.ConfigTypes} */
NPM.ConfigDefs.prototype.types;
/**
 * @record
 * @struct
 */
NPM.ConfigOptions = function() {};

/* TODO: PropertySignature: NPM."always-auth" */

/* TODO: PropertySignature: NPM."bin-links" */
 /** @type {string} */
NPM.ConfigOptions.prototype.browser;
 /** @type {?} */
NPM.ConfigOptions.prototype.ca;
 /** @type {string} */
NPM.ConfigOptions.prototype.cafile;
 /** @type {string} */
NPM.ConfigOptions.prototype.cache;

/* TODO: PropertySignature: NPM."cache-lock-stale" */

/* TODO: PropertySignature: NPM."cache-lock-retries" */

/* TODO: PropertySignature: NPM."cache-lock-wait" */

/* TODO: PropertySignature: NPM."cache-max" */

/* TODO: PropertySignature: NPM."cache-min" */
 /** @type {string} */
NPM.ConfigOptions.prototype.cert;
 /** @type {?} */
NPM.ConfigOptions.prototype.color;
 /** @type {number} */
NPM.ConfigOptions.prototype.depth;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.description;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.dev;
 /** @type {string} */
NPM.ConfigOptions.prototype.editor;

/* TODO: PropertySignature: NPM."engine-strict" */
 /** @type {boolean} */
NPM.ConfigOptions.prototype.force;

/* TODO: PropertySignature: NPM."fetch-retries" */

/* TODO: PropertySignature: NPM."fetch-retry-factor" */

/* TODO: PropertySignature: NPM."fetch-retry-mintimeout" */

/* TODO: PropertySignature: NPM."fetch-retry-maxtimeout" */
 /** @type {string} */
NPM.ConfigOptions.prototype.git;

/* TODO: PropertySignature: NPM."git-tag-version" */
 /** @type {boolean} */
NPM.ConfigOptions.prototype.global;
 /** @type {string} */
NPM.ConfigOptions.prototype.globalconfig;
 /** @type {?} */
NPM.ConfigOptions.prototype.group;
 /** @type {string} */
NPM.ConfigOptions.prototype.heading;

/* TODO: PropertySignature: NPM."ignore-scripts" */

/* TODO: PropertySignature: NPM."init-module" */

/* TODO: PropertySignature: NPM."init.author.name" */

/* TODO: PropertySignature: NPM."init.author.email" */

/* TODO: PropertySignature: NPM."init.author.url" */

/* TODO: PropertySignature: NPM."init.version" */

/* TODO: PropertySignature: NPM."init.license" */
 /** @type {boolean} */
NPM.ConfigOptions.prototype.json;
 /** @type {string} */
NPM.ConfigOptions.prototype.key;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.link;

/* TODO: PropertySignature: NPM."local-address" */
 /** @type {string} */
NPM.ConfigOptions.prototype.loglevel;
 /** @type {!NodeJS.ReadWriteStream} */
NPM.ConfigOptions.prototype.logstream;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.long;
 /** @type {string} */
NPM.ConfigOptions.prototype.message;

/* TODO: PropertySignature: NPM."node-version" */
 /** @type {boolean} */
NPM.ConfigOptions.prototype.npat;

/* TODO: PropertySignature: NPM."onload-script" */
 /** @type {boolean} */
NPM.ConfigOptions.prototype.optional;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.parseable;
 /** @type {string} */
NPM.ConfigOptions.prototype.prefix;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.production;

/* TODO: PropertySignature: NPM."proprietary-attribs" */
 /** @type {?} */
NPM.ConfigOptions.prototype.proxy;

/* TODO: PropertySignature: NPM."https-proxy" */

/* TODO: PropertySignature: NPM."user-agent" */

/* TODO: PropertySignature: NPM."rebuild-bundle" */
 /** @type {string} */
NPM.ConfigOptions.prototype.registry;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.rollback;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.save;

/* TODO: PropertySignature: NPM."save-bundle" */

/* TODO: PropertySignature: NPM."save-dev" */

/* TODO: PropertySignature: NPM."save-exact" */

/* TODO: PropertySignature: NPM."save-optional" */

/* TODO: PropertySignature: NPM."save-prefix" */
 /** @type {string} */
NPM.ConfigOptions.prototype.scope;
 /** @type {string} */
NPM.ConfigOptions.prototype.searchopts;
 /** @type {string} */
NPM.ConfigOptions.prototype.searchexclude;
 /** @type {string} */
NPM.ConfigOptions.prototype.searchsort;
 /** @type {string} */
NPM.ConfigOptions.prototype.shell;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.shrinkwrap;

/* TODO: PropertySignature: NPM."sign-git-tag" */
 /** @type {?} */
NPM.ConfigOptions.prototype.spin;

/* TODO: PropertySignature: NPM."strict-ssl" */
 /** @type {string} */
NPM.ConfigOptions.prototype.tag;
 /** @type {string} */
NPM.ConfigOptions.prototype.tmp;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.unicode;

/* TODO: PropertySignature: NPM."unsafe-perm" */
 /** @type {boolean} */
NPM.ConfigOptions.prototype.usage;
 /** @type {?} */
NPM.ConfigOptions.prototype.user;
 /** @type {string} */
NPM.ConfigOptions.prototype.userconfig;
 /** @type {number} */
NPM.ConfigOptions.prototype.umask;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.version;
 /** @type {boolean} */
NPM.ConfigOptions.prototype.versions;
 /** @type {string} */
NPM.ConfigOptions.prototype.viewer;
 /** @type {boolean} */
NPM.ConfigOptions.prototype._exit;
/**
 * @record
 * @struct
 */
NPM.ConfigTypes = function() {};

/* TODO: PropertySignature: NPM."always-auth" */

/* TODO: PropertySignature: NPM."bin-links" */
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.browser;
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.ca;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.cafile;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.cache;

/* TODO: PropertySignature: NPM."cache-lock-stale" */

/* TODO: PropertySignature: NPM."cache-lock-retries" */

/* TODO: PropertySignature: NPM."cache-lock-wait" */

/* TODO: PropertySignature: NPM."cache-max" */

/* TODO: PropertySignature: NPM."cache-min" */
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.cert;
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.color;
 /** @type {!NumberConstructor} */
NPM.ConfigTypes.prototype.depth;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.description;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.dev;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.editor;

/* TODO: PropertySignature: NPM."engine-strict" */
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.force;

/* TODO: PropertySignature: NPM."fetch-retries" */

/* TODO: PropertySignature: NPM."fetch-retry-factor" */

/* TODO: PropertySignature: NPM."fetch-retry-mintimeout" */

/* TODO: PropertySignature: NPM."fetch-retry-maxtimeout" */
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.git;

/* TODO: PropertySignature: NPM."git-tag-version" */
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.global;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.globalconfig;
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.group;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.heading;

/* TODO: PropertySignature: NPM."ignore-scripts" */

/* TODO: PropertySignature: NPM."init-module" */

/* TODO: PropertySignature: NPM."init.author.name" */

/* TODO: PropertySignature: NPM."init.author.email" */

/* TODO: PropertySignature: NPM."init.author.url" */

/* TODO: PropertySignature: NPM."init.version" */

/* TODO: PropertySignature: NPM."init.license" */
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.json;
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.key;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.link;

/* TODO: PropertySignature: NPM."local-address" */
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.loglevel;
 /** @type {?} */
NPM.ConfigTypes.prototype.logstream;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.long;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.message;

/* TODO: PropertySignature: NPM."node-version" */
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.npat;

/* TODO: PropertySignature: NPM."onload-script" */
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.optional;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.parseable;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.prefix;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.production;

/* TODO: PropertySignature: NPM."proprietary-attribs" */
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.proxy;

/* TODO: PropertySignature: NPM."https-proxy" */

/* TODO: PropertySignature: NPM."user-agent" */

/* TODO: PropertySignature: NPM."rebuild-bundle" */
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.registry;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.rollback;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.save;

/* TODO: PropertySignature: NPM."save-bundle" */

/* TODO: PropertySignature: NPM."save-dev" */

/* TODO: PropertySignature: NPM."save-exact" */

/* TODO: PropertySignature: NPM."save-optional" */

/* TODO: PropertySignature: NPM."save-prefix" */
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.scope;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.searchopts;
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.searchexclude;
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.searchsort;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.shell;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.shrinkwrap;

/* TODO: PropertySignature: NPM."sign-git-tag" */
 /** @type {!Array<?>} */
NPM.ConfigTypes.prototype.spin;

/* TODO: PropertySignature: NPM."strict-ssl" */
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.tag;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.tmp;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.unicode;

/* TODO: PropertySignature: NPM."unsafe-perm" */
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.usage;
 /** @type {?} */
NPM.ConfigTypes.prototype.user;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.userconfig;
 /** @type {!NumberConstructor} */
NPM.ConfigTypes.prototype.umask;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.version;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype.versions;
 /** @type {!StringConstructor} */
NPM.ConfigTypes.prototype.viewer;
 /** @type {!BooleanConstructor} */
NPM.ConfigTypes.prototype._exit;
/**
 * @record
 * @struct
 */
NPM.ConfigShorthands = function() {};
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.s;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.d;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.dd;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.ddd;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.noreg;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.N;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.reg;

/* TODO: PropertySignature: NPM."no-reg" */
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.silent;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.verbose;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.quiet;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.q;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.h;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.H;

/* TODO: PropertySignature: NPM."?" */
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.help;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.v;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.f;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.gangster;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.gangsta;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.desc;

/* TODO: PropertySignature: NPM."no-desc" */

/* TODO: PropertySignature: NPM."local" */
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.l;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.m;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.p;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.porcelain;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.g;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.S;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.D;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.E;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.O;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.y;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.n;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.B;
 /** @type {!Array<?>} */
NPM.ConfigShorthands.prototype.C;
/**
 * @record
 * @struct
 */
NPM.ConfigSource = function() {};
 /** @type {string} */
NPM.ConfigSource.prototype.path;
 /** @type {string} */
NPM.ConfigSource.prototype.type;
/**
 * @record
 * @struct
 */
NPM.Credentials = function() {};
 /** @type {string} */
NPM.Credentials.prototype.scope;
 /** @type {string} */
NPM.Credentials.prototype.token;
 /** @type {string} */
NPM.Credentials.prototype.password;
 /** @type {string} */
NPM.Credentials.prototype.username;
 /** @type {string} */
NPM.Credentials.prototype.email;
 /** @type {string} */
NPM.Credentials.prototype.auth;
/**
 * @record
 * @struct
 */
NPM.Dictionary = function() {};

/* TODO: IndexSignature: NPM */
/**
 * @record
 * @struct
 */
NPM.ErrorCallback = function() {};

/* TODO: CallSignature: NPM */
/**
 * @record
 * @struct
 */
NPM.SimpleCallback = function() {};

/* TODO: CallSignature: NPM */