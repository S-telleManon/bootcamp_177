function WordsInTheStars(){

    const userInput = prompt("Please enter several words (separated by commas)")
    const words = userInput.split(",")

    for(let i = 0;i<words.length;i++){
        words[i] = words[i].trim();
    }
  let longestWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
   const border = "*".repeat(longestWord + 4);
    
   console.log(border);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        console.log(`* ${word.padEnd(longestWord, " ")} *`);
    }
    console.log(border);

}

WordsInTheStars();

