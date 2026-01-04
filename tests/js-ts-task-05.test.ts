import { toggleAll, clearCompleted, countByStatus } from '../JS-TS/solutions/task5/todo-bulk';
import { createToDo } from '../JS-TS/solutions/task3/todo-factory';
import { ToDoStatus } from '../JS-TS/solutions/task3/todo-types';

describe('Task 05: Bulk operations & selectors', () => {
  const a = createToDo({ title: 'A' });
  const b = createToDo({ title: 'B' });
  const list = [a, b];

  it('toggleAll should mark all as completed', () => {
    const completed = toggleAll(list, true);
    expect(completed.every((t) => t.status === ToDoStatus.COMPLETED)).toBe(true);
    expect(list.every((t) => t.status === ToDoStatus.PENDING)).toBe(true);
  });

  it('clearCompleted should remove completed items', () => {
    const done = toggleAll(list, true);
    const cleared = clearCompleted(done);
    expect(cleared).toHaveLength(0);
  });

  it('countByStatus should return correct number', () => {
    const count = countByStatus(list, ToDoStatus.PENDING);
    expect(count).toBe(2);
  });
});
