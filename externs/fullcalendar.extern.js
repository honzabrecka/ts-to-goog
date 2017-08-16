/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/fullcalendar/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function Calendar() {}
 /** @type {string} */
Calendar.prototype.version;
/**
 * @record
 * @struct
 */
function BusinessHours() {}
 /** @type {(string|!moment.Duration|!Date)} */
BusinessHours.prototype.start;
 /** @type {(string|!moment.Duration|!Date)} */
BusinessHours.prototype.end;
 /** @type {!Array<number>} */
BusinessHours.prototype.dow;
/**
 * @record
 * @struct
 */
function Timespan() {}
 /** @type {(string|!Date|!moment.Moment)} */
Timespan.prototype.start;
 /** @type {(string|!Date|!moment.Moment)} */
Timespan.prototype.end;
/**
 * @record
 * @struct
 */
function Header() {}
 /** @type {string} */
Header.prototype.left;
 /** @type {string} */
Header.prototype.center;
 /** @type {string} */
Header.prototype.right;
/**
 * @extends {AgendaOptions}
 * @extends {EventDraggingResizingOptions}
 * @extends {DroppingExternalElementsOptions}
 * @extends {SelectionOptions}
 * @record
 * @struct
 */
function Options() {}
 /** @type {(boolean|?)} */
Options.prototype.header;
 /** @type {boolean} */
Options.prototype.theme;
 /** @type {?} */
Options.prototype.buttonIcons;
 /** @type {number} */
Options.prototype.firstDay;
 /** @type {boolean} */
Options.prototype.isRTL;
 /** @type {boolean} */
Options.prototype.weekends;
 /** @type {!Array<number>} */
Options.prototype.hiddenDays;
 /** @type {string} */
Options.prototype.weekMode;
 /** @type {boolean} */
Options.prototype.weekNumbers;
 /** @type {?} */
Options.prototype.weekNumberCalculation;
 /** @type {(boolean|?|!Array<?>)} */
Options.prototype.businessHours;
 /** @type {(number|string)} */
Options.prototype.height;
 /** @type {number} */
Options.prototype.contentHeight;
 /** @type {number} */
Options.prototype.aspectRatio;
 /** @type {boolean} */
Options.prototype.handleWindowResize;
 /** @type {?} */
Options.prototype.views;
 /** @type {(string|boolean)} */
Options.prototype.timezone;
 /** @type {(string|!Date|!moment.Moment|?)} */
Options.prototype.now;
 /** @type {string} */
Options.prototype.defaultView;
 /** @type {(string|!Date|!moment.Moment)} */
Options.prototype.defaultDate;
 /** @type {number} */
Options.prototype.year;
 /** @type {number} */
Options.prototype.month;
 /** @type {number} */
Options.prototype.date;
 /** @type {?} */
Options.prototype.timeFormat;
 /** @type {?} */
Options.prototype.columnFormat;
 /** @type {?} */
Options.prototype.titleFormat;
 /** @type {?} */
Options.prototype.buttonText;
 /** @type {!Array<string>} */
Options.prototype.monthNames;
 /** @type {!Array<string>} */
Options.prototype.monthNamesShort;
 /** @type {!Array<string>} */
Options.prototype.dayNames;
 /** @type {!Array<string>} */
Options.prototype.dayNamesShort;
 /** @type {string} */
Options.prototype.weekNumberTitle;
 /** @type {?} */
Options.prototype.events;
 /** @type {!Array<?>} */
Options.prototype.eventSources;
 /** @type {boolean} */
Options.prototype.allDayDefault;
 /** @type {string} */
Options.prototype.startParam;
 /** @type {string} */
Options.prototype.endParam;
 /** @type {boolean} */
Options.prototype.lazyFetching;
 /** @type {boolean} */
Options.prototype.eventLimit;
 /** @type {string} */
Options.prototype.eventColor;
 /** @type {string} */
Options.prototype.eventBackgroundColor;
 /** @type {string} */
Options.prototype.eventBorderColor;
 /** @type {string} */
Options.prototype.eventTextColor;
 /** @type {number} */
Options.prototype.resourceAreaWidth;
 /** @type {string} */
Options.prototype.schedulerLicenseKey;
 /** @type {?} */
Options.prototype.customButtons;
 /** @type {?} */
Options.prototype.resourceLabelText;
 /** @type {?} */
Options.prototype.resourceColumns;
 /** @type {?} */
