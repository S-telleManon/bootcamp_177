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

app.get("/api/posts", (request, response) => {
knex.select('*').from('posts').orderBy('id', 'asc')
.then(data=>{
    response.json(data)
    });
});

app.get("/api/posts/:id", (request, response) => {
    const id = request.params.id
    knex.select('*').from('posts').where({id:id})
    .then(data=>{
    response.json(data)
    });
});

app.post("/api/posts", (request, response) => {
    console.log("Receiving posts to create in new blog")
    console.log(request.body)

    knex('posts').returning(['*']).insert(
        {
            title:request.body.title,
            content:request.body.content
        }
    ).then(data=>{ console.log(data)
    response.json({'status':'ok',"data":data})
    })
});
app.put("/api/posts/:id", (request, response) => {
    const id = request.params.id
    const new_data = request.body

    console.log(id,new_data)

    knex('posts').where({"id":id}).update(request.body).returning('*').then(function(data){ 
        console.log(data)
        response.json({'status':'ok',"data":data})
    })
});

app.delete("/api/posts/:id",(request, response) => {
    const id = request.params.id

    knex('posts').where({id:id}).del().then(function(data){ 
        console.log(data)
        response.json({'status':'ok'})
    })
});
//old style to return in HTML 
app.get("/posts",function(req,res){
    knex.select('*').from('posts').orderBy('id', 'asc')
        .then(data=>{
            let posts_html = data.map(post => "<h2>" + post.title + "</h2>" ).join("")
            res.send("<h1>Welcome here</h1>" + posts_html)
    });
    
})

app.listen(5002, () => {
    console.log('server is listening on port 5002')
})