function bottlesOfBeer() {
  let NumOfbottles = parseInt(prompt("Enter the number of bottles to start with:"), 10);

  if (isNaN(NumOfbottles) || NumOfbottles <= 0) {
    console.log("Please enter a valid positive number.");
    return;
  }

  let takeDown = 1;

  while (NumOfbottles > 0) {
    let bottlesWord = NumOfbottles === 1 ? "bottle" : "bottles";
    let passWord = takeDown === 1 ? "it" : "them";

    let nextBottles = NumOfbottles - takeDown;
    if (nextBottles < 0) nextBottles = 0;
    let nextBottlesWord = nextBottles === 1 ? "bottle" : "bottles";

    let phrase = `${NumOfbottles} ${bottlesWord} of beer on the wall\n` +
                `${NumOfbottles} ${bottlesWord} of beer\n` +
                `Take ${takeDown} down, pass ${passWord} around\n` +
                `${nextBottles === 0 ? "No bottles of beer on the wall 🥴" : nextBottles + " " + nextBottlesWord + " of beer on the wall"}\n`;

    console.log(phrase);

    NumOfbottles -= takeDown;
    takeDown++;
  }
}
bottlesOfBeer()