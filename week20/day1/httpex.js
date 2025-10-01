let persons = [
{
    "id":1,
    "name": "abraham",
    "age": 25,
}

]

// Get api/persons ---> return array of persons  = 200 OK, 401 NOT LOGGE IN ,403 NOT ALLOWE ,4040 NOT FOUND


//POST on api/persons { 201 OK
// let newperson = {
//     "name": "abraham"
//     "age": 25
// }}
// --> new object create {id:,name:...}

// using PATCH/api/persons/1 ---> will say which url to update ---> //pATCH CHANGE ONLY THE THINS REQUIRED 
//  PATCH/api/persons/1{
//    "age": 25
//  }

//   PUT/api/persons/1{ --->will say which url to update ---> //pATCH CHANGE THE WHOLE OBJECT
//     "age": 25
//  }


// PATCH /api/persons/1 { // patch is changing only the things required 
//        "age" : 30
//    }

// PUT /api/persons/1 { // PUT replaces the whole object = 200 OK,204 NO CONTENT 
//        "name" : "Abraham",
//        "age" : 30
//    }

// DELETE /api/persons/1 = 200 OK,204 NO CONTENT, 202 ACCEPTED BUT NOT YET COMPLETED 




let newperson = {
    "name": "abraham"
    "age": 25
}