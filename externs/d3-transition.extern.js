/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-transition/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "d3-selection"

/**
 * Interrupts the active transition of the specified name on the selected elements, and cancels any pending transitions with the specified name, if any.
 * If a name is not specified, null is used.
 * 
 * IMPORTANT: Interrupting a transition on an element has no effect on any transitions on any descendant elements.
 * For example, an axis transition consists of multiple independent, synchronized transitions on the descendants of the axis G element
 * (the tick lines, the tick labels, the domain path, etc.). To interrupt the axis transition, you must therefore interrupt the descendants.
 * 
 * @param {string=} name Name of the transition.
 * @return {?}
 */
tsickle_declare_module.d__selection.Selection.prototype.interrupt = function(name) {};

/**
 * Returns a new transition on the given selection with the specified name. If a name is not specified, null is used.
 * The new transition is only exclusive with other transitions of the same name.
 * 
 * Returns a new transition on the given selection.
 * 
 * When using a transition instance, the returned transition has the same id and name as the specified transition.
 * If a transition with the same id already exists on a selected element, the existing transition is returned for that element.
 * Otherwise, the timing of the returned transition is inherited from the existing transition of the same id on the nearest ancestor of each selected element.
 * Thus, this method can be used to synchronize a transition across multiple selections,
 * or to re-select a transition for specific elements and modify its configuration.
 * 
 * If the specified transition is not found on a selected node or its ancestors (such as if the transition already ended),
 * the default timing parameters are used; however, in a future release, this will likely be changed to throw an error.
 * 
 * @param {string|?=} name_or_transition Name of the transition. / A transition instance.
 * @return {?}
 */
tsickle_declare_module.d__selection.Selection.prototype.transition = function(name_or_transition) {};

/**
 * Return the active transition on the specified node with the specified name, if any.
 * If no name is specified, null is used. Returns null if there is no such active transition on the specified node.
 * This method is useful for creating chained transitions.
 * 
 * The first generic "GElement" refers to the type of element on which the returned active transition was defined. The second generic "Datum" refers to the type of the
 * datum, of a selected element on which the transition is defined. The third generic refers to the type of the parent elements in the returned Transition.
 * The fourth generic refers to the type of the datum defined on the parent elements in the returned Transition.
 * 
 * @template GElement, Datum, PElement, PDatum
 * @param {?} node Element for which the active transition should be returned.
 * @param {string=} name Name of the transition.
 * @return {?}
 */
function active(node, name) {}

/**
 * Interrupts the active transition of the specified name on the specified node, and cancels any pending transitions with the specified name, if any.
 * If a name is not specified, null is used.
 * 
 * @param {(!Element|?|!Document|!Window)} node Element for which the transition should be interrupted.
 * @param {string=} name Name of the transition to be interrupted. If a name is not specified, null is used.
 * @return {void}
 */
function interrupt(node, name) {}
/**
 * @record
 * @struct
 */
function Transition() {}

/**
 * For each selected element, select the first descendant element that matches the specified selector string, if any,
 * and returns a transition on the resulting selection. The new transition has the same id, name and timing as this transition;
 * however, if a transition with the same id already exists on a selected element,
 * the existing transition is returned for that element.
 * 
 * The generic represents the type of the descendant element to be selected.
 * 
 * For each selected element, select the descendant element returned by the selector function, if any,
 * and returns a transition on the resulting selection. The new transition has the same id, name and timing as this transition;
 * however, if a transition with the same id already exists on a selected element,
 * the existing transition is returned for that element.
 * 
 * The generic represents the type of the descendant element to be selected.
 * 
 * @template DescElement
 * @param {string|?} selector CSS selector string / A selector function, which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
 * It must return an element, or null if there is no matching element.
 * @return {?}
 */
Transition.prototype.select = function(selector) {};

