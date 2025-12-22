import { addTodo, updateTodo, removeTodo, getTodo} from "./todo-crud.ts";
import { ToDoStatus, NewTodo, ToDo } from "../task1/types.ts";
import { createToDo } from "../task3/todo-factory.ts";

let state: ToDo[] = [];

const todo = createToDo({ title: "Write tests" });
state = addTodo(state, todo);

state = updateTodo(state, todo.id, { status: ToDoStatus.COMPLETED });

const found = getTodo(state, todo.id);

state = removeTodo(state, todo.id);
