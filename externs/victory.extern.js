/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/victory/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "victory"
/** @const */
tsickle_declare_module.victory = {};

/* TODO: ImportDeclaration in tsickle_declare_module.victory */

/** @typedef {!Object<string,(string|number)>} */
tsickle_declare_module.victory.AnimationStyle;

/** @typedef {(!Object<string,(string|number)>|!Array<?>)} */
tsickle_declare_module.victory.AnimationData;

/** @typedef {string} */
tsickle_declare_module.victory.AnimationEasing;

/** @typedef {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.StringOrNumberOrCallback;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryStyleInterface = function() {};
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryStyleInterface.prototype.parent;
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryStyleInterface.prototype.data;
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryStyleInterface.prototype.labels;
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryStyleInterface.prototype.tickLabels;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryAnimationProps = function() {};
 /** @type {function(!Object<string,(string|number)>): !React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryAnimationProps.prototype.children;
 /** @type {number} */
tsickle_declare_module.victory.VictoryAnimationProps.prototype.duration;
 /** @type {string} */
tsickle_declare_module.victory.VictoryAnimationProps.prototype.easing;
 /** @type {number} */
tsickle_declare_module.victory.VictoryAnimationProps.prototype.delay;
 /** @type {function(): void} */
tsickle_declare_module.victory.VictoryAnimationProps.prototype.onEnd;
 /** @type {(!Object<string,(string|number)>|!Array<?>)} */
tsickle_declare_module.victory.VictoryAnimationProps.prototype.data;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryAnimation = function() {};

/** @typedef {string} */
tsickle_declare_module.victory.TextAnchorType;

/** @typedef {string} */
tsickle_declare_module.victory.VerticalAnchorType;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryLabelProps = function() {};
 /** @type {(string|number)} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.angle;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.capHeight;
 /** @type {!Object} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.datum;
 /** @type {!Array<?>} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.data;
 /** @type {!React.DOMAttributes<?>} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.text;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.children;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.lineHeight;
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.style;
 /** @type {(string|function(): string)} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.textAnchor;
 /** @type {(string|function(): string)} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.verticalAnchor;
 /** @type {(string|!Object|function(): (string|?))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.transform;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.x;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.y;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.dx;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryLabelProps.prototype.dy;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryLabel = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryContainerProps = function() {};
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryContainerProps.prototype.style;
 /** @type {number} */
tsickle_declare_module.victory.VictoryContainerProps.prototype.height;
 /** @type {number} */
tsickle_declare_module.victory.VictoryContainerProps.prototype.width;
 /** @type {!React.DOMAttributes<?>} */
tsickle_declare_module.victory.VictoryContainerProps.prototype.events;
 /** @type {string} */
tsickle_declare_module.victory.VictoryContainerProps.prototype.title;
 /** @type {string} */
tsickle_declare_module.victory.VictoryContainerProps.prototype.desc;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryContainer = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryThemeDefinition = function() {};
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.area;
 /** @type {{axis: !React.CSSProperties, axisLabel: !React.CSSProperties, grid: !React.CSSProperties, ticks: !React.CSSProperties, tickLabels: !React.CSSProperties}} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.axis;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.bar;
 /** @type {?} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.candlestick;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.line;
 /** @type {{props: {width: number, height: number, colorScale: !Array<string>}, style: !VictoryStyleInterface}} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.pie;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.scatter;
 /** @type {{width: number, height: number, colorScale: !Array<string>}} */
tsickle_declare_module.victory.VictoryThemeDefinition.prototype.props;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryThemeInterface = function() {};
 /** @type {!VictoryThemeDefinition} */
tsickle_declare_module.victory.VictoryThemeInterface.prototype.material;
 /** @type {!VictoryThemeInterface} */
tsickle_declare_module.victory.VictoryTheme;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.AnimatePropTypeInterface = function() {};
 /** @type {number} */
tsickle_declare_module.victory.AnimatePropTypeInterface.prototype.duration;
 /** @type {function(): void} */
tsickle_declare_module.victory.AnimatePropTypeInterface.prototype.onEnd;
 /** @type {{duration: number, before: function(?): !Object<string,(string|number)>}} */
tsickle_declare_module.victory.AnimatePropTypeInterface.prototype.onExit;
 /** @type {{duration: number, before: function(?): !Object<string,(string|number)>, after: function(?): ?}} */
