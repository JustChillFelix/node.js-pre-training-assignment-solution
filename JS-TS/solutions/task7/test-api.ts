import { TodoApi, ToDoNotFoundError } from "./refactored-todo-api";
import { ToDoStatus } from "../task1/types";

async function run() {
  const api = new TodoApi();

  const a = await api.add({
      title: "Learn TS",
      status: ToDoStatus.PENDING
  });
  const b = await api.add({
      title: "Write docs",
      status: ToDoStatus.PENDING
  });
  console.log("Added:", a, b);

  console.log("All:", await api.getAll());

  const updated = await api.update(a.id, { status: ToDoStatus.COMPLETED });
  console.log("Updated:", updated);

  await api.remove(b.id);
  console.log("After remove:", await api.getAll());

  try {
    await api.update(999, { title: "Ghost" });
  } catch (err) {
    if (err instanceof ToDoNotFoundError) {
      console.error("Caught:", err.message);
    }
  }
}

run();
