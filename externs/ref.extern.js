/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ref/index.d.ts:
/**
 * @record
 * @struct
 */
function Type() {}
 /** @type {number} */
Type.prototype.size;
 /** @type {number} */
Type.prototype.indirection;
 /** @type {string} */
Type.prototype.name;
 /** @type {number} */
Type.prototype.alignment;

/**
 * To invoke when `ref.get` is invoked on a buffer of this type.
 * @param {?} buffer
 * @param {number} offset
 * @return {?}
 */
Type.prototype.get = function(buffer, offset) {};

/**
 * To invoke when `ref.set` is invoked on a buffer of this type.
 * @param {?} buffer
 * @param {number} offset
 * @param {?} value
 * @return {void}
 */
Type.prototype.set = function(buffer, offset, value) {};
 /** @type {?} */
var NULL;
 /** @type {?} */
var NULL_POINTER;

/**
 * Get the memory address of buffer.
 * @param {?} buffer
 * @return {number}
 */
function address(buffer) {}

/**
 * Allocate the memory with the given value written to it.
 * Allocate the memory with the given value written to it.
 * @param {?|string} type
 * @param {?=} value
 * @return {?}
 */
function alloc(type, value) {}

/**
 * Allocate the memory with the given string written to it with the given
 * encoding (defaults to utf8). The buffer is 1 byte longer than the
 * string itself, and is NULL terminated.
 * @param {string} string
 * @param {string=} encoding
 * @return {?}
 */
function allocCString(string, encoding) {}

/**
 * Coerce a type.
 * Coerce a type. String are looked up from the ref.types object.
 * @param {?|string} type
 * @return {?}
 */
function coerceType(type) {}

/**
 * Get value after dereferencing buffer.
 * That is, first it checks the indirection count of buffer's type, and
 * if it's greater than 1 then it merely returns another Buffer, but with
 * one level less indirection.
 * @param {?} buffer
 * @return {?}
 */
function deref(buffer) {}

/**
 * Create clone of the type, with decremented indirection level by 1.
 * Create clone of the type, with decremented indirection level by 1.
 * @param {?|string} type
 * @return {?}
 */
function derefType(type) {}
 /** @type {string} */
var endianness;

/**
 * Check the indirection level and return a dereferenced when necessary.
 * Check the indirection level and return a dereferenced when necessary.
 * @param {?} buffer
 * @param {number=} offset
 * @param {?|string=} type
 * @return {?}
 */
function get(buffer, offset, type) {}

/**
 * Get type of the buffer. Create a default type when none exists.
 * @param {?} buffer
 * @return {?}
 */
function getType(buffer) {}

/**
 * Check the NULL.
 * @param {?} buffer
 * @return {boolean}
 */
function isNull(buffer) {}

/**
 * Read C string until the first NULL.
 * @param {?} buffer
 * @param {number=} offset
 * @return {string}
 */
function readCString(buffer, offset) {}

/**
 * Read a big-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @param {?} buffer
 * @param {number=} offset
 * @return {?}
 */
function readInt64BE(buffer, offset) {}

/**
 * Read a little-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @param {?} buffer
 * @param {number=} offset
 * @return {?}
 */
function readInt64LE(buffer, offset) {}

/**
 * Read a JS Object that has previously been written.
 * @param {?} buffer
 * @param {number=} offset
 * @return {!Object}
 */
function readObject(buffer, offset) {}

/**
 * Read data from the pointer.
 * @param {?} buffer
 * @param {number=} offset
 * @param {number=} length
 * @return {?}
 */
function readPointer(buffer, offset, length) {}

/**
 * Read a big-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @param {?} buffer
 * @param {number=} offset
 * @return {?}
 */
function readUInt64BE(buffer, offset) {}

/**
 * Read a little-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @param {?} buffer
 * @param {number=} offset
 * @return {?}
 */
function readUInt64LE(buffer, offset) {}

/**
 * Create pointer to buffer.
 * @param {?} buffer
 * @return {?}
 */
function ref(buffer) {}

/**
 * Create clone of the type, with incremented indirection level by 1.
 * Create clone of the type, with incremented indirection level by 1.
 * @param {?|string} type
 * @return {?}
 */
