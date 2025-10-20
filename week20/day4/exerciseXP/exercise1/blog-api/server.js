const express = require('express')
const app = express()

app.use(express.json()); 

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile language used for web development..."
  },
  {
    id: 2,
    title: "Understanding CSS Flexbox",
    content: "Flexbox is a layout model that allows responsive elements..."
  },
  {
    id: 3,
    title: "What Is a REST API?",
    content: "A REST API is an architectural style for building web services..."
  },
  {
    id: 4,
    title: "Introduction to Node.js",
    content: "Node.js allows you to run JavaScript outside the browser..."
  }

];

app.get("/api/blogPosts", function(request,response){
    response.status(200).json(blogPosts)
})

app.get("/api/blogPosts/:id", function(request,response) {
    blogPost = blogPosts.filter((blogPost) => blogPost.id == request.params.id)
    response.json(blogPost)
})


app.post("/api/blogPosts", (request, response) => {
  const newPost = {
    id: blogPosts.length + 1,
    title: request.body.title,
    content: request.body.content,
  };
  blogPosts.push(newPost);
  response.status(201).json(newPost);
});

app.put("/api/blogPosts/:id", (request, response) => {
  const id = Number(request.params.id);
  const index = blogPosts.findIndex((blogPost) => blogPost.id === id);
  if (index === -1) {
    return response.status(404).send("Post not found");
  }
  const updatedPost = {
    id: blogPosts[index].id,
    title: request.body.title,
    content: request.body.content,
  };
  blogPosts[index] = updatedPost;
  response.status(200).json("Post updated");
});



app.delete("/api/blogPosts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((blogPost) => blogPost.id === id);
  if (index === -1) {
    return res.status(404).send("Post not found");
  }
  blogPosts.splice(index, 1);
  res.status(200).json("Post deleted");
});


app.listen(5002, () => {
    console.log('server is listening on port 5002')
})
