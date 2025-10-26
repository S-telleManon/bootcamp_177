const express = require('express')
const router = express.Router();



// Sample in-memory database for storing to-do items
const todos = [
{
    id: 1,
    todoName: "Wash the Dog",
  },
  {
    id: 2,
    todoName: "Deliver the packet",

  },
  {
    id: 3,
    todoName: "Go to hospital",

  },
  {
    id: 4,
    todoName: "Do the homework ",

  }

];

router.get("/", (req, res) => {
  res.status(200).json(todos);
});


router.get("/:id", (req, res) => {
  const todo = todos.find((t) => t.id == req.params.id);
  if (!todo) return res.status(404).send("To-Do item not found");
  res.json(todo);
});

router.post("/", (request, response) => {
  const newTodo = {
    id: todos.length + 1,
    todoName: request.body.todoName,

  };
  todos.push(newTodo);
  response.status(201).json(newTodo);
});

router.put("/:id", (request, response) => {
  const id = Number(request.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return response.status(404).send("To-Do Item not found");
  }
  const updatedToDo = {
    id: todos[index].id,
    todoName: request.body.todoName, 
  };
  todos[index] = updatedToDo;
  response.status(200).json("To-Do item updated");
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).send("To- Do item not found");
  }
  todos.splice(index, 1);
  res.status(200).json("To-Do item deleted");
});

module.exports = router;