function refType(type) {}

/**
 * Create buffer with the specified size, with the same address as source.
 * This function "attaches" source to the returned buffer to prevent it from
 * being garbage collected.
 * @param {?} buffer
 * @param {number} size
 * @param {number=} offset
 * @return {?}
 */
function reinterpret(buffer, size, offset) {}

/**
 * Scan past the boundary of the buffer's length until it finds size number
 * of aligned NULL bytes.
 * @param {?} buffer
 * @param {number} size
 * @param {number=} offset
 * @return {?}
 */
function reinterpretUntilZeros(buffer, size, offset) {}

/**
 * Write pointer if the indirection is 1, otherwise write value.
 * Write pointer if the indirection is 1, otherwise write value.
 * @param {?} buffer
 * @param {number} offset
 * @param {?} value
 * @param {?|string=} type
 * @return {void}
 */
function set(buffer, offset, value, type) {}

/**
 * Write the string as a NULL terminated. Default encoding is utf8.
 * @param {?} buffer
 * @param {number} offset
 * @param {string} string
 * @param {string=} encoding
 * @return {void}
 */
function writeCString(buffer, offset, string, encoding) {}

/**
 * Write a big-endian signed 64-bit int.
 * Write a big-endian signed 64-bit int.
 * @param {?} buffer
 * @param {number} offset
 * @param {number|string} input
 * @return {void}
 */
function writeInt64BE(buffer, offset, input) {}

/**
 * Write a little-endian signed 64-bit int.
 * Write a little-endian signed 64-bit int.
 * @param {?} buffer
 * @param {number} offset
 * @param {number|string} input
 * @return {void}
 */
function writeInt64LE(buffer, offset, input) {}

/**
 * Write the JS Object. This function "attaches" object to buffer to prevent
 * it from being garbage collected.
 * @param {?} buffer
 * @param {number} offset
 * @param {!Object} object
 * @return {void}
 */
function writeObject(buffer, offset, object) {}

/**
 * Write the memory address of pointer to buffer at the specified offset. This
 * function "attaches" object to buffer to prevent it from being garbage collected.
 * @param {?} buffer
 * @param {number} offset
 * @param {?} pointer
 * @return {void}
 */
function writePointer(buffer, offset, pointer) {}

/**
 * Write a little-endian unsigned 64-bit int.
 * Write a little-endian unsigned 64-bit int.
 * @param {?} buffer
 * @param {number} offset
 * @param {number|string} input
 * @return {void}
 */
function writeUInt64BE(buffer, offset, input) {}

/**
 * Attach object to buffer such.
 * It prevents object from being garbage collected until buffer does.
 * @param {?} buffer
 * @param {!Object} object
 * @return {void}
 */
function _attach(buffer, object) {}

/**
 * Same as ref.reinterpret, except that this version does not attach buffer.
 * @param {?} buffer
 * @param {number} size
 * @param {number=} offset
 * @return {?}
 */
function _reinterpret(buffer, size, offset) {}

/**
 * Same as ref.reinterpretUntilZeros, except that this version does not attach buffer.
 * @param {?} buffer
 * @param {number} size
 * @param {number=} offset
 * @return {?}
 */
function _reinterpretUntilZeros(buffer, size, offset) {}

/**
 * Same as ref.writePointer, except that this version does not attach pointer.
 * @param {?} buffer
 * @param {number} offset
 * @param {?} pointer
 * @return {void}
 */
function _writePointer(buffer, offset, pointer) {}

/**
 * Same as ref.writeObject, except that this version does not attach object.
 * @param {?} buffer
 * @param {number} offset
 * @param {!Object} object
 * @return {void}
 */
function _writeObject(buffer, offset, object) {}
 /** @type {{void: ?, int64: ?, ushort: ?, int: ?, uint64: ?, float: ?, uint: ?, long: ?, double: ?, int8: ?, ulong: ?, Object: ?, uint8: ?, longlong: ?, CString: ?, int16: ?, ulonglong: ?, bool: ?, uint16: ?, char: ?, byte: ?, int32: ?, uchar: ?, size_t: ?, uint32: ?, short: ?}} */
var types;