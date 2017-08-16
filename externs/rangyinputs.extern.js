/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rangyinputs/index.d.ts:
/** @const */
var RangyInputs = {};
/**
 * @record
 * @struct
 */
RangyInputs.Selection = function() {};
 /** @type {number} */
RangyInputs.Selection.prototype.start;
 /** @type {number} */
RangyInputs.Selection.prototype.end;
 /** @type {number} */
RangyInputs.Selection.prototype.length;
 /** @type {string} */
RangyInputs.Selection.prototype.text;

/**
 * Note that in IE the textarea or text input must have the focus before calling this method. You can ensure this by calling the focus() method of the element (or its jQuery object).
 * @return {!RangyInputs.Selection}
 */
JQuery.prototype.getSelection = function() {};

/**
 * Selects the text within the text input or textarea element between the specified start and end character indices.
 * @param {number} start
 * @param {number=} end
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.setSelection = function(start, end) {};

/**
 * Collapses the selection to an insertion point (caret) either at the start of the current selection if toStart is true or the end of the current selection otherwise.
 * @param {boolean=} toStart
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.collapseSelection = function(toStart) {};

/**
 * Deletes the text within the text input or textarea element between the specified start and end character indices and optionally places the caret at the position where the deleted text had been if moveSelection is true.
 * @param {number} start
 * @param {number} end
 * @param {boolean=} moveSelection
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.deleteText = function(start, end, moveSelection) {};

/**
 * Deletes the currently selected text within the text input or textarea element and places the caret at the position where the deleted text had been.
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.deleteSelectedText = function() {};

/**
 * Deletes the currently selected text within the text input or textarea element, places the caret at the position where the deleted text had been and returns the text that was deleted.
 * @return {string}
 */
JQuery.prototype.extractSelectedText = function() {};

/**
 * Inserts the specified text at the specified character position within the text input or textarea element and optionally updates the selection depending on the value of selectionBehaviour. Possible values are:
 * 
 * - "select": Selects the inserted text
 * - "collapseToStart": Collapses the selection to a caret at the start of the inserted text
 * - "collapseToEnd": Collapses the selection to a caret at the end of the inserted text
 * 
 * If no value is supplied for selectionBehaviour, the selection is not changed and left at the mercy of the browser (placing the caret at the start is not uncommon when the textarea's value is changed).
 * @param {string} text
 * @param {number} pos
 * @param {string=} selectionBehaviour
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.insertText = function(text, pos, selectionBehaviour) {};

/**
 * Replaces the currently selected text in the text input or textarea element with the specified text and optionally updates the selection depending on the value of selectionBehaviour. Possible values are:
 * 
 * - "select": Selects the inserted text
 * - "collapseToStart": Collapses the selection to a caret at the start of the inserted text
 * - "collapseToEnd": Collapses the selection to a caret at the end of the inserted text
 * 
 * If no value is supplied for selectionBehaviour, "collapseToEnd" is assumed.
 * @param {string} text
 * @param {string=} selectionBehaviour
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.replaceSelectedText = function(text, selectionBehaviour) {};

/**
 * Surrounds the currently selected text in the text input or textarea element with the specified pieces of text and optionally updates the selection depending on the value of selectionBehaviour. Possible values are:
 * 
 * - "select": Selects the inserted text
 * - "collapseToStart": Collapses the selection to a caret at the start of the inserted text
 * - "collapseToEnd": Collapses the selection to a caret at the end of the inserted text
 * 
 * If no value is supplied for selectionBehaviour, "select" is assumed.
 * @param {string} textBefore
 * @param {string} textAfter
 * @param {string=} selectionBehaviour
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.surroundSelectedText = function(textBefore, textAfter, selectionBehaviour) {};