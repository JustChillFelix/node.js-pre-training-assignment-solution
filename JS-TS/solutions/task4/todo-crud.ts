import { ToDoStatus, NewTodo, ToDo } from "../task1/types";

export function addTodo(state: ToDo[], todo: ToDo): ToDo[] {
  return [...state, todo];
}

export function updateTodo(state: ToDo[], id: number, update: Partial<Omit<ToDo, 'id' | 'createdAt'>>): ToDo[] {
  const index = state.findIndex(t => t.id === id);
  if (index === -1) {
    throw new Error('Todo with id ${id} not found');
  }

  const updatedTodo: ToDo = {
    ...state[index],
    ...update,
  };

  return [
    ...state.slice(0, index),
    updatedTodo,
    ...state.slice(index+1),
  ];
}

export function removeTodo(state: ToDo[], id: number): ToDo[] {
  const index = state.findIndex(t => t.id === id);
  if (index === -1)
  {
    throw new Error('Todo with id ${id} not found');
  }

  return [
    ...state.slice(0, index),
    ...state.slice(index+1),
  ];
}

export function getTodo(state: ToDo[], id: number): ToDo | undefined {
  return state.find(t => t.id === id)
}
