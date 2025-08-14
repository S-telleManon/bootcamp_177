function playTheGame(){
    let responseGame =confirm("Would you like to play the Game");
    if(responseGame=== false){
        alert("No problem,Goodbye");
    }else{
          userInput = Number(prompt("Please provide a number between 0 and 10"));
        if(isNaN(userInput)){
            alert("Sorry Not a number, Goodbye");
        }else if(userInput > 10){
            alert("Sorry it’s not a good number, Goodbye");
        }else{
         computerNumber =Math.round(Math.random()*10);
        }
    }
    compareNumbers(userInput, computerNumber);
}
function compareNumbers(userInput,computerNumber){
    for(let userGuess = 1;userGuess <4;userGuess++){        
        if(userInput === computerNumber){
            alert("WINNER");
            return;
        }

        if(userGuess<4){
            if (userInput > computerNumber){
                userInput=Number(prompt("Your number is bigger than the computer’s, guess again"));
            }else if(userInput < computerNumber){
                userInput=Number(prompt("Your number is smaller then the computer’s, guess again"))
            }
            if (isNaN(userInput) || userInput < 0 || userInput > 10) {
            alert("Invalid input");
            return;
            }

        }

    }
         alert("Out of chances!")
        
}