Options.prototype.displayEventTime;

/**
 * @param {?} view
 * @param {?<!HTMLElement>} element
 * @return {void}
 */
Options.prototype.viewRender = function(view, element) {};

/**
 * @param {?} view
 * @param {?<!HTMLElement>} element
 * @return {void}
 */
Options.prototype.viewDestroy = function(view, element) {};

/**
 * @param {!Date} date
 * @param {?<!HTMLElement>} cell
 * @return {void}
 */
Options.prototype.dayRender = function(date, cell) {};

/**
 * @param {?} view
 * @return {void}
 */
Options.prototype.windowResize = function(view) {};

/**
 * @param {!Date} date
 * @param {!MouseEvent} jsEvent
 * @param {?} view
 * @return {void}
 */
Options.prototype.dayClick = function(date, jsEvent, view) {};

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} view
 * @return {?}
 */
Options.prototype.eventClick = function(event, jsEvent, view) {};

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} view
 * @return {void}
 */
Options.prototype.eventMouseover = function(event, jsEvent, view) {};

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} view
 * @return {void}
 */
Options.prototype.eventMouseout = function(event, jsEvent, view) {};

/**
 * @param {?} eventData
 * @return {?}
 */
Options.prototype.eventDataTransform = function(eventData) {};

/**
 * @param {boolean} isLoading
 * @param {?} view
 * @return {void}
 */
Options.prototype.loading = function(isLoading, view) {};

/**
 * @param {?} event
 * @param {?<!HTMLElement>} element
 * @param {?} view
 * @return {void}
 */
Options.prototype.eventRender = function(event, element, view) {};

/**
 * @param {?} event
 * @param {?<!HTMLElement>} element
 * @param {?} view
 * @return {void}
 */
Options.prototype.eventAfterRender = function(event, element, view) {};

/**
 * @param {?} view
 * @return {void}
 */
Options.prototype.eventAfterAllRender = function(view) {};

/**
 * @param {?} event
 * @param {?<!HTMLElement>} element
 * @param {?} view
 * @return {void}
 */
Options.prototype.eventDestroy = function(event, element, view) {};
/**
 * @record
 * @struct
 */
function AgendaOptions() {}
 /** @type {boolean} */
AgendaOptions.prototype.allDaySlot;
 /** @type {string} */
AgendaOptions.prototype.allDayText;
 /** @type {(string|number|void|!moment.Duration|!moment.FromTo|!moment.DurationInputObject)} */
AgendaOptions.prototype.slotDuration;
 /** @type {string} */
AgendaOptions.prototype.slotLabelFormat;
 /** @type {!moment.Duration} */
AgendaOptions.prototype.slotLabelInterval;
 /** @type {!moment.Duration} */
AgendaOptions.prototype.snapDuration;
 /** @type {!moment.Duration} */
AgendaOptions.prototype.scrollTime;
 /** @type {!moment.Duration} */
AgendaOptions.prototype.minTime;
 /** @type {!moment.Duration} */
AgendaOptions.prototype.maxTime;
 /** @type {boolean} */
AgendaOptions.prototype.slotEventOverlap;
/**
 * @record
 * @struct
 */
function EventDraggingResizingOptions() {}
 /** @type {boolean} */
EventDraggingResizingOptions.prototype.editable;
 /** @type {boolean} */
EventDraggingResizingOptions.prototype.eventStartEditable;
 /** @type {boolean} */
EventDraggingResizingOptions.prototype.eventDurationEditable;
 /** @type {number} */
EventDraggingResizingOptions.prototype.dragRevertDuration;
 /** @type {number} */
EventDraggingResizingOptions.prototype.dragOpacity;
 /** @type {boolean} */
EventDraggingResizingOptions.prototype.dragScroll;
 /** @type {(boolean|?)} */
EventDraggingResizingOptions.prototype.eventOverlap;
 /** @type {(?|string)} */
EventDraggingResizingOptions.prototype.eventConstraint;

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} ui
 * @param {?} view
 * @return {void}
 */
EventDraggingResizingOptions.prototype.eventDragStart = function(event, jsEvent, ui, view) {};

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} ui
 * @param {?} view
 * @return {void}
 */
EventDraggingResizingOptions.prototype.eventDragStop = function(event, jsEvent, ui, view) {};

