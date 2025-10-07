const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

const userNames=[]
gameInfo.forEach(player => {
  userNames.push(player.username + "!");
});
console.log(userNames);

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.

const winners =[]
gameInfo.forEach(player=> {
    if(player.score > 5){
        winners.push(player.username)
    }
})
console.log(winners)

// Find and display the total score of the users. (Hint: The total score is 71)
let total = 0;
gameInfo.forEach(player => {
  total+= player.score;
});

console.log(total)