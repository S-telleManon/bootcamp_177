// Excersise 1

function stringBlank(str){
    return str.trim().length === 0;
}
console.log(stringBlank(''));
console.log(stringBlank('abc'));
console.log(stringBlank('   '));

// Exercise 2

function abbrevName(name){
    let nameParts = name.split(" ");
    if(nameParts.length > 1){
        return nameParts[0] + " " + nameParts[1][0] +".";
    }
    return name;
}
console.log(abbrevName("Robin Singh")); 
console.log(abbrevName("John Doe"));
console.log(abbrevName("Madonna"));   

function swapCase(phrase){
    let swappedPhrase =""
    for(let i = 0;i < phrase.length;i++){
        let character = phrase[i];
        if (character=== character.toUpperCase()){
            swappedPhrase+=character.toLowerCase()
        }else{
            swappedPhrase+=character.toUpperCase();
        }
    }
    return swappedPhrase;
}
console.log(swapCase("The Quick Brown Fox")); 