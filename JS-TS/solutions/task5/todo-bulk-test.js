"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_bulk_1 = require("./todo-bulk");
var types_1 = require("../task1/types");
var todo_factory_1 = require("../task3/todo-factory");
var state = [
    (0, todo_factory_1.createToDo)({ title: "Learn TS" }),
    (0, todo_factory_1.createToDo)({ title: "Write code" }),
    (0, todo_factory_1.createToDo)({ title: "Test functions" }),
];
state = (0, todo_bulk_1.toggleAll)(state, true);
console.log("After toggleAll(true):", state);
console.log("Completed count:", (0, todo_bulk_1.countByStatus)(state, types_1.ToDoStatus.COMPLETED));
state = (0, todo_bulk_1.clearCompleted)(state);
console.log("After clearCompleted:", state);
state = [
    (0, todo_factory_1.createToDo)({ title: "Task A" }),
    (0, todo_factory_1.createToDo)({ title: "Task B" }),
];
state = (0, todo_bulk_1.toggleAll)(state, false);
console.log("After toggleAll(false):", state);
console.log("Pending count:", (0, todo_bulk_1.countByStatus)(state, types_1.ToDoStatus.PENDING));