/**
 * For each selected element, select all descendant elements that match the specified selector string, if any,
 * and returns a transition on the resulting selection. The new transition has the same id, name and timing as this transition;
 * however, if a transition with the same id already exists on a selected element, the existing transition is returned for that element.
 * 
 * The first generic "DescElement" refers to the type of descendant element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
 * 
 * For each selected element, select all descendant elements returned by the selector function, if any,
 * and returns a transition on the resulting selection. The new transition has the same id, name and timing as this transition;
 * however, if a transition with the same id already exists on a selected element, the existing transition is returned for that element.
 * 
 * The first generic "DescElement" refers to the type of descendant element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
 * 
 * @template DescElement, OldDatum
 * @param {string|?} selector CSS selector string / A selector function which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). It must return an array of elements
 * (or a pseudo-array, such as a NodeList), or the empty array if there are no matching elements.
 * @return {?}
 */
Transition.prototype.selectAll = function(selector) {};

/**
 * Return the selection corresponding to this transition.
 * @return {!Selection<?, ?, ?, ?>}
 */
Transition.prototype.selection = function() {};

/**
 * Returns a new transition on the same selected elements as this transition, scheduled to start when this transition ends.
 * The new transition inherits a reference time equal to this transition’s time plus its delay and duration.
 * The new transition also inherits this transition’s name, duration, and easing.
 * This method can be used to schedule a sequence of chained transitions.
 * 
 * A delay configured for the new transition will be relative to the previous transition.
 * @return {?}
 */
Transition.prototype.transition = function() {};

/**
 * For each selected element, the attribute with the specified name will be cleared at the start of the transition.
 * 
 * For each selected element, assigns the attribute tween for the attribute with the specified name to the specified target value.
 * The starting value of the tween is the attribute’s value when the transition starts.
 * The target value is the specified constant value for all elements.
 * 
 * An interpolator is chosen based on the type of the target value, using the following algorithm:
 * 1.) If value is a number, use interpolateNumber.
 * 2.) If value is a color or a string coercible to a color, use interpolateRgb.
 * 3.) Use interpolateString.
 * 
 * To apply a different interpolator, use transition.attrTween.
 * 
 * For each selected element, assigns the attribute tween for the attribute with the specified name to the specified target value.
 * The starting value of the tween is the attribute’s value when the transition starts.
 * The target value is return value of the value function evaluated for the selected element.
 * 
 * An interpolator is chosen based on the type of the target value, using the following algorithm:
 * 1.) If value is a number, use interpolateNumber.
 * 2.) If value is a color or a string coercible to a color, use interpolateRgb.
 * 3.) Use interpolateString.
 * 
 * To apply a different interpolator, use transition.attrTween.
 * 
 * @param {string} name Name of the attribute.
 * @param {null|(string|number|boolean)|?} value Use null to clear the attribute. / Target value for the attribute. / A value function which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
 * A null value will clear the attribute at the start of the transition.
 * @return {?}
 */
Transition.prototype.attr = function(name, value) {};

/**
 * Return the current interpolator factory for attribute with the specified name, or undefined if no such tween exists.
 * 
 * Remove the previously-assigned attribute tween of the specified name, if any.
 * 
 * Assign the attribute tween for the attribute with the specified name to the specified interpolator factory.
 * An interpolator factory is a function that returns an interpolator; when the transition starts, the factory is evaluated for each selected element.
 * The returned interpolator will then be invoked for each frame of the transition, in order,
 * being passed the eased time t, typically in the range [0, 1]. Lastly, the return value of the interpolator will be used to set the attribute value.
 * The interpolator must return a string.
 * 
 * @param {string} name Name of attribute.
 * @param {null|?=} factory Use null to remove previously-assigned attribute tween. / An interpolator factory which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). The interpolator factory returns a string interpolator,
 * which takes as its argument eased time t, typically in the range [0, 1] and returns the interpolated string.
 * @return {?}
 */
Transition.prototype.attrTween = function(name, factory) {};

