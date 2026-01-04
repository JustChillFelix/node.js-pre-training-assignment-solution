import { toggleAll, clearCompleted, countByStatus } from "./todo-bulk";
import { ToDo, ToDoStatus } from "../task1/types";
import { createToDo } from "../task3/todo-factory";

let state: ToDo[] = [
  createToDo({ title: "Learn TS" }),
  createToDo({ title: "Write code" }),
  createToDo({ title: "Test functions" }),
];

state = toggleAll(state, true);
console.log("After toggleAll(true):", state);

console.log("Completed count:", countByStatus(state, ToDoStatus.COMPLETED));

state = clearCompleted(state);
console.log("After clearCompleted:", state);

state = [
  createToDo({ title: "Task A" }),
  createToDo({ title: "Task B" }),
];
state = toggleAll(state, false);
console.log("After toggleAll(false):", state);
console.log("Pending count:", countByStatus(state, ToDoStatus.PENDING));
