import { ToDo, ToDoStatus, NewTodo } from '../task1/types';
import { mapArray, filterArray, reduceArray, partition, groupBy } from '../task2/array-helpers';

export function toggleAll(state: ToDo[], completed: boolean): ToDo[] {
  return mapArray(state, (todo) => ({
    ...todo,
    status: completed ? ToDoStatus.COMPLETED : ToDoStatus.PENDING,
  }));
}

export function clearCompleted(state: ToDo[]): ToDo[] {
  return filterArray(state, (todo) => todo.status !== ToDoStatus.COMPLETED);
}

export function countByStatus(state: ToDo[], status: ToDoStatus): number {
  return reduceArray(state, (count, todo) => (todo.status === status ? count + 1 : count), 0);
}
