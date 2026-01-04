"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = createToDo;
var todo_types_1 = require("./todo-types");
var nextId = 1;
function createToDo(todo) {
    var _a;
    return {
        id: nextId++,
        title: todo.title,
        description: (_a = todo.description) !== null && _a !== void 0 ? _a : '',
        status: todo_types_1.ToDoStatus.PENDING,
        createdAt: new Date()
    };
}
