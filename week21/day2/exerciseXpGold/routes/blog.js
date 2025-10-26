const express = require('express')
const router = express.Router();


const blogPosts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content: "Closures are an important concept in JavaScript that allow functions to access variables from an outer function scope even after the outer function has returned.",
    timestamp: "2025-10-26T10:30:00Z"
  },
  {
    id: 2,
    title: "Getting Started with Node.js",
    content: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It allows you to build server-side applications using JavaScript.",
    timestamp: "2025-10-25T14:15:00Z"
  },
  {
    id: 3,
    title: "Introduction to Express.js",
    content: "Express.js is a minimalist web framework for Node.js that makes it easy to build APIs and web applications.",
    timestamp: "2025-10-24T09:00:00Z"
  },
  {
    id: 4,
    title: "Understanding Async/Await in JavaScript",
    content: "Async/Await is syntax sugar over Promises in JavaScript that makes asynchronous code easier to read and maintain.",
    timestamp: "2025-10-23T16:45:00Z"
  }
];
router.get("/", (request, response) => {
  response.status(200).json(blogPosts);
});


router.get("/:id", (req, res) => {
  const blogPost = blogPosts.find((b) => b.id == req.params.id);
  if (!blogPost) return res.status(404).send("blogPost not found");
  res.json(blogPost);
});

router.post("/", (request, response) => {
  const newblogPost = {
    id: blogPosts.length + 1,
    title:request.body.title,
    content: request.body.content,
    timestamp: new Date().toISOString() ,
  };
  blogPosts.push(newblogPost);
  response.status(201).json(newblogPost);
});

router.put("/:id", (request, response) => {
  const id = Number(request.params.id);
  const index = blogPosts.findIndex((blogPost) => blogPost.id === id);
  if (index === -1) {
    return response.status(404).send("blogPost not found");
  }
  const updatedblogPost = {
    id: blogPosts[index].id,
    title:request.body.title,
    content: request.body.content,
    timestamp: new Date().toISOString()
  };
  blogPosts[index] = updatedblogPost;
  response.status(200).json("blogPost updated");
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((blogPost) => blogPost.id === id);
  if (index === -1) {
    return res.status(404).send("blogPost not found");
  }
  blogPosts.splice(index, 1);
  res.status(200).json("blogPost deleted");
});

module.exports = router;