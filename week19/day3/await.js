let goodGrades = 93;

let endSemester = new Promise((resolve, reject) => {
    setTimeout(function(){
        if (goodGrades > 90) {
            resolve("Computer");
        } else if (goodGrades => 80 && goodGrades <= 89) {
            resolve("Phone");
        } else {
            reject("I won't get the gift");
        }
    },5000)
    
    
})

endSemester.then(function(data){
    console.log(data)
})
.finally(function(){
    console.log("ended")
}

// let gift = await endSemester;
// console.log(gift)
// console.log("ended")