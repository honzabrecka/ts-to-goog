/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/d3-dsv v0/index.d.ts:

/**
 * A parser and formatter for DSV (CSV and TSV) files. Extracted from D3.
 * @param {string} delimiter
 * @param {string=} encoding
 * @return {?}
 */
function loader(delimiter, encoding) {}

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function D3Dsv() {}

/**
 * Parses the specified string, which is the contents of a CSV file, returning an array of objects representing the parsed rows.
 * The string is assumed to be RFC4180-compliant.
 * Unlike the parseRows method, this method requires that the first line of the CSV file contains a comma-separated list of column names;
 * these column names become the attributes on the returned objects.
 * For example, consider the following CSV file:
 * 
 * Year,Make,Model,Length
 * 1997,Ford,E350,2.34
 * 2000,Mercury,Cougar,2.38
 * 
 * The resulting JavaScript array is:
 * 
 * [  {"Year": "1997", "Make": "Ford", "Model": "E350", "Length": "2.34"},
 * {"Year": "2000", "Make": "Mercury", "Model": "Cougar", "Length": "2.38"} ]
 * @template TRow
 * @param {string} table
 * @param {?=} accessor
 * @return {!Array<?>}
 */
D3Dsv.prototype.parse = function(table, accessor) {};

/**
 * Parses the specified string, which is the contents of a CSV file, returning an array of arrays representing the parsed rows.
 * The string is assumed to be RFC4180-compliant.
 * Unlike the parse method, this method treats the header line as a standard row, and should be used whenever the CSV file does not contain a header.
 * Each row is represented as an array rather than an object.
 * Rows may have variable length.
 * For example, consider the following CSV file:
 * 
 * 1997,Ford,E350,2.34
 * 2000,Mercury,Cougar,2.38
 * The resulting JavaScript array is:
 * 
 * [  ["1997", "Ford", "E350", "2.34"],
 * ["2000", "Mercury", "Cougar", "2.38"] ]
 * Note that the values themselves are always strings; they will not be automatically converted to numbers. See parse for details.
 * @template TRow
 * @param {string} table
 * @param {?=} accessor
 * @return {!Array<?>}
 */
D3Dsv.prototype.parseRows = function(table, accessor) {};

/**
 * Converts the specified array of rows into comma-separated values format, returning a string.
 * This operation is the reverse of parse.
 * Each row will be separated by a newline (\n), and each column within each row will be separated by a comma (,).
 * Values that contain either commas, double-quotes (") or newlines will be escaped using double-quotes.
 * 
 * Each row should be an object, and all object properties will be converted into fields.
 * For greater control over which properties are converted, convert the rows into arrays containing only the properties that should be converted and use formatRows.
 * @param {!Array<?>} rows
 * @return {string}
 */
D3Dsv.prototype.format = function(rows) {};

/**
 * Converts the specified array of rows into comma-separated values format, returning a string.
 * This operation is the reverse of parseRows. Each row will be separated by a newline (\n), and each column within each row will be separated by a comma (,).
 * Values that contain either commas, double-quotes (") or newlines will be escaped using double-quotes.
 * @param {!Array<?>} rows
 * @return {string}
 */
D3Dsv.prototype.formatRows = function(rows) {};