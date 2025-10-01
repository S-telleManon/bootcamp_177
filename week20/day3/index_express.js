const express = require('express') // found in node_modules/express
const app = express()
app.use(express.json()); // parse json body content
let students = [
    {
        "id" : 1,
        "name" : "Abraham"
    },
    {
        "id" : 2,
        "name" : "Jessni"
    },
    {
        "id" : 3,
        "name" : "John"
    },
    {
        "id" : 4,
        "name" : "Sunny"
    }
]


//Linking to the HTML index.html from the public folder 
app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/index.html")
})


// list of teachers /api/teachers
app.get("/api/teachers", function(request,response){
    response.json([
        {
            "name" : "Nayar"
        }
    ])
})


// get is the method
// "/api/students" the path
// app.get("/api/students", function(request,response){
//     response.json([
//         {
//             "name" : "Abraham"
//         }
//     ])
// })

app.get("/course/:course_number/section/:section_number", function(request,response){
    console.log(request.params)
    response.send("<h1>Welcome to course</h1><h2>This is course " + request.params.course_number + " and section " + request.params.section_number)
})

app.get("/api/students/:id", function(request,response) {
    student = students.filter((student) => student.id == request.params.id)
    response.json(student)
})

app.get("/api/students", function(request,response){
    console.log(request.query)
    if(request.query.filter){
        student = students.filter((student) => student.name.toLocaleLowerCase().includes(request.query.filter.toLocaleLowerCase()))
        response.json(student)
    }
    else{
        response.json(students)
    }
})



app.listen(5002, () => {
    console.log('server is listening on port 5002')
})
