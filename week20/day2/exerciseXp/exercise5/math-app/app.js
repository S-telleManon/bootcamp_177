const _ = require("lodash");          
const math = require("./math.js");    
const numbers = [5, 10, 15, 20];
const sumOfArray = _.sum(numbers);


const added = math.add(7, 3);
const multiplied = math.multiply(4, 6);

console.log("Using lodash:");
console.log("Sum of numbers:", sumOfArray);
console.log("First element:", _.first(numbers));
console.log("Chunked array:", _.chunk(numbers, 2));

console.log("Using math.js:");
console.log("Addition (7 + 3):", added);
console.log("Multiplication (4 × 6):", multiplied);

const doubledNumbers = numbers.map(num => math.multiply(num, 2));
console.log("Numbers doubled using custom math function:", doubledNumbers);

const maxValue = _.max(doubledNumbers);
console.log("Max value (lodash):", maxValue);