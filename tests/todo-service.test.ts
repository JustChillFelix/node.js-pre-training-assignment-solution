import { TodoApi, ToDoNotFoundError } from "../JS-TS/solutions/task7/refactored-todo-api";
import { TodoService } from "../JS-TS/solutions/task8/todo-service";
import { ToDoStatus } from "../JS-TS/solutions/task1/types";

describe("TodoService", () => {
  let api: TodoApi;
  let service: TodoService;

  beforeEach(() => {
    api = new TodoApi();
    service = new TodoService(api);
    jest.spyOn(global, "setTimeout").mockImplementation((cb: any) => {
      cb();
      return 0 as any;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("creates a todo successfully", async () => {
    const todo = await service.create("Test creation", "desc");
    expect(todo.title).toBe("Test creation");
    expect(todo.status).toBe(ToDoStatus.PENDING);
  });

  it("toggles status", async () => {
    const todo = await service.create("Toggle me");
    const toggled = await service.toggleStatus(todo.id);
    expect(toggled.status).toBe(ToDoStatus.COMPLETED);

    const toggledBack = await service.toggleStatus(todo.id);
    expect(toggledBack.status).toBe(ToDoStatus.PENDING);
  });

  it("search returns matching items", async () => {
    await service.create("Learn Jest", "unit testing");
    await service.create("Write docs");
    const results = await service.search("jest");
    expect(results.length).toBe(1);
    expect(results[0].title).toContain("Learn Jest");
  });

  it("throws error when updating non-existing id", async () => {
    await expect(service.toggleStatus(999)).rejects.toThrow(ToDoNotFoundError);
  });
});
