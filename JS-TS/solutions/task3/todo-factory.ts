import { ToDoStatus, NewTodo, ToDo } from "./todo-types.ts";

let nextId = 1;

export function createToDo(todo: NewTodo): ToDo{
  return{
    id: nextId++,
    title:  todo.title,
    description: todo.description ?? '',
    status: ToDoStatus.PENDING,
    createdAt: new Date()
  };
}