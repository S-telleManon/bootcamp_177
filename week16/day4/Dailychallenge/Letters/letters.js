const userInput = document.getElementById('lettersOnly');


  userInput.addEventListener('keypress', function (event) {
   
    const char = String.fromCharCode(event.which);


    if (!/[a-zA-Z]/.test(char)) {
      event.preventDefault(); 
      console.log(char)
    }
}
)