/**
 * For each selected element, the style with the specified name will be cleared at the start of the transition.
 * 
 * For each selected element, assigns the style tween for the style with the specified name to the specified target value with the
 * specified priority.
 * The starting value of the tween is the style’s inline value if present, and otherwise its computed value.
 * The target value is the specified constant value for all elements.
 * 
 * An interpolator is chosen based on the type of the target value, using the following algorithm:
 * 1.) If value is a number, use interpolateNumber.
 * 2.) If value is a color or a string coercible to a color, use interpolateRgb.
 * 3.) Use interpolateString.
 * 
 * To apply a different interpolator, use transition.attrTween.
 * 
 * For each selected element, assigns the style tween for the style with the specified name to the specified target value with the
 * specified priority.
 * The starting value of the tween is the style's inline value if present, and otherwise its computed value.
 * The target value is return value of the value function evaluated for the selected element.
 * 
 * An interpolator is chosen based on the type of the target value, using the following algorithm:
 * 1.) If value is a number, use interpolateNumber.
 * 2.) If value is a color or a string coercible to a color, use interpolateRgb.
 * 3.) Use interpolateString.
 * 
 * To apply a different interpolator, use transition.attrTween.
 * 
 * @param {string} name Name of the style.
 * @param {null|(string|number|boolean)|?} value Use null to clear the style. / Target value for the style. / A value function which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
 * A null value will clear the style at the start of the transition.
 * @param {string=} priority An optional priority flag, either null or the string important (without the exclamation point)
 * @return {?}
 */
Transition.prototype.style = function(name, value, priority) {};

/**
 * Return the current interpolator factory for style with the specified name, or undefined if no such tween exists.
 * 
 * Remove the previously-assigned style tween of the specified name, if any.
 * 
 * Assign the style tween for the style with the specified name to the specified interpolator factory.
 * An interpolator factory is a function that returns an interpolator; when the transition starts, the factory is evaluated for each selected element.
 * The returned interpolator will then be invoked for each frame of the transition, in order,
 * being passed the eased time t, typically in the range [0, 1]. Lastly, the return value of the interpolator will be used to set the style value.
 * The interpolator must return a string.
 * 
 * @param {string} name Name of style.
 * @param {null|?=} factory Use null to remove previously-assigned style tween. / An interpolator factory which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). The interpolator factory returns a string interpolator,
 * which takes as its argument eased time t, typically in the range [0, 1] and returns the interpolated string.
 * @param {string=} priority An optional priority flag, either null or the string important (without the exclamation point)
 * @return {?}
 */
Transition.prototype.styleTween = function(name, factory, priority) {};

/**
 * For each selected element, the text content will be cleared, replacing any existing child elements.
 * 
 * For each selected element, sets the text content to the specified target value when the transition starts.
 * To interpolate text rather than to set it on start, use transition.tween (for example) or
 * append a replacement element and cross-fade opacity (for example). Text is not interpolated by default because it is usually undesirable.
 * 
 * For each selected element, sets the text content returned by the value function for each selected element when the transition starts.
 * 
 * To interpolate text rather than to set it on start, use transition.tween (for example) or
 * append a replacement element and cross-fade opacity (for example). Text is not interpolated by default because it is usually undesirable.
 * 
 * @param {null|(string|number|boolean)|?} value Use null to clear the text content. / Value used for text content / A value function which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
 * A null value will clear the text content at the start of the transition.
 * @return {?}
 */
Transition.prototype.text = function(value) {};

/**
 * Returns the tween with the specified name, or undefined, if no tween was previously assigned to
 * that name.
 * 
 * Removes the tween with the specified name, if a tween was previously assigned to
 * that name.
 * 
 * For each selected element, assigns the tween with the specified name with the specified value function.
 * The value must be specified as a function that returns a function.
 * When the transition starts, the value function is evaluated for each selected element.
 * The returned function is then invoked for each frame of the transition, in order,
 * being passed the eased time t, typically in the range [0, 1].
 * 
 * @param {string} name Name of tween.
 * @param {null|?=} tweenFn Use null to remove a previously-assigned tween. / A tween function which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). The tween function returns a function
 * which takes as its argument eased time t, typically in the range [0, 1] and performs the tweening activities for each transition frame.
 * @return {?}
 */
