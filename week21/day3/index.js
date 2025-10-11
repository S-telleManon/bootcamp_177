const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'hollywood',
        port: 5432
    }
});

const express = require('express')
const app = express()
app.use(express.json())

// knex.select('name','nic').from('students')
// .then(data=>{console.log(data)})

app.get("/api/students", (request, response) => {
knex.select('name','nic').from('students')
.then(data=>{
    response.json(data)
    });
});

app.get("/api/students/:id", (request, response) => {
    const id = request.params.id
    knex.select('*').from('students').where({id:id})
    .then(data=>{
    response.json(data)
    });
});

app.post("/api/students", (request, response) => {
    console.log("receiving student to create")
    console.log(request.body)
    console.log(request.body.name)
    knex('students').returning(['name','id','nic']).insert(
        {
            name:request.body.name,
            nic:request.body.nic
        }
    ).then(data=>{ console.log(data)
    response.json({'status':'ok',"data":data})
    })
});


app.put("/api/students/:id", (request, response) => {
    const id = request.params.id
    const new_data = request.body

    console.log(id,new_data)

    knex('students').where({"id":2}).update(request.body).returning('*').then(function(data){ 
        console.log(data)
        response.json({'status':'ok',"data":data})
    })
});

app.delete("/api/students/:id",(request, response) => {
    const id = request.params.id

    knex('students').where({id:id}).del().then(function(data){ 
        console.log(data)
        response.json({'status':'ok'})
    })
});


app.listen(5002, () => {
    console.log('server is listening on port 5002')
})