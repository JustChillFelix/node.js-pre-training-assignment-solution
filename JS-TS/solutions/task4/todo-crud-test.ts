import { addTodo, updateTodo, removeTodo, getTodo } from "./todo-crud";
import { ToDo, ToDoStatus } from "../task1/types";
import { createToDo } from "../task3/todo-factory";

let state: ToDo[] = [];

const todo = createToDo({ title: "Write tests" });
state = addTodo(state, todo);

state = updateTodo(state, todo.id, { status: ToDoStatus.COMPLETED });

const found = getTodo(state, todo.id);
console.log(found);

state = removeTodo(state, todo.id);
console.log(state);
