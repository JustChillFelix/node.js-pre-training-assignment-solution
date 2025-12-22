import { InMemoryRepository } from '../repository';
import { ToDo, ToDoStatus, NewTodo } from '../task1/types';
import { addTodo, updateTodo, removeTodo, getTodo} from "../task4/todo-crud.ts";

let nextId = 1;

export class ToDoNotFoundError extends Error{
  constructor(id: number){
    super('Todo with id ${id} not found');
    this.name = "ToDoNotFoundError";
  }
}

function simulateLatency(): Promise<void>{
  const delay = 300 + Math.floor(Math.random() * 300);
  return new Promise(resolve => setTimeout(resolve,delay));
}

export class TodoApi {
  private repo = new InMemoryRepository<ToDo>();

  private todos: ToDo[] = [];

  async getAll(): Promise<ToDo[]> {
    await simulateLatency();
    return [...this.todos];
  }

  async add(newTodo: NewTodo): Promise<ToDo> {
    await simulateLatency();
    const todo: ToDo = {
      id: nextId++,
      title: newTodo.title,
      description: newTodo.description ?? "",
      status: ToDoStatus.PENDING,
      createdAt: new Date(),
    };

    this.todos.push(todo);
    return todo;
  }

  async update(id: number, update: Partial<Omit<ToDo, 'id' | 'createdAt'>>): Promise<ToDo> {
    await simulateLatency();
    const index = this.todos.findIndex(t => t.id === id);
    
    if (index === -1){
      throw new ToDoNotFoundError(id);
    }

    this.todos = updateTodo(this.todos, id, update);

    return getTodo(this.todos, id)!;
  }

  async remove(id: number): Promise<void> {
    await simulateLatency();
    
    const existing = getTodo(this.todos, id);
    if (!existing){
      throw new ToDoNotFoundError(id);
    }
    
    this.todos = removeTodo(this.todos, id);
  }
}
