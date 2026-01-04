import { InMemoryRepository } from "./repository";
import { ToDo, ToDoStatus, NewTodo } from "../task1/types";

let nextId = 1;

export class ToDoNotFoundError extends Error {
  constructor(id: number) {
    super(`Todo with id ${id} not found`);
    this.name = "ToDoNotFoundError";
  }
}

function simulateLatency(): Promise<void> {
  const delay = 300 + Math.floor(Math.random() * 300);
  return new Promise(resolve => setTimeout(resolve, delay));
}

export class TodoApi {
  private repo = new InMemoryRepository<ToDo>();

  async getAll(): Promise<ToDo[]> {
    await simulateLatency();
    return this.repo.findAll();
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
    return this.repo.add(todo);
  }

  async update(
    id: number,
    patch: Partial<Omit<ToDo, "id" | "createdAt">>
  ): Promise<ToDo> {
    await simulateLatency();
    const existing = this.repo.findById(id);
    if (!existing) {
      throw new ToDoNotFoundError(id);
    }
    return this.repo.update(id, patch);
  }

  async remove(id: number): Promise<void> {
    await simulateLatency();
    const existing = this.repo.findById(id);
    if (!existing) {
      throw new ToDoNotFoundError(id);
    }
    this.repo.remove(id);
  }
}
