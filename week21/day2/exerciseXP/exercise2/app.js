const express = require('express');
const app = express();
app.use(express.json());

const todoRouter = require('./routes/todos.js');
app.use('/api/todos', todoRouter);

app.listen(5000, () => console.log('Server running on port 5000'));