export class TodoList {
  tasks = []; 

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    } else {
      console.log(`⚠️ Task at index ${index} does not exist.`);
    }
  }
    listTasks() {
    return this.tasks.map((t, i) => 
      `${i + 1}. ${t.task} - ${t.completed ? "✅ Completed" : "❌ Not completed"}`
    );
  }
}