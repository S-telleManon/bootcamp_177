const numbers = [5,0,9,1,7,4,2,6,3,8];

//Excercise 1
console.log(numbers.toString())
//Exercise 2
console.log(numbers.join());
console.log(numbers.join("+"))
console.log(numbers.join(" "));  
console.log(numbers.join(",")); 

//Exercise 3
let arrNumbers = [5,0,9,1,7,4,2,6,3,8];
for (let i =0;i<arrNumbers.length;i++){
    for(let j=0;j<arrNumbers.length;j++){
        if(arrNumbers[j]<arrNumbers[j+1]){
            let tempVar =arrNumbers[j]
            arrNumbers[j] = arrNumbers[j+1]
            arrNumbers[j+1]=tempVar
        }
    }
}    
console.log("Final sorted array:", arrNumbers);