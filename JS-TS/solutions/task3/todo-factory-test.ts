import { createToDo } from "./todo-factory";

const a = createToDo({ title: "Learn TypeScript", description: "" });
const b = createToDo({ title: "Refactor code" });

console.log(a.id);
console.log(b.id); 
console.log(a.status);
console.log(b.createdAt instanceof Date);