/**
 * @param {?} event
 * @param {!moment.Duration} delta
 * @param {!Function} revertFunc
 * @param {!Event} jsEvent
 * @param {?} ui
 * @param {?} view
 * @return {void}
 */
EventDraggingResizingOptions.prototype.eventDrop = function(event, delta, revertFunc, jsEvent, ui, view) {};

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} ui
 * @param {?} view
 * @return {void}
 */
EventDraggingResizingOptions.prototype.eventResizeStart = function(event, jsEvent, ui, view) {};

/**
 * @param {?} event
 * @param {!MouseEvent} jsEvent
 * @param {?} ui
 * @param {?} view
 * @return {void}
 */
EventDraggingResizingOptions.prototype.eventResizeStop = function(event, jsEvent, ui, view) {};

/**
 * @param {?} event
 * @param {!moment.Duration} delta
 * @param {!Function} revertFunc
 * @param {!Event} jsEvent
 * @param {?} ui
 * @param {?} view
 * @return {void}
 */
EventDraggingResizingOptions.prototype.eventResize = function(event, delta, revertFunc, jsEvent, ui, view) {};
/**
 * @record
 * @struct
 */
function SelectionOptions() {}
 /** @type {boolean} */
SelectionOptions.prototype.selectable;
 /** @type {boolean} */
SelectionOptions.prototype.selectHelper;
 /** @type {boolean} */
SelectionOptions.prototype.unselectAuto;
 /** @type {string} */
SelectionOptions.prototype.unselectCancel;
 /** @type {(boolean|?)} */
SelectionOptions.prototype.selectOverlap;
 /** @type {?} */
SelectionOptions.prototype.selectConstraint;

/**
 * @param {!moment.Moment} start
 * @param {!moment.Moment} end
 * @param {!MouseEvent} jsEvent
 * @param {?} view
 * @param {?=} resource
 * @return {void}
 */
SelectionOptions.prototype.select = function(start, end, jsEvent, view, resource) {};

/**
 * @param {?} view
 * @param {!Event} jsEvent
 * @return {void}
 */
SelectionOptions.prototype.unselect = function(view, jsEvent) {};
/**
 * @record
 * @struct
 */
function DroppingExternalElementsOptions() {}
 /** @type {boolean} */
DroppingExternalElementsOptions.prototype.droppable;
 /** @type {(string|?)} */
DroppingExternalElementsOptions.prototype.dropAccept;

/**
 * @param {!moment.Moment} date
 * @param {!MouseEvent} jsEvent
 * @param {?} ui
 * @return {void}
 */
DroppingExternalElementsOptions.prototype.drop = function(date, jsEvent, ui) {};

/**
 * @param {?} event
 * @return {void}
 */
DroppingExternalElementsOptions.prototype.eventReceive = function(event) {};
/**
 * @record
 * @struct
 */
function ButtonTextObject() {}
 /** @type {string} */
ButtonTextObject.prototype.prev;
 /** @type {string} */
ButtonTextObject.prototype.next;
 /** @type {string} */
ButtonTextObject.prototype.prevYear;
 /** @type {string} */
ButtonTextObject.prototype.nextYear;
 /** @type {string} */
ButtonTextObject.prototype.today;
 /** @type {string} */
ButtonTextObject.prototype.month;
 /** @type {string} */
ButtonTextObject.prototype.week;
 /** @type {string} */
ButtonTextObject.prototype.day;
/**
 * @extends {Timespan}
 * @record
 * @struct
 */
function EventObject() {}
 /** @type {?} */
EventObject.prototype.id;
 /** @type {string} */
EventObject.prototype.title;
 /** @type {boolean} */
EventObject.prototype.allDay;
 /** @type {string} */
EventObject.prototype.url;
 /** @type {(string|!Array<string>)} */
EventObject.prototype.className;
 /** @type {boolean} */
EventObject.prototype.editable;
 /** @type {boolean} */
EventObject.prototype.startEditable;
 /** @type {boolean} */
EventObject.prototype.durationEditable;
 /** @type {string} */
EventObject.prototype.rendering;
 /** @type {boolean} */
EventObject.prototype.overlap;
 /** @type {?} */
EventObject.prototype.constraint;
 /** @type {?} */
EventObject.prototype.source;
 /** @type {string} */
EventObject.prototype.color;
 /** @type {string} */
EventObject.prototype.backgroundColor;
 /** @type {string} */
EventObject.prototype.borderColor;
 /** @type {string} */
