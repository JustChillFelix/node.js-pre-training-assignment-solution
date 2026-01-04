import { TodoApi } from "../task7/refactored-todo-api";
import { TodoService } from "./todo-service";

async function run() {
  const api = new TodoApi();
  const service = new TodoService(api);

  const a = await service.create("Learn DI", "Understand dependency injection");
  const b = await service.create("Write service layer");
  console.log("Created:", a, b);

  const toggled = await service.toggleStatus(a.id);
  console.log("Toggled:", toggled);

  const results = await service.search("learn");
  console.log("Search results:", results);
}

run();
