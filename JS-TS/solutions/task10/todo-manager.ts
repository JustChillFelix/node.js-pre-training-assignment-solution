import { InMemoryRepository } from "../task7/repository";
import { TodoApi } from "../task7/refactored-todo-api";
import { TodoService } from "../task8/todo-service";
import { ToDo } from "../task1/types";

export class ToDoManager {
  private repo: InMemoryRepository<ToDo>;
  private api: TodoApi;
  private service: TodoService;

  constructor() {
    this.repo = new InMemoryRepository<ToDo>();
    this.api = new TodoApi();
    this.service = new TodoService(this.api);
  }

  async init(): Promise<void> {
    await this.service.create("Learn TypeScript", "Practice enums and interfaces");
    await this.service.create("Write unit tests", "Cover service and repository");
    await this.service.create("Build CLI facade");
  }

  async add(title: string, description?: string): Promise<void> {
    await this.service.create(title, description);
  }

  async complete(id: number): Promise<void> {
    await this.service.toggleStatus(id);
  }

  async list(): Promise<ToDo[]> {
    return this.api.getAll();
  }
}
