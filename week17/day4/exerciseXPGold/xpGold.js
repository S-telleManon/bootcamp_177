// Exercise 1 : Analyzing the map method
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//Output (3) [2, 4, 6]

// Exercise 2: Analyzing the reduce method

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// output (6) [1, 2, 0, 1, 2, 3]

// Exercise 3 : Analyze this code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

//Index of the outour starting from zero 

// Exercise 4 : Nested arrays

const array = [[1],[2],[3],[[[4]]],[[[5]]]];


const newArray = array.flat(2); 

console.log(newArray);

// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const fullGreeting = greeting.map(words=>words.join(" "));
console.log(fullGreeting)

// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’

const newGreeting = fullGreeting.join(" ")
console.log(newGreeting)


// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const freed = trapped.flat(Infinity);

console.log(freed);