Transition.prototype.tween = function(name, tweenFn) {};

/**
 * For each selected element, removes the element when the transition ends, as long as the element has no other active or pending transitions.
 * If the element has other active or pending transitions, does nothing.
 * @return {?}
 */
Transition.prototype.remove = function() {};

/**
 * Returns a new transition merging this transition with the specified other transition,
 * which must have the same id as this transition. The returned transition has the same number of groups,
 * the same parents, the same name and the same id as this transition.
 * Any missing (null) elements in this transition are filled with the corresponding element, if present (not null), from the other transition.
 * 
 * @param {?} other The transition to be merged.
 * @return {?}
 */
Transition.prototype.merge = function(other) {};

/**
 * For each selected element, selects only the elements that match the specified filter, and returns a transition on the resulting selection.
 * 
 * The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element,
 * the existing transition is returned for that element.
 * 
 * For each selected element, selects only the elements that match the specified filter, and returns a transition on the resulting selection.
 * 
 * The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element,
 * the existing transition is returned for that element.
 * 
 * The generic refers to the type of element which will be selected after applying the filter, i.e. if the element types
 * contained in a pre-filter selection are narrowed to a subset as part of the filtering.
 * 
 * For each selected element, selects only the elements that match the specified filter, and returns a transition on the resulting selection.
 * 
 * The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element,
 * the existing transition is returned for that element.
 * 
 * For each selected element, selects only the elements that match the specified filter, and returns a transition on the resulting selection.
 * 
 * The new transition has the same id, name and timing as this transition; however, if a transition with the same id already exists on a selected element,
 * the existing transition is returned for that element.
 * 
 * The generic refers to the type of element which will be selected after applying the filter, i.e. if the element types
 * contained in a pre-filter selection are narrowed to a subset as part of the filtering.
 * 
 * @template FilteredElement
 * @param {string|?} filter A CSS selector string. / A filter function which is evaluated for each selected element, in order, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). The filter function returns a boolean indicating,
 * whether the selected element matches.
 * @return {?}
 */
Transition.prototype.filter = function(filter) {};

/**
 * Return the currently-assigned listener for the specified event typename on the first (non-null) selected element, if any.
 * If multiple typenames are specified, the first matching listener is returned.
 * 
 * Remove all listeners for a given name.
 * 
 * Add a listener to each selected element for the specified event typenames.
 * 
 * When a specified transition event is dispatched on a selected node, the specified listener will be invoked for each transitioning element.
 * Listeners always see the latest datum for their element, but the index is a property of the selection and is fixed when the listener is assigned;
 * to update the index, re-assign the listener.
 * 
 * @param {string} type_or_typenames Name of the event type for which the listener should be removed. To remove all listeners for a given name use ".foo"
 * as the typename, where foo is the name; to remove all listeners with no name, specify "." as the typename.
 * @param {null|?=} listener Use null to remove listeners. / A listener function which will be evaluated for each selected element, being passed the current datum (d), the current index (i),
 * and the current group (nodes), with this as the current DOM element (nodes[i]). Listeners always see the latest datum for their element,
 * but the index is a property of the selection and is fixed when the listener is assigned; to update the index, re-assign the listener.
 * @return {?}
 */
Transition.prototype.on = function(type_or_typenames, listener) {};

/**
 * Invoke the specified function for each selected element, passing the current datum (d),
 * the current index (i), and the current group (nodes), with this of the current DOM element (nodes[i]).
 * This method can be used to invoke arbitrary code for each selected element, and is useful for creating a context to access parent and child data simultaneously.
 * 
 * @param {?} func A function which is invoked for each selected element,
 *             being passed the current datum (d), the current index (i), and the current group (nodes), with this of the current DOM element (nodes[i]).
 * @return {?}
 */
Transition.prototype.each = function(func) {};

/**
 * Invoke the specified function exactly once, passing in this transition along with any optional arguments.
 * Returns this transition.
 * 
 * @param {?} func A function which is passed this transition as the first argument along with any optional arguments.
 * @param {...?} args List of optional arguments to be passed to the callback function.
 * @return {?}
 */
Transition.prototype.call = function(func, args) {};

/**
 * Return true if this transition contains no (non-null) elements.
 * @return {boolean}
 */
Transition.prototype.empty = function() {};

/**
 * Return the first (non-null) element in this transition. If the transition is empty, returns null.
 * @return {?}
 */
Transition.prototype.node = function() {};

/**
 * Return an array of all (non-null) elements in this transition.
 * @return {!Array<?>}
 */
Transition.prototype.nodes = function() {};

/**
 * Returns the total number of elements in this transition.
 * @return {number}
 */
Transition.prototype.size = function() {};

/**
 * Returns the current value of the delay for the first (non-null) element in the transition.
 * This is generally useful only if you know that the transition contains exactly one element.
 * For each selected element, sets the transition delay to the specified value in milliseconds.
 * If a delay is not specified, it defaults to zero.
 * 
 * For each selected element, sets the transition delay to the value in milliseconds returned by the
 * value function.
 * 
 * @param {number|?=} milliseconds Number of milliseconds for the delay. / A value function which is evaluated for each selected element, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this of the current DOM element (nodes[i]). The return value is a number
 * specifying the delay in milliseconds.
 * @return {number|?}
 */
Transition.prototype.delay = function(milliseconds) {};

/**
 * Returns the current value of the duration for the first (non-null) element in the transition.
 * This is generally useful only if you know that the transition contains exactly one element.
 * For each selected element, sets the transition duration to the specified value in milliseconds.
 * If a duration is not specified, it defaults to 250ms.
 * 
 * For each selected element, sets the transition duration to the value in milliseconds returned by the
 * value function.
 * 
 * @param {number|?=} milliseconds A value function which is evaluated for each selected element, being passed the current datum (d),
 * the current index (i), and the current group (nodes), with this of the current DOM element (nodes[i]). The return value is a number
 * specifying the duration in milliseconds.
 * @return {number|?}
 */
Transition.prototype.duration = function(milliseconds) {};

/**
 * Returns the current easing function for the first (non-null) element in the transition.
 * This is generally useful only if you know that the transition contains exactly one element.
 * Specifies the transition easing function for all selected elements. The value must be specified as a function.
 * The easing function is invoked for each frame of the animation, being passed the normalized time t in the range [0, 1];
 * it must then return the eased time tʹ which is typically also in the range [0, 1].
 * A good easing function should return 0 if t = 0 and 1 if t = 1. If an easing function is not specified,
 * it defaults to d3.easeCubic.
 * 
 * @param {?=} easingFn An easing function which is passed the normalized time t in the range [0, 1];
 * it must then return the eased time tʹ which is typically also in the range [0, 1].
 * A good easing function should return 0 if t = 0 and 1 if t = 1.
 * @return {?}
 */
Transition.prototype.ease = function(easingFn) {};

/**
 * Returns a new transition with the specified name. If a name is not specified, null is used.
 * The new transition is only exclusive with other transitions of the same name.
 * 
 * The generic "OldDatum" refers to the type of a previously-set datum of the selected HTML element in the Transition.
 * 
 * Returns a new transition from an existing transition.
 * 
 * When using a transition instance, the returned transition has the same id and name as the specified transition.
 * 
 * The generic "OldDatum" refers to the type of a previously-set datum of the selected HTML element in the Transition.
 * 
 * @template OldDatum
 * @param {string|?} name_or_transition Name of the transition. / A transition instance.
 * @return {?}
 */
function transition(name_or_transition) {}