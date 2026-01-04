// solutions/todo-service.ts
import { TodoApi, ToDoNotFoundError } from "../task7/refactored-todo-api";
import { ToDo, ToDoStatus } from "../task1/types";

export class TodoService {
  private api: TodoApi;

  constructor(api: TodoApi) {
    if (!api) {
      throw new Error("TodoApi instance is required");
    }
    this.api = api;
  }

  async create(title: string, description?: string): Promise<ToDo> {
    if (!title || title.trim().length === 0) {
      throw new Error("Title is required to create a todo");
    }
    return this.api.add({
      title: title.trim(), description,
      status: ToDoStatus.PENDING
    });
  }

  async toggleStatus(id: number): Promise<ToDo> {
    if (typeof id !== "number" || id <= 0) {
      throw new Error("Valid todo id is required");
    }

    const todo = await this.api.getAll().then(todos => todos.find(t => t.id === id));
    if (!todo) {
      throw new ToDoNotFoundError(id);
    }

    const newStatus =
      todo.status === ToDoStatus.PENDING ? ToDoStatus.COMPLETED : ToDoStatus.PENDING;

    return this.api.update(id, { status: newStatus });
  }

  async search(keyword: string): Promise<ToDo[]> {
    if (!keyword || keyword.trim().length === 0) {
      throw new Error("Keyword is required for search");
    }

    const lower = keyword.toLowerCase();
    const todos = await this.api.getAll();

    return todos.filter(
      t =>
        t.title.toLowerCase().includes(lower) ||
        (t.description ?? "").toLowerCase().includes(lower)
    );
  }
}
