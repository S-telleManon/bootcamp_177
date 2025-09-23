function sayHello(){
    alert("Hello World")
}
setTimeout(sayHello,2000);

let intervalId;
function newParagraph(){
    let newPara = document.createElement("p");
    newPara.textContent = "Hello World"
    const addToContainer = document.getElementById("container")
    addToContainer.appendChild(newPara);
    if(addToContainer.querySelectorAll("p").length>=5){
        clearInterval(intervalId)
    }

}
setTimeout(newParagraph,2000)

intervalId = setInterval(newParagraph,2000)


// function clearPage(){
// clearInterval(intervalId)
// }
// document.getElementById("clear").addEventListener("click",clearPage)

