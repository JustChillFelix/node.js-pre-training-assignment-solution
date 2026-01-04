"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapArray = mapArray;
exports.filterArray = filterArray;
exports.reduceArray = reduceArray;
exports.partition = partition;
exports.groupBy = groupBy;
function ensureArray(source) {
    if (source == null || !Array.isArray(source)) {
        throw new TypeError('Source must be a valid array');
    }
}
function mapArray(source, mapper) {
    ensureArray(source);
    var result = [];
    var index = 0;
    for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
        var item = source_1[_i];
        result.push(mapper(item, index));
        index++;
    }
    return result;
}
function filterArray(source, predicate) {
    ensureArray(source);
    var result = [];
    var index = 0;
    for (var _i = 0, source_2 = source; _i < source_2.length; _i++) {
        var item = source_2[_i];
        if (predicate(item, index)) {
            result.push(item);
        }
        index++;
    }
    return result;
}
function reduceArray(source, reducer, initial) {
    ensureArray(source);
    var acc = initial;
    var index = 0;
    for (var _i = 0, source_3 = source; _i < source_3.length; _i++) {
        var item = source_3[_i];
        acc = reducer(acc, item, index);
        index++;
    }
    return acc;
}
function partition(source, predicate) {
    ensureArray(source);
    var pass = [];
    var fail = [];
    for (var _i = 0, source_4 = source; _i < source_4.length; _i++) {
        var item = source_4[_i];
        if (predicate(item)) {
            pass.push(item);
        }
        else {
            fail.push(item);
        }
    }
    return [pass, fail];
}
function groupBy(source, keySelector) {
    ensureArray(source);
    var result = {};
    for (var _i = 0, source_5 = source; _i < source_5.length; _i++) {
        var item = source_5[_i];
        var key = keySelector(item);
        if (!Object.prototype.hasOwnProperty.call(result, key)) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}
