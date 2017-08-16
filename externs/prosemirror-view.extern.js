/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/prosemirror-view/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/**
 * @constructor
 * @struct
 */
function Decoration() {}
 /** @type {!Object} */
Decoration.prototype.spec;

/**
 * @param {number} pos
 * @param {!Node} dom
 * @param {?=} spec
 * @return {?}
 */
Decoration.widget = function(pos, dom, spec) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {?} attrs
 * @param {?=} spec
 * @return {?}
 */
Decoration.inline = function(from, to, attrs, spec) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {?} attrs
 * @param {!Object=} spec
 * @return {?}
 */
Decoration.node = function(from, to, attrs, spec) {};
/**
 * @record
 * @struct
 */
function DecorationAttrs() {}
 /** @type {string} */
DecorationAttrs.prototype.class;
 /** @type {string} */
DecorationAttrs.prototype.style;
 /** @type {string} */
DecorationAttrs.prototype.nodeName;
/**
 * @constructor
 * @struct
 */
function DecorationSet() {}
 /** @type {?} */
DecorationSet.empty;

/**
 * @param {number=} start
 * @param {number=} end
 * @return {!Array<?>}
 */
DecorationSet.prototype.find = function(start, end) {};

/**
 * @param {?} mapping
 * @param {?} doc
 * @param {?=} options
 * @return {?}
 */
DecorationSet.prototype.map = function(mapping, doc, options) {};

/**
 * @param {?} doc
 * @param {!Array<?>} decorations
 * @return {?}
 */
DecorationSet.prototype.add = function(doc, decorations) {};

/**
 * @param {!Array<?>} decorations
 * @return {?}
 */
DecorationSet.prototype.remove = function(decorations) {};

/**
 * @param {?} doc
 * @param {!Array<?>} decorations
 * @return {?}
 */
DecorationSet.create = function(doc, decorations) {};

/**
 * @constructor
 * @struct
 * @param {(!Node|?)} place
 * @param {?} props
 */
function EditorView(place, props) {}
 /** @type {?} */
EditorView.prototype.state;
 /** @type {!Element} */
EditorView.prototype.dom;
 /** @type {?} */
EditorView.prototype.props;
 /** @type {(!Document|!DocumentFragment)} */
EditorView.prototype.root;

/**
 * @param {?} props
 * @return {void}
 */
EditorView.prototype.update = function(props) {};

/**
 * @param {?} props
 * @return {void}
 */
EditorView.prototype.setProps = function(props) {};

/**
 * @param {?} state
 * @return {void}
 */
EditorView.prototype.updateState = function(state) {};

/**
 * @return {boolean}
 */
EditorView.prototype.hasFocus = function() {};

/**
 * @param {string} propName
 * @param {?} f
 * @return {?}
 */
EditorView.prototype.someProp = function(propName, f) {};

/**
 * @return {void}
 */
EditorView.prototype.focus = function() {};

/**
 * @param {?} coords
 * @return {?}
 */
EditorView.prototype.posAtCoords = function(coords) {};

/**
 * @param {number} pos
 * @return {?}
 */
EditorView.prototype.coordsAtPos = function(pos) {};

/**
 * @param {string} dir
 * @param {?=} state
 * @return {boolean}
 */
EditorView.prototype.endOfTextblock = function(dir, state) {};

/**
 * @return {void}
 */
EditorView.prototype.destroy = function() {};

/**
 * @param {?} tr
 * @return {void}
 */
EditorView.prototype.dispatch = function(tr) {};
/**
 * @record
 * @struct
 */
function EditorProps() {}
 /** @type {?} */
EditorProps.prototype.state;
 /** @type {?} */
EditorProps.prototype.dispatchTransaction;
 /** @type {?} */
EditorProps.prototype.handleDOMEvents;
 /** @type {?} */
EditorProps.prototype.handleKeyDown;
 /** @type {?} */
EditorProps.prototype.handleKeyPress;
 /** @type {?} */
EditorProps.prototype.handleTextInput;
 /** @type {?} */
EditorProps.prototype.handleClickOn;
 /** @type {?} */
EditorProps.prototype.handleClick;
 /** @type {?} */
EditorProps.prototype.handleDoubleClickOn;
 /** @type {?} */
EditorProps.prototype.handleDoubleClick;
 /** @type {?} */
EditorProps.prototype.handleTripleClickOn;
 /** @type {?} */
EditorProps.prototype.handleTripleClick;
 /** @type {?} */
EditorProps.prototype.handleContextMenu;
 /** @type {?} */
EditorProps.prototype.handlePaste;
 /** @type {?} */
EditorProps.prototype.handleDrop;
 /** @type {?} */
EditorProps.prototype.onFocus;
 /** @type {?} */
EditorProps.prototype.onBlur;
 /** @type {?} */
EditorProps.prototype.createSelectionBetween;
 /** @type {?} */
EditorProps.prototype.domParser;
 /** @type {?} */
EditorProps.prototype.clipboardParser;
 /** @type {?} */
EditorProps.prototype.transformPasted;
 /** @type {?} */
EditorProps.prototype.transformPastedHTML;
 /** @type {?} */
EditorProps.prototype.transformPastedText;
 /** @type {?} */
EditorProps.prototype.nodeViews;
 /** @type {?} */
EditorProps.prototype.clipboardSerializer;
 /** @type {?} */
EditorProps.prototype.decorations;
 /** @type {?} */
EditorProps.prototype.editable;
 /** @type {?} */
EditorProps.prototype.attributes;
 /** @type {number} */
EditorProps.prototype.scrollThreshold;
 /** @type {number} */
EditorProps.prototype.scrollMargin;
/**
 * @record
 * @struct
 */
function NodeView() {}
 /** @type {!Node} */
NodeView.prototype.dom;
 /** @type {!Node} */
NodeView.prototype.contentDOM;
 /** @type {?} */
NodeView.prototype.update;
 /** @type {?} */
NodeView.prototype.selectNode;
 /** @type {?} */
NodeView.prototype.deselectNode;
 /** @type {?} */
NodeView.prototype.setSelection;
 /** @type {?} */
NodeView.prototype.stopEvent;
 /** @type {?} */
NodeView.prototype.ignoreMutation;
 /** @type {?} */
NodeView.prototype.destroy;