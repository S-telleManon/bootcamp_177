// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const isString = (value) => typeof value === 'string';


console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0])); 