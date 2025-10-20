const express = require('express')
const app = express()
const { fetchPosts } = require('././data/dataService')


app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
