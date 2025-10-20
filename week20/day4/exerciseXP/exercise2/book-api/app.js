const express = require('express')
const app = express()

app.use(express.json()); 

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813
  }
];

app.get("/api/books", function(request,response){
    response.status(200).json(books)
})

app.get("/api/books/:id", function(request,response) {
    book = books.filter((book) => book.id == request.params.id)
    response.json(book)
})


app.post("/api/books", (request, response) => {
  const newBook = {
    id: books.length + 1,
    title: request.body.title,
    author: request.body.author,
    publishedYear: request.body.publishedYear
  };
  books.push(newBook);
  response.status(201).json(newBook);
});

app.put("/api/books/:id", (request, response) => {
  const id = Number(request.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return response.status(404).send("Book not found");
  }
  const updatedBook = {
    id: books[index].id,
    title: request.body.title,
    author: request.body.author,
    publishedYear: request.body.publishedYear,   
  };
  books[index] = updatedBook;
  response.status(200).json("Book updated");
});


app.delete("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }
  books.splice(index, 1);
  res.status(200).json("Book deleted");
});


app.listen(5002, () => {
    console.log('server is listening on port 5002')
})
