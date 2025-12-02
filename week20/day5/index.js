const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs');
const path = require('path');

const tasks = []

// app.get("/api/tasks", function(request,response){
//      response.json(tasks)
// })

app.get("/api/tasks", (request, response) => {
    readTasks((tasks) => {
        response.json(tasks);
    });
});

app.get("/api/tasks/:id", function(request,response) {
    task = tasks.filter((task) => task.id == request.params.id)
    response.json(task)
})

// app.post("/api/tasks", (req, res) => {
//   const newTasks = {
//     id: tasks.length + 1,
//     taskName: "Doing exercise",
//   };
//   tasks.push(newTasks);
//   res.status(201).json(newTasks);
// });

app.put("/api/tasks/:id", (request, response) => {
    const taskId = parseInt(request.params.id)
     const task = tasks.filter((task) => task.id == taskId)
     const index = tasks.indexOf(task[0]);
    tasks[index] = {
        id: taskId,                
        taskName: "Cleaning my room"  
    };
    response.json(tasks[index]);
    })

app.delete("/api/tasks/:id", (request, response) => {
    const taskId = parseInt(request.params.id)
     const task = tasks.filter((task) => task.id == taskId)
     const index = tasks.indexOf(task[0]);
    const deletedTask = tasks.splice(index, 1);
    response.json(deletedTask[0]);
});

app.post("/api/tasks", (req, res) => {
    if (!req.body.taskName || req.body.taskName.trim() === "") {
        return res.status(400).json({ message: "taskName is required" });
    }

    readTasks((tasks) => {
        const newTask = {
            id: tasks.length + 1,
            taskName: req.body.taskName.trim()
        };
        tasks.push(newTask);
        writeTasks(tasks, (success) => {
            if (!success) return res.status(500).json({ message: "Failed to save task" });
            res.status(201).json(newTask);
        });
    });
});


const tasksFilePath = path.join(__dirname, 'tasks.json');

function readTasks() {
    const data = fs.readFileSync(tasksFilePath, 'utf-8');
    return JSON.parse(data);
}

function writeTasks(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}


async function readTasks() {
    try {
        const data = await fs.readFile(tasksFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading tasks.json:", error);
        return [];
    }
}

function readTasks(callback) {
    fs.readFile(tasksFilePath, 'utf-8', (error, data) => {
        if (error) {
            console.error("Error reading tasks.json:", error);
            return callback([]); 
        }

        try {
            const tasks = JSON.parse(data);
            callback(tasks);
        } catch (parseError) {
            console.error("Error parsing tasks.json:", parseError);
            callback([]);
        }
    })};

function writeTasks(tasks, callback) {
    fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), (error) => {
        if (error) {
            console.error("Error writing to tasks.json:", error);
            return callback(false); 
        }
        console.log("Tasks saved successfully");
        callback(true); 
    });
}

app.listen(5002, () => {
    console.log('server is listening on port 5002')
})