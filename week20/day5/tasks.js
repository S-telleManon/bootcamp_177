const express = require('express') // found in node_modules/express
const app = express()
app.use(express.json()); // parse json body content

const fs = require("fs").promises;

async function readTasks() {
    try {
        const data = await fs.readFile(tasksFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading tasks.json:", error);
        return [];
    }
}

async function writeTasks(tasks) {
    try {
        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
        console.log("Tasks written successfully.");
    } catch (error) {
        console.error("Error writing to tasks.json:", error);
        throw new Error("Failed to write tasks to file");
    }
}