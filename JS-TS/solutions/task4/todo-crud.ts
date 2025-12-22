import { ToDoStatus, NewTodo, ToDo } from "../task1/types.ts";

export function addTodo(state: ToDo[], todo: ToDo): ToDo[] {
  throw new Error('addTodo: not implemented');
}

export function updateTodo(state: ToDo[], id: number, update: Partial<Omit<ToDo, 'id' | 'createdAt'>>): ToDo[] {
  throw new Error('updateTodo: not implemented');
}

export function removeTodo(state: ToDo[], id: number): ToDo[] {
  throw new Error('removeTodo: not implemented');
}

export function getTodo(state: ToDo[], id: number): ToDo | undefined {
  throw new Error('getTodo: not implemented');
}
