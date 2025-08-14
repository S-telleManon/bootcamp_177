// -------------------Exercise 4----------------------------
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// let shoppingList=['banana','orange','apple']
// function myBill(){
//     let total = 0
//     for(let item of shoppingList){
//        if(item in stock && stock[item]>0)
//         total +=prices[item];
//     }
// return total
// }
// console.log(myBill())
// bonus
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList=['banana','orange','apple']
function myBill(){
    let total = 0
    for(let item of shoppingList){
       if(item in stock && stock[item]>0)
        total +=prices[item];
       stock[item] -=1;
    }
return total
}
console.log(myBill())
console.log(stock)
// --------- Exercise 5---------------------
let changeCoins =[0.25,0.10,0.5,0.01]

function changeEnough(itemPrice, amountOfChange){
    let totalAvailable =0;
    for(let i =0;i<amountOfChange.length;i++){
        totalAvailable+= amountOfChange[i]*changeCoins[i]
    }
    return totalAvailable >=itemPrice
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));

// --------- Exercise 6---------------------
function hotelCost(){
    let numOfNight = parseInt(prompt("Please advise the number of Nights you would like to stay"))
    if(!isNaN(numOfNight) && numOfNight !== "" ){
        console.log(numOfNight)
    }else{
        let total=0
        total= numOfNight*140
    }
    return total
}