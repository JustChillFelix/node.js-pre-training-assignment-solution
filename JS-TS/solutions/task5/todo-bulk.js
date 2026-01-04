"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleAll = toggleAll;
exports.clearCompleted = clearCompleted;
exports.countByStatus = countByStatus;
var types_1 = require("../task1/types");
var array_helpers_1 = require("../task2/array-helpers");
function toggleAll(state, completed) {
    return (0, array_helpers_1.mapArray)(state, function (todo) { return (__assign(__assign({}, todo), { status: completed ? types_1.ToDoStatus.COMPLETED : types_1.ToDoStatus.PENDING })); });
}
function clearCompleted(state) {
    return (0, array_helpers_1.filterArray)(state, function (todo) { return todo.status !== types_1.ToDoStatus.COMPLETED; });
}
function countByStatus(state, status) {
    return (0, array_helpers_1.reduceArray)(state, function (count, todo) { return (todo.status === status ? count + 1 : count); }, 0);
}
