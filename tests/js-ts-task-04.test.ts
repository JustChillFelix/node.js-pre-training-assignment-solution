import { addTodo, updateTodo, removeTodo, getTodo } from '../JS-TS/solutions/task4/todo-crud';
import { createToDo } from '../JS-TS/solutions/task3/todo-factory';
import { ToDoStatus } from '../JS-TS/solutions/task3/todo-types';

describe('Task 04: CRUD operations', () => {
  const base = [];
  const todo = createToDo({ title: 'X' });

  it('addTodo should add item immutably', () => {
    const next = addTodo(base, todo);
    expect(next).toHaveLength(1);
    expect(base).toHaveLength(0);
  });

  it('updateTodo should update fields immutably', () => {
    const list = addTodo(base, todo);
    const updated = updateTodo(list, todo.id, { status: ToDoStatus.COMPLETED });
    expect(updated.find((t) => t.id === todo.id)!.status).toBe(ToDoStatus.COMPLETED);
    expect(list.find((t) => t.id === todo.id)!.status).toBe(ToDoStatus.PENDING);
  });

  it('removeTodo should remove item immutably', () => {
    const list = addTodo(base, todo);
    const after = removeTodo(list, todo.id);
    expect(after).toHaveLength(0);
    expect(list).toHaveLength(1);
  });

  it('getTodo should return item by id', () => {
    const list = addTodo(base, todo);
    expect(getTodo(list, todo.id)).toEqual(todo);
  });
});
