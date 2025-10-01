import { TodoList } from "./todo.js";

const todo = new TodoList();

// Add tasks

todo.addTask("Read a book");
todo.addTask("Go swimming");
todo.addTask("Finish project");
todo.addTask("Complete Homework");


// Mark one complete
todo.markComplete(1);
todo.markComplete(3);

// Print tasks nicely
console.log("📋 My Todo List:");
todo.listTasks().forEach(line => console.log(line));