const express = require('express');
const app = express();
app.use(express.json());

const bookRouter = require('./routes/book.js');
app.use('/api/books', bookRouter);

app.listen(5000, () => console.log('Server running on port 5000'));