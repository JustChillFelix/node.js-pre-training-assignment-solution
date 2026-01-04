"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_factory_1 = require("./todo-factory");
var a = (0, todo_factory_1.createToDo)({ title: "Learn TypeScript", description: "" });
var b = (0, todo_factory_1.createToDo)({ title: "Refactor code" });
console.log(a.id);
console.log(b.id);
console.log(a.status);
console.log(b.createdAt instanceof Date);
