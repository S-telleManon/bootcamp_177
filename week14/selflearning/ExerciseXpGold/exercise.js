// // Exercise 1
// let numbers = [123, 8409, 100053, 333333333, 7]
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i] % 3===0){
//         console.log("True, The number "+numbers[i]+" is divisible by 3")
//     }else{
//         console.log("False, The number "+numbers[i]+" is not divisible by 3")
//     }
// }
// // Exercise 2
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
// let studentName = prompt("Please provide your Name")
// if (studentName in guestList) {
//   console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
// } else {
//   console.log("Hi! I'm a guest.");
// }
// // Exercise 3
let age = [20,5,12,43,98,55];
let total = 0
for(i=0;i<age.length;i++){
    total = total +age[i]
}
console.log(total)

let highestAge= age[0]
for(i=0;i<age.length;i++){
    if(age[i]>highestAge){
        highestAge =age[i]
    }
}
console.log(highestAge)