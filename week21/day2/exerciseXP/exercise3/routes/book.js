const express = require('express')
const router = express.Router();



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
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951
  }
]

router.get("/", (request, response) => {
  response.status(200).json(books);
});


router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

router.post("/", (request, response) => {
  const newBook = {
    id: books.length + 1,
    title: request.body.title,
    author: request.body.author,
    publishedYear: request.body.publishedYear
  };
  books.push(newBook);
  response.status(201).json(newBook);
});

router.put("/:id", (request, response) => {
  const id = Number(request.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return response.status(404).send("Book not found");
  }
  const updatedBook = {
    id: books[index].id,
    title: request.body.title,
    author: request.body.author,
    publishedYear: request.body.publishedYear
  };
  books[index] = updatedBook;
  response.status(200).json("Book updated");
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) {
    return res.status(404).send("Book not found");
  }
  books.splice(index, 1);
  res.status(200).json("Book deleted");
});

module.exports = router;