tsickle_declare_module.victory.AnimatePropTypeInterface.prototype.onEnter;
 /** @type {string} */
tsickle_declare_module.victory.AnimatePropTypeInterface.prototype.easing;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.EventCallbackInterface = function() {};
 /** @type {string} */
tsickle_declare_module.victory.EventCallbackInterface.prototype.childName;
 /** @type {TTarget} */
tsickle_declare_module.victory.EventCallbackInterface.prototype.target;
 /** @type {TEventKey} */
tsickle_declare_module.victory.EventCallbackInterface.prototype.eventKey;
 /** @type {function(?): ?} */
tsickle_declare_module.victory.EventCallbackInterface.prototype.mutation;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.EventPropTypeInterface = function() {};
 /** @type {string} */
tsickle_declare_module.victory.EventPropTypeInterface.prototype.childName;
 /** @type {TTarget} */
tsickle_declare_module.victory.EventPropTypeInterface.prototype.target;
 /** @type {TEventKey} */
tsickle_declare_module.victory.EventPropTypeInterface.prototype.eventKey;
 /** @type {!Object<string,(function(!React.SyntheticEvent<?>): !EventCallbackInterface<TTarget, TEventKey>|function(!React.SyntheticEvent<?>): !Array<!EventCallbackInterface<TTarget, TEventKey>>)>} */
tsickle_declare_module.victory.EventPropTypeInterface.prototype.eventHandlers;

/** @typedef {(!Array<?>|{x: !Array<?>, y: !Array<?>})} */
tsickle_declare_module.victory.DomainPropType;

/** @typedef {(number|{x: number, y: number})} */
tsickle_declare_module.victory.DomainPaddingPropType;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.D3Scale = function() {};
 /** @type {function(): ?} */
tsickle_declare_module.victory.D3Scale.prototype.domain;
 /** @type {function(): ?} */
tsickle_declare_module.victory.D3Scale.prototype.range;
 /** @type {function(): ?} */
tsickle_declare_module.victory.D3Scale.prototype.copy;

/** @typedef {string} */
tsickle_declare_module.victory.ScalePropType;

/** @typedef {(!Array<string>|{x: !Array<string>, y: !Array<string>})} */
tsickle_declare_module.victory.CategoryPropType;

/** @typedef {(string|number|!Array<string>|function(?): (string|number|!Array<string>))} */
tsickle_declare_module.victory.DataGetterPropType;

/** @typedef {string} */
tsickle_declare_module.victory.InterpolationPropType;

/** @typedef {(!Array<string>|string)} */
tsickle_declare_module.victory.ColorScalePropType;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryCommonProps = function() {};
 /** @type {!AnimatePropTypeInterface} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.animate;
 /** @type {string} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.name;
 /** @type {number} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.height;
 /** @type {(number|{top: number, bottom: number, left: number, right: number})} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.padding;
 /** @type {(string|!D3Scale|{x: (string|!D3Scale), y: (string|!D3Scale)})} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.scale;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.standalone;
 /** @type {number} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.width;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.containerComponent;
 /** @type {!VictoryThemeDefinition} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.theme;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryCommonProps.prototype.groupComponent;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryDatableProps = function() {};
 /** @type {(!Array<string>|{x: !Array<string>, y: !Array<string>})} */
tsickle_declare_module.victory.VictoryDatableProps.prototype.categories;
 /** @type {!Array<?>} */
tsickle_declare_module.victory.VictoryDatableProps.prototype.data;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryDatableProps.prototype.dataComponent;
 /** @type {(!Array<?>|{x: !Array<?>, y: !Array<?>})} */
tsickle_declare_module.victory.VictoryDatableProps.prototype.domain;
 /** @type {(string|number|!Array<string>|function(?): (string|number|!Array<string>))} */
tsickle_declare_module.victory.VictoryDatableProps.prototype.x;
 /** @type {(string|number|!Array<string>|function(?): (string|number|!Array<string>))} */
tsickle_declare_module.victory.VictoryDatableProps.prototype.y;
/**
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryLabableProps = function() {};
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryLabableProps.prototype.labelComponent;
/**
 * @extends {VictoryLabableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryMultiLabeableProps = function() {};
 /** @type {(!Array<string>|function(?): string)} */
tsickle_declare_module.victory.VictoryMultiLabeableProps.prototype.labels;
/**
 * @extends {VictoryLabableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictorySingleLabableProps = function() {};
 /** @type {(string|function(?): string)} */
