function compareToTen(number){
     return new Promise((resolve,reject)=>{
    if(number<=10){
        resolve("Number is less than 10")
    }else{
        reject("Number is greater than 10")
    }
})
}
compareToTen(15)
.then(function(data){
    console.log(data)
})
.catch(function(data){
    console.log(data)
})