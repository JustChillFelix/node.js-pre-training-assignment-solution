import { ToDo, ToDoStatus, NewTodo } from './types';

const newTodo: NewTodo = {
    title: 'Example Title',
    description: 'Optional description example',
    status: ToDoStatus.COMPLETED
};

const todo: ToDo = {
    id: 1,
    title: 'Full todo',
    description: 'Test',
    status: ToDoStatus.IN_PROGRESS,
    createdAt: new Date()
};

console.log(newTodo);
console.log(todo);