EventObject.prototype.textColor;

/* TODO: IndexSignature:  */
/**
 * @extends {Timespan}
 * @record
 * @struct
 */
function ViewObject() {}
 /** @type {string} */
ViewObject.prototype.name;
 /** @type {string} */
ViewObject.prototype.title;
 /** @type {!moment.Moment} */
ViewObject.prototype.intervalStart;
 /** @type {!moment.Moment} */
ViewObject.prototype.intervalEnd;
/**
 * @extends {JQueryAjaxSettings}
 * @record
 * @struct
 */
function EventSource() {}
 /** @type {?} */
EventSource.prototype.events;
 /** @type {string} */
EventSource.prototype.color;
 /** @type {string} */
EventSource.prototype.backgroundColor;
 /** @type {string} */
EventSource.prototype.borderColor;
 /** @type {string} */
EventSource.prototype.textColor;
 /** @type {?} */
EventSource.prototype.className;
 /** @type {boolean} */
EventSource.prototype.editable;
 /** @type {boolean} */
EventSource.prototype.allDayDefault;
 /** @type {boolean} */
EventSource.prototype.ignoreTimezone;
 /** @type {?} */
EventSource.prototype.eventTransform;
 /** @type {string} */
EventSource.prototype.startParam;
 /** @type {string} */
EventSource.prototype.endParam;
/**
 * @record
 * @struct
 */
function ViewSpecificOptions() {}
 /** @type {?} */
ViewSpecificOptions.prototype.basic;
 /** @type {?} */
ViewSpecificOptions.prototype.agenda;
 /** @type {?} */
ViewSpecificOptions.prototype.week;
 /** @type {?} */
ViewSpecificOptions.prototype.day;
 /** @type {?} */
ViewSpecificOptions.prototype.month;
 /** @type {?} */
ViewSpecificOptions.prototype.basicWeek;
 /** @type {?} */
ViewSpecificOptions.prototype.basicDay;
 /** @type {?} */
ViewSpecificOptions.prototype.agendaWeek;
 /** @type {?} */
ViewSpecificOptions.prototype.agendaDay;

/**
 * Get/Set option value
 * Immediately forces the calendar to render and/or readjusts its size.
 * Restores the element to the state before FullCalendar was initialized.
 * Returns the View Object for the current view.
 * Immediately switches to a different view.
 * Moves the calendar one step back (either by a month, week, or day).
 * Moves the calendar one step forward (either by a month, week, or day).
 * Moves the calendar back one year.
 * Moves the calendar forward one year.
 * Moves the calendar to the current date.
 * Moves the calendar to an arbitrary year/month/date.
 * Moves the calendar to an arbitrary date.
 * Moves the calendar forward/backward an arbitrary amount of time.
 * Returns a Date object for the current date of the calendar.
 * A method for programmatically selecting a period of time.
 * A method for programmatically clearing the current selection.
 * Reports changes to an event and renders them on the calendar.
 * Reports changes for multiple events and renders them on the calendar.
 * Retrieves events that FullCalendar has in memory.
 * Retrieves events that FullCalendar has in memory.
 * Removes events from the calendar.
 * Removes events from the calendar.
 * Refetches events from all sources and rerenders them on the screen.
 * Dynamically adds an event source.
 * Dynamically removes an event source.
 * Renders a new event on the calendar.
 * Renders new events on the calendar.
 * Rerenders all events on the calendar.
 * Refetches one or more specific event sources.
 * Create calendar object
 * Generic method function
 * @param {string|?} method_or_options
 * @param {string|number|(string|!Date|!moment.Moment)|!Date|?|!Array<?>|function(?): boolean=} option_or_viewName_or_year_or_date_or_startDate_or_event_or_events_or_idOrfilter_or_source_or_arg1
 * @param {?|number|!Date|boolean=} value_or_month_or_endDate_or_stick_or_arg2
 * @param {number|boolean|?=} date_or_allDay_or_arg3
 * @return {void|?|!Date|!Array<?>|?<!HTMLElement>}
 */
JQuery.prototype.fullCalendar = function(method_or_options, option_or_viewName_or_year_or_date_or_startDate_or_event_or_events_or_idOrfilter_or_source_or_arg1, value_or_month_or_endDate_or_stick_or_arg2, date_or_allDay_or_arg3) {};
 /** @type {?} */
JQueryStatic.prototype.fullCalendar;