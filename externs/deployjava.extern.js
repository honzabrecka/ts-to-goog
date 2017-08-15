/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/deployjava/index.d.ts:
/** @const */
var DeployJava = {};
/**
 * @record
 * @struct
 */
DeployJava.DeployJavaStatic = function() {};
 /** @type {string} */
DeployJava.DeployJavaStatic.prototype.brand;
 /** @type {boolean} */
DeployJava.DeployJavaStatic.prototype.debug;
 /** @type {boolean} */
DeployJava.DeployJavaStatic.prototype.EAInstallEnabled;
 /** @type {string} */
DeployJava.DeployJavaStatic.prototype.EarlyAccessURL;
 /** @type {string} */
DeployJava.DeployJavaStatic.prototype.installType;
 /** @type {string} */
DeployJava.DeployJavaStatic.prototype.locale;
 /** @type {number} */
DeployJava.DeployJavaStatic.prototype.myInterval;
 /** @type {!Array<string>} */
DeployJava.DeployJavaStatic.prototype.preInstallJREList;
 /** @type {string} */
DeployJava.DeployJavaStatic.prototype.returnPage;

/**
 * \@summary Determines if the browser has allowed the Java plugin.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.allowPlugin = function() {};

/**
 * \@summary Compares a installed version and required version.
 * @param {string} installed
 * @param {string} required
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.compareVersions = function(installed, required) {};

/**
 * \@summary Compares a version with a pattern.
 * @param {string} version
 * @param {!Array<string>} patternArray
 * @param {boolean} familyMatch
 * @param {boolean} minMatch
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.compareVersionToPattern = function(version, patternArray, familyMatch, minMatch) {};

/**
 * \@summary Enable alerts.
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.enableAlerts = function() {};

/**
 * \@summary Redirect to Java plugin website for Mozilla Firefox.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.FFInstall = function() {};

/**
 * \@summary Gets browser name.
 * @return {string}
 */
DeployJava.DeployJavaStatic.prototype.getBrowser = function() {};

/**
 * \@summary Obtains JPI version using {\@link navigator.mimeTypes} array if found,
 * set the version to {\@link firefoxJavaVersion}.
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.getJPIVersionUsingMimeType = function() {};

/**
 * \@summary Get JRE versions (in format : "#.#[.#[_#]]") installed.
 * @return {!Array<string>}
 */
DeployJava.DeployJavaStatic.prototype.getJREs = function() {};

/**
 * Gets a Java plugin.
 * @return {!HTMLElement}
 */
DeployJava.DeployJavaStatic.prototype.getPlugin = function() {};

/**
 * Redirect to Java plugin website for Internet Explorer.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.IEInstall = function() {};

/**
 * \@summary Triggers a JRE installation.
 * @param {string} requestVersion
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.installJRE = function(requestVersion) {};

/**
 * \@summary Triggers a installation of the latest version of JRE.
 * @param {!Function=} installCallback
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.installLatestJRE = function(installCallback) {};

/**
 * \@summary Determines if JRE auto install for the version is enabled for the local system.
 * 
 * DT plugin for 6uX only knows about JRE installer signed by SUN cert.
 * If it encounter Oracle signed JRE installer, it will have chance of
 * deadlock when running with IE. This function is to guard against this.
 * 
 * @param {string=} requestedJREVersion
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.isAutoInstallEnabled = function(requestedJREVersion) {};

/**
 * \@summary Determines if the plugin is installed and AutoUpdate is enabled.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.isAutoUpdateEnabled = function() {};

/**
 * \@summary Determines if JRE install callback is supported.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.isCallbackSupported = function() {};

/**
 * \@summary Determines if the next generation plugin (Plugin II) is default.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.isPlugin2 = function() {};

/**
 * \@summary Determines if the ActiveX or XPI plugin is installed.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.isPluginInstalled = function() {};

/**
 * \@summary Checks if an installation of Java Web Start of the specified minimum version can be detected.
 * @param {string=} minimumVersion
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.isWebStartInstalled = function(minimumVersion) {};

/**
 * \@summary Launch a JNLP application (using the plugin if available).
 * @param {string} jnlp
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.launch = function(jnlp) {};

/**
 * \@summary Launch the specified JNLP application using the passed in jnlp file.
 * @param {string} jnlp
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.launchWebStartApplication = function(jnlp) {};

/**
 * \@summary Checks versions of JRE available.
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.poll = function() {};

/**
 * \@summary Writes embed tags if JRE plugin is available.
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.refresh = function() {};

/**
 * \@summary Ensures that an appropriate JRE is installed and then runs an applet.
 * 
 * After installJRE() is called, the script will attempt to detect that the
 * JRE installation has completed and begin running the applet, but there
 * are circumstances (such as when the JRE installation requires a browser
 * restart) when this cannot be fulfilled.
 * As with writeAppletTag(), this function should only be called prior to
 * the web page being completely rendered.  Note that version wildcards
 * (star (*) and plus (+)) are not supported, and including them in the
 * minimumVersion will result in an error message.
 * 
 * @param {!Object} attributes
 * @param {!Object} parameters
 * @param {string=} minimumVersion
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.runApplet = function(attributes, parameters, minimumVersion) {};

/**
 * \@summary Sets additional package list.
 * 
 * Note: To be used by kernel installer.
 * 
 * @param {string} packageList
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.setAdditionalPackages = function(packageList) {};

/**
 * \@summary Sets AutoUpdate on if plugin is installed.
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.setAutoUpdateEnabled = function() {};

/**
 * \@summary Sets preference to install Early Access versions if available.
 * @param {string} enabled
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.setEarlyAccess = function(enabled) {};

/**
 * \@summary Sets the preferred install type.
 * @param {string} type
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.setInstallerType = function(type) {};

/**
 * \@summary Detects the Microsoft virtual machine.
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.testForMSVM = function() {};

/**
 * \@summary Checks if ActiveX can be used with Java plugin.
 * @param {string} version
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.testUsingActiveX = function(version) {};

/**
 * \@summary Checks if MIME types can be used with Java plugin.
 * @param {string} version
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.testUsingMimeTypes = function(version) {};

/**
 * \@summary Checks if plugins can be used with Java plugin.
 * @param {string} version
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.testUsingPluginsArray = function(version) {};

/**
 * \@summary Check if there is a matching JRE version currently installed.
 * @param {string} versionPattern
 * @return {boolean}
 */
DeployJava.DeployJavaStatic.prototype.versionCheck = function(versionPattern) {};

/**
 * \@summary Write in outputs an applet tag for applet with the specified attributes and parameters.
 * 
 * Each key/value pair in attributes becomes an attribute of the applet tag
 * itself, while key/value pairs in parameters become <PARAM> tags.
 * No version checking or other special behaviors are performed; the tag is
 * simply written to the page using document.writeln().
 * As document.writeln() is generally only safe to use while the page is
 * being rendered, you should never call this function after the page
 * has been completed.
 * 
 * @param {!Object} attributes
 * @param {!Object} parameters
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.writeAppletTag = function(attributes, parameters) {};

/**
 * \@summary Write in outputs an embed tag for applet.
 * @return {void}
 */
DeployJava.DeployJavaStatic.prototype.writeEmbedTag = function() {};
 /** @type {!DeployJava.DeployJavaStatic} */
var deployJava;