import { createToDo } from '../JS-TS/solutions/task3/todo-factory';
import { ToDoStatus } from '../JS-TS/solutions/task3/todo-types';

describe('Task 03: Todo Factory', () => {
  it('should create todo with unique id and defaults', () => {
    const a = createToDo({ title: 'A', description: '' });
    const b = createToDo({ title: 'B' });
    expect(a.id).toBe(1);
    expect(b.id).toBe(2);
    expect(a.status).toBe(ToDoStatus.PENDING);
    expect(b.status).toBe(ToDoStatus.PENDING);
    expect(a.createdAt instanceof Date).toBe(true);
  });
});
