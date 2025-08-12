let output =""
for (let i =0;i<6;i++){
    output += "* "
    console.log(output)
}
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}