/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.ui.datetimepicker/index.d.ts:
/**
 * @extends {JQueryUI.DatepickerOptions}
 * @record
 * @struct
 */
function DateTimePickerOptions() {}
 /** @type {boolean} */
DateTimePickerOptions.prototype.showButtonPanel;
 /** @type {boolean} */
DateTimePickerOptions.prototype.timeOnly;
 /** @type {function(): ?} */
DateTimePickerOptions.prototype.onSelect;
 /** @type {boolean} */
DateTimePickerOptions.prototype.alwaysSetTime;
 /** @type {string} */
DateTimePickerOptions.prototype.separator;
 /** @type {string} */
DateTimePickerOptions.prototype.pickerTimeFormat;
 /** @type {string} */
DateTimePickerOptions.prototype.pickerTimeSuffix;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showTimepicker;
 /** @type {boolean} */
DateTimePickerOptions.prototype.addSliderAccess;
 /** @type {?} */
DateTimePickerOptions.prototype.sliderAccessArgs;
 /** @type {string} */
DateTimePickerOptions.prototype.defaultValue;
 /** @type {!Date} */
DateTimePickerOptions.prototype.minDateTime;
 /** @type {!Date} */
DateTimePickerOptions.prototype.maxDateTime;
 /** @type {string} */
DateTimePickerOptions.prototype.parse;
 /** @type {boolean} */
DateTimePickerOptions.prototype.altFieldTimeOnly;
 /** @type {string} */
DateTimePickerOptions.prototype.altSeparator;
 /** @type {string} */
DateTimePickerOptions.prototype.altTimeSuffix;
 /** @type {string} */
DateTimePickerOptions.prototype.altTimeFormat;
 /** @type {string} */
DateTimePickerOptions.prototype.currentText;
 /** @type {string} */
DateTimePickerOptions.prototype.closeText;
 /** @type {string} */
DateTimePickerOptions.prototype.amNames;
 /** @type {string} */
DateTimePickerOptions.prototype.pmNames;
 /** @type {string} */
DateTimePickerOptions.prototype.timeFormat;
 /** @type {string} */
DateTimePickerOptions.prototype.timeSuffix;
 /** @type {string} */
DateTimePickerOptions.prototype.timeOnlyTitle;
 /** @type {string} */
DateTimePickerOptions.prototype.timeText;
 /** @type {string} */
DateTimePickerOptions.prototype.hourText;
 /** @type {string} */
DateTimePickerOptions.prototype.minuteText;
 /** @type {string} */
DateTimePickerOptions.prototype.secondText;
 /** @type {string} */
DateTimePickerOptions.prototype.millisecText;
 /** @type {string} */
DateTimePickerOptions.prototype.microsecText;
 /** @type {string} */
DateTimePickerOptions.prototype.timezoneText;
 /** @type {boolean} */
DateTimePickerOptions.prototype.isRTL;
 /** @type {string} */
DateTimePickerOptions.prototype.controlType;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showHour;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showMinute;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showSecond;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showMillisec;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showMicrosec;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showTimezone;
 /** @type {boolean} */
DateTimePickerOptions.prototype.showTime;
 /** @type {number} */
DateTimePickerOptions.prototype.stepHour;
 /** @type {number} */
DateTimePickerOptions.prototype.stepMinute;
 /** @type {number} */
DateTimePickerOptions.prototype.stepSecond;
 /** @type {number} */
DateTimePickerOptions.prototype.stepMillisec;
 /** @type {number} */
DateTimePickerOptions.prototype.stepMicrosec;
 /** @type {number} */
DateTimePickerOptions.prototype.hour;
 /** @type {number} */
DateTimePickerOptions.prototype.minute;
 /** @type {number} */
DateTimePickerOptions.prototype.second;
 /** @type {number} */
DateTimePickerOptions.prototype.millisec;
 /** @type {number} */
DateTimePickerOptions.prototype.microsec;
 /** @type {number} */
DateTimePickerOptions.prototype.timezone;
 /** @type {number} */
DateTimePickerOptions.prototype.hourMin;
 /** @type {number} */
DateTimePickerOptions.prototype.minuteMin;
 /** @type {number} */
DateTimePickerOptions.prototype.secondMin;
 /** @type {number} */
DateTimePickerOptions.prototype.millisecMin;
 /** @type {number} */
DateTimePickerOptions.prototype.microsecMin;
 /** @type {number} */
DateTimePickerOptions.prototype.hourMax;
 /** @type {number} */
DateTimePickerOptions.prototype.minuteMax;
 /** @type {number} */
DateTimePickerOptions.prototype.secondMax;
 /** @type {number} */
DateTimePickerOptions.prototype.millisecMax;
 /** @type {number} */
DateTimePickerOptions.prototype.microsecMax;
 /** @type {number} */
DateTimePickerOptions.prototype.hourGrid;
 /** @type {number} */
DateTimePickerOptions.prototype.minuteGrid;
 /** @type {number} */
DateTimePickerOptions.prototype.secondGrid;
 /** @type {number} */
DateTimePickerOptions.prototype.millisecGrid;
 /** @type {number} */
DateTimePickerOptions.prototype.microsecGrid;
 /** @type {!Array<!TimezoneOptions>} */
DateTimePickerOptions.prototype.timezoneList;
/**
 * @record
 * @struct
 */
function TimezoneOptions() {}
 /** @type {string} */
TimezoneOptions.prototype.label;
 /** @type {number} */
TimezoneOptions.prototype.value;
/**
 * @record
 * @struct
 */
function Time() {}
 /** @type {number} */
Time.prototype.hour;
 /** @type {number} */
Time.prototype.minute;
 /** @type {number} */
Time.prototype.second;
 /** @type {number} */
Time.prototype.millisecond;
 /** @type {string} */
Time.prototype.timezone;
/**
 * @record
 * @struct
 */
function formatTimeOptions() {}
 /** @type {string} */
formatTimeOptions.prototype.format;
 /** @type {!Time} */
formatTimeOptions.prototype.time;
 /** @type {!DateTimePickerOptions} */
formatTimeOptions.prototype.options;
/**
 * @record
 * @struct
 */
function parseTimeOptions() {}
 /** @type {string} */
parseTimeOptions.prototype.format;
 /** @type {string} */
parseTimeOptions.prototype.time;
 /** @type {!DateTimePickerOptions} */
parseTimeOptions.prototype.options;
/**
 * @record
 * @struct
 */
function parseDateTimeOptions() {}
 /** @type {string} */
parseDateTimeOptions.prototype.dateFormat;
 /** @type {string} */
parseDateTimeOptions.prototype.timeFormat;
 /** @type {string} */
parseDateTimeOptions.prototype.dateTimeString;
 /** @type {string} */
parseDateTimeOptions.prototype.dateSettings;
 /** @type {string} */
parseDateTimeOptions.prototype.timeSettings;

/**
 * @param {!DateTimePickerOptions|string=} options_or_method
 * @param {?|!formatTimeOptions|!parseTimeOptions|!parseDateTimeOptions=} methodParameter
 * @return {?<!HTMLElement>|?|string|!Time|!Date}
 */
JQuery.prototype.datetimepicker = function(options_or_method, methodParameter) {};