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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.removeTodo = removeTodo;
exports.getTodo = getTodo;
function addTodo(state, todo) {
    return __spreadArray(__spreadArray([], state, true), [todo], false);
}
function updateTodo(state, id, update) {
    var index = state.findIndex(function (t) { return t.id === id; });
    if (index === -1) {
        throw new Error('Todo with id ${id} not found');
    }
    var updatedTodo = __assign(__assign({}, state[index]), update);
    return __spreadArray(__spreadArray(__spreadArray([], state.slice(0, index), true), [
        updatedTodo
    ], false), state.slice(index + 1), true);
}
function removeTodo(state, id) {
    var index = state.findIndex(function (t) { return t.id === id; });
    if (index === -1) {
        throw new Error('Todo with id ${id} not found');
    }
    return __spreadArray(__spreadArray([], state.slice(0, index), true), state.slice(index + 1), true);
}
function getTodo(state, id) {
    return state.find(function (t) { return t.id === id; });
}
