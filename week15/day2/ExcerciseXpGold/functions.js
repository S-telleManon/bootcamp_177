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

// Exercise 3

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

// Exercise 4
function omnipresent(array,value){
    for (let sub of array){
        if(!sub.includes(value)){
            return false;
        }
    }
    return true;
}
console.log(omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
console.log(omnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3));