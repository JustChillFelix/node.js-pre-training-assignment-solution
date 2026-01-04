import { ToDoManager } from "./todo-manager.js";

async function main() {
  const manager = new ToDoManager();
  await manager.init();

  const args = process.argv.slice(2);
  const command = args[0];

  try {
    switch (command) {
      case "add": {
        const title = args[1];
        const description = args[2];
        await manager.add(title, description);
        console.log("Todo added.");
        break;
      }
      case "complete": {
        const id = parseInt(args[1], 10);
        await manager.complete(id);
        console.log(`Todo ${id} marked complete.`);
        break;
      }
      case "list": {
        const todos = await manager.list();
        console.log("Todos:");
        todos.forEach(t => {
          console.log(`${t.id}: ${t.title} [${t.status}]`);
        });
        break;
      }
      default:
        console.log("Usage:");
        console.log("  node solutions/index.js add <title> [description]");
        console.log("  node solutions/index.js complete <id>");
        console.log("  node solutions/index.js list");
    }
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

main();
