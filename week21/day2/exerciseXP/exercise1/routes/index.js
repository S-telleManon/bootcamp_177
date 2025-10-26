const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('This is the home route from the router!');
});

router.get('/about', (req, res) => {
  res.send('About page from the router!');
});


module.exports = router;