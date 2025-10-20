const axios = require('axios')
const { response } = require('express')

function fetchPosts(){
    return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.data)
    .catch(error=>{
        console.error('Error fetching Posts:',error);
        throw error
    })
}

module.exports = {fetchPosts}