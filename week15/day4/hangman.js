let wordPlayer1 = prompt("Please enter a word with at least 8 characters")
while(wordPlayer1.length<8){
    wordPlayer1 = prompt("Please enter a word with at least 8 characters")
}
wordPlayer1=wordPlayer1.toLowerCase()
let hiddenWord = Array(wordPlayer1.length).fill("*")
let guessOfPlayer = []
for(let numAttempts =0 ;numAttempts<10;){
    console.log("Word "+hiddenWord.join(""))
    console.log("Guesses so far: " + guessOfPlayer.join(", "));
    console.log("Wrong attempts " + numAttempts+"/"+ "10")


let guessPlayer2 = prompt("Please guest a letter").toLowerCase()
  if (guessOfPlayer.includes(guessPlayer2)) {
    console.log("You already guessed that letter! Try again.");
    continue;
  }
  guessOfPlayer.push(guessPlayer2)

  if(wordPlayer1.includes(guessPlayer2)){
    for(let i =0;i<wordPlayer1.length;i++){
        if(wordPlayer1[i]=== guessPlayer2){
            hiddenWord[i]=guessPlayer2;
        }
  }
  console.log("Correct guess")

  if(!hiddenWord.includes("*")){
    console.log("Word: " + hiddenWord.join(""));
    console.log("CONGRATS YOU WIN");
    break;
  }

} else{
    numAttempts++;
    console.log("wrong guess")

}  if (numAttempts === 10) {
    console.log("YOU LOSE. The word was: " + word);
  }
}