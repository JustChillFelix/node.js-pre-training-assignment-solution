import { ToDoStatus, ToDo } from '../JS-TS/solutions/task1/types';

describe('Task 01: Core Types', () => {
  it('TodoStatus enum should contain expected members', () => {
    expect(ToDoStatus).toHaveProperty('PENDING');
    expect(ToDoStatus).toHaveProperty('IN_PROGRESS');
    expect(ToDoStatus).toHaveProperty('COMPLETED');
  });

  it('New ToDo instance should satisfy Todo interface structure', () => {
    const sample: ToDo = {
      id: 1,
      title: 'Sample',
      description: 'desc',
      status: ToDoStatus.PENDING,
      createdAt: new Date(),
    };
    expect(sample.id).toBe(1);
  });
});