tsickle_declare_module.victory.VictorySingleLabableProps.prototype.label;
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryDatableProps}
 * @extends {VictorySingleLabableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryAreaProps = function() {};
 /** @type {!Array<!EventPropTypeInterface<string, string>>} */
tsickle_declare_module.victory.VictoryAreaProps.prototype.events;
 /** @type {string} */
tsickle_declare_module.victory.VictoryAreaProps.prototype.interpolation;
 /** @type {number} */
tsickle_declare_module.victory.VictoryAreaProps.prototype.samples;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryAreaProps.prototype.style;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryArea = function() {};
/**
 * @extends {VictoryCommonProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryAxisProps = function() {};
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.axisComponent;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.axisLabelComponent;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.crossAxis;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.dependentAxis;
 /** @type {(!Array<?>|{x: !Array<?>, y: !Array<?>})} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.domain;
 /** @type {!Array<!EventPropTypeInterface<string, (string|number)>>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.events;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.gridComponent;
 /** @type {?} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.label;
 /** @type {number} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.offsetX;
 /** @type {number} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.offsetY;
 /** @type {string} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.orientation;
 /** @type {{parent: !React.CSSProperties, axis: !React.CSSProperties, axisLabel: !React.CSSProperties, grid: !React.CSSProperties, ticks: !React.CSSProperties, tickLabels: !React.CSSProperties}} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.style;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.tickComponent;
 /** @type {number} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.tickCount;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.tickLabelComponent;
 /** @type {(!Array<?>|function(?): (string|number))} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.tickFormat;
 /** @type {!Array<?>} */
tsickle_declare_module.victory.VictoryAxisProps.prototype.tickValues;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryAxis = function() {};
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryDatableProps}
 * @extends {VictoryMultiLabeableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryBarProps = function() {};
 /** @type {!Array<!EventPropTypeInterface<string, (string|number)>>} */
tsickle_declare_module.victory.VictoryBarProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryBarProps.prototype.eventKey;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryBarProps.prototype.horizontal;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryBarProps.prototype.style;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryBar = function() {};
/**
 * @extends {VictoryCommonProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryChartProps = function() {};
 /** @type {(!Array<?>|{x: !Array<?>, y: !Array<?>})} */
tsickle_declare_module.victory.VictoryChartProps.prototype.domain;
 /** @type {(number|{x: number, y: number})} */
tsickle_declare_module.victory.VictoryChartProps.prototype.domainPadding;
 /** @type {!Array<!EventPropTypeInterface<string, (string|number|function(): (string|number))>>} */
tsickle_declare_module.victory.VictoryChartProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryChartProps.prototype.eventKey;
 /** @type {!React.CSSProperties} */
tsickle_declare_module.victory.VictoryChartProps.prototype.style;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryChart = function() {};
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryMultiLabeableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryGroupProps = function() {};
 /** @type {(!Array<string>|{x: !Array<string>, y: !Array<string>})} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.categories;
 /** @type {(!Array<string>|string)} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.colorScale;
 /** @type {(!Array<?>|{x: !Array<?>, y: !Array<?>})} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.domain;
 /** @type {(number|{x: number, y: number})} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.domainPadding;
 /** @type {!Array<!EventPropTypeInterface<string, (string|number|function(): (string|number))>>} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.eventKey;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.horizontal;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryGroupProps.prototype.style;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryGroup = function() {};
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryDatableProps}
 * @extends {VictorySingleLabableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryLineProps = function() {};
 /** @type {!Array<!EventPropTypeInterface<string, (string|number)>>} */
tsickle_declare_module.victory.VictoryLineProps.prototype.events;
 /** @type {string} */
tsickle_declare_module.victory.VictoryLineProps.prototype.interpolation;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLineProps.prototype.samples;
 /** @type {(!Function|!Array<string>|!Array<number>)} */
tsickle_declare_module.victory.VictoryLineProps.prototype.labels;
 /** @type {(string|!Function|!Array<string>)} */
tsickle_declare_module.victory.VictoryLineProps.prototype.sortKey;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryLineProps.prototype.style;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryLine = function() {};
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryDatableProps}
 * @extends {VictorySingleLabableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryLegendProps = function() {};
 /** @type {(!Array<string>|string)} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.colorScale;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.style;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.containerComponent;
 /** @type {!Array<{name: string, symbol: {type: string}}>} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.data;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.dataComponent;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.groupComponent;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.gutter;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.labelComponent;
 /** @type {string} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.orientation;
 /** @type {(number|{top: number, bottom: number, left: number, right: number})} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.padding;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.standalone;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.symbolSpacer;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.width;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.height;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.x;
 /** @type {number} */
tsickle_declare_module.victory.VictoryLegendProps.prototype.y;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryLegend = function() {};

/** @typedef {string} */
tsickle_declare_module.victory.ScatterSymbolType;
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryDatableProps}
 * @extends {VictoryMultiLabeableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryScatterProps = function() {};
 /** @type {string} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.bubbleProperty;
 /** @type {!Array<!EventPropTypeInterface<string, (string|number|function(): (string|number))>>} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.eventKey;
 /** @type {number} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.maxBubbleSize;
 /** @type {number} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.samples;
 /** @type {(number|function(?): number)} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.size;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.style;
 /** @type {(string|function(?): string)} */
tsickle_declare_module.victory.VictoryScatterProps.prototype.symbol;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryScatter = function() {};
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryMultiLabeableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryStackProps = function() {};
 /** @type {(!Array<string>|{x: !Array<string>, y: !Array<string>})} */
tsickle_declare_module.victory.VictoryStackProps.prototype.categories;
 /** @type {(!Array<string>|string)} */
tsickle_declare_module.victory.VictoryStackProps.prototype.colorScale;
 /** @type {(!Array<?>|{x: !Array<?>, y: !Array<?>})} */
tsickle_declare_module.victory.VictoryStackProps.prototype.domain;
 /** @type {(number|{x: number, y: number})} */
tsickle_declare_module.victory.VictoryStackProps.prototype.domainPadding;
 /** @type {!Array<!EventPropTypeInterface<string, (string|number|function(): (string|number))>>} */
tsickle_declare_module.victory.VictoryStackProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryStackProps.prototype.eventKey;
 /** @type {boolean} */
tsickle_declare_module.victory.VictoryStackProps.prototype.horizontal;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryStackProps.prototype.style;
 /** @type {number} */
tsickle_declare_module.victory.VictoryStackProps.prototype.xOffset;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryStack = function() {};
/**
 * @extends {VictoryCommonProps}
 * @extends {VictoryMultiLabeableProps}
 * @record
 * @struct
 */
tsickle_declare_module.victory.VictoryPieProps = function() {};
 /** @type {(!Array<string>|string)} */
tsickle_declare_module.victory.VictoryPieProps.prototype.colorScale;
 /** @type {!Array<?>} */
tsickle_declare_module.victory.VictoryPieProps.prototype.data;
 /** @type {!React.ReactElement<?>} */
tsickle_declare_module.victory.VictoryPieProps.prototype.dataComponent;
 /** @type {number} */
tsickle_declare_module.victory.VictoryPieProps.prototype.labelRadius;
 /** @type {number} */
tsickle_declare_module.victory.VictoryPieProps.prototype.endAngle;
 /** @type {!Array<!EventPropTypeInterface<string, (string|number|function(): (string|number)|!Array<string>|!Array<number>)>>} */
tsickle_declare_module.victory.VictoryPieProps.prototype.events;
 /** @type {(string|number|function(): (string|number))} */
tsickle_declare_module.victory.VictoryPieProps.prototype.eventKey;
 /** @type {number} */
tsickle_declare_module.victory.VictoryPieProps.prototype.innerRadius;
 /** @type {number} */
tsickle_declare_module.victory.VictoryPieProps.prototype.cornerRadius;
 /** @type {number} */
tsickle_declare_module.victory.VictoryPieProps.prototype.padAngle;
 /** @type {number} */
tsickle_declare_module.victory.VictoryPieProps.prototype.startAngle;
 /** @type {!VictoryStyleInterface} */
tsickle_declare_module.victory.VictoryPieProps.prototype.style;
 /** @type {(string|number|!Array<string>|function(?): (string|number|!Array<string>))} */
tsickle_declare_module.victory.VictoryPieProps.prototype.x;
 /** @type {(string|number|!Array<string>|function(?): (string|number|!Array<string>))} */
tsickle_declare_module.victory.VictoryPieProps.prototype.y;
/**
 * @extends {React.Component}
 * @constructor
 * @struct
 */
tsickle_declare_module.victory.VictoryPie = function() {};