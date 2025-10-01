
let endSemester;

function callback (resolve, reject) {
    let goodGrades = Math.random()<0.5;
    if (goodGrades) {
        resolve("mobile phone"); // the parameter is the data which will be returned if promise is fulfilled. 
    } else {
        reject("no gift"); // the parameter is the data which will be returned if promise is rejected
    }
}

endSemester = new Promise(callback);
endSemester
.then(function(data){
    console.log("Thank you very much for " + data)
    return "thank you"
})
.then(function(data){
    console.log("No need to say" + data + " You are welcome")
})
.catch(function(data){
    console.log("Thank you for " + data+". I am going to buy my own")
}) //Catch works with the reject data 


let endSemester;

function callback (resolve, reject) {
    setTimeout(function(){
    let goodGrades = Math.random()<0.5;
    if (goodGrades) {
        resolve("mobile phone"); // the parameter is the data which will be returned if promise is fulfilled. 
    } else {
        reject("no gift"); // the parameter is the data which will be returned if promise is rejected
    }
},5000)
}

endSemester = new Promise(callback);
endSemester
.then(function(data){
    console.log("Thank you very much for " + data)
    return "thank you"
})
.then(function(data){
    console.log("No need to say" + data + " You are welcome")
}) // works with resolve
.catch(function(data){
    console.log("Thank you for " + data+". I am going to buy my own")
}) //Catch works with the reject data 
.finally(function(){
    console.log("bye Bye")
})

