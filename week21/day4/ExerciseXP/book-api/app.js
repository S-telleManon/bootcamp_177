const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'posts',
        port: 5432
    }
});
const express = require('express')
const app = express()
app.use(express.json())


app.get("/api/books", (request, response) => {
knex.select('*').from('books').orderBy('id', 'asc')
.then(data=>{
    response.json(data)
    });
});

app.get("/api/books/:id", (request, response) => {
    const id = request.params.id
    knex.select('*').from('books').where({id:id})
    .then(data=>{
      if (data.length > 0) {
        response.status(200).json(data[0]);
      } else {
        response.status(404).json({ message: "Book not found" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Server error", error });
    });
});

app.post("/api/books", (request, response) => {
    console.log("New Book created")
    console.log(request.body)

    knex('books').returning(['*']).insert(
        {
            title:request.body.title,
            author:request.body.author,
            publishedyear: request.body.publishedyear
        }
    ).then(data=>{ 
        response.status(201).json({
        status: "success",
        data: data[0] 
      });
    })
    .catch((error) => {
        console.error("Error inserting book:", error);
        response.status(500).json({
        status: "error",
        message: "Failed to create book",
        error
      });
    });
});
    

app.listen(5001, () => {
    console.log('server is listening on port 5001')
})