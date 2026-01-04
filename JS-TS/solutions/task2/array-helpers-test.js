"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_helpers_1 = require("./array-helpers");
console.log((0, array_helpers_1.mapArray)([1, 2, 3], function (n, i) { return n + i; }));
console.log((0, array_helpers_1.filterArray)([1, 2, 3, 4], function (n) { return n % 2 === 0; }));
console.log((0, array_helpers_1.reduceArray)([1, 2, 3], function (acc, n) { return acc + n; }, 0));
var _a = (0, array_helpers_1.partition)([1, 2, 3, 4], function (n) { return n % 2 === 0; }), evens = _a[0], odds = _a[1];
console.log(evens, odds);
console.log((0, array_helpers_1.groupBy)(['hi', 'hello', 'yo'], function (w) { return w.length; }));
