"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var newTodo = {
    title: 'Example Title',
    description: 'Optional description example',
    status: types_1.ToDoStatus.COMPLETED
};
var todo = {
    id: 1,
    title: 'Full todo',
    description: 'Test',
    status: types_1.ToDoStatus.IN_PROGRESS,
    createdAt: new Date()
};
console.log(newTodo);
console.log(todo);
