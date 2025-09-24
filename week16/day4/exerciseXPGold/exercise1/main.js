const container = document.getElementById("container")
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")




const startX = 20, startY = 80;
const boxSize = 60; 

let currentBox = null;
let offsetX = 0, offsetY = 0;

for( let i =0;i<alphabet.length;i++){
    const div = document.createElement("div")
    div.className ="alphabetInBox"
    div.textContent = alphabet[i];
    div.setAttribute("draggable","true")

    container.appendChild(div)
    
    const row = Math.floor(i/10)
    const col = i % 10;

    div.style.left = (startX + col * boxSize) + "px";
    div.style.top = (startY + row * boxSize) + "px";

    div.addEventListener("mousedown", (e) => {
    currentBox = div;
    offsetX = e.clientX - div.offsetLeft;
    offsetY = e.clientY - div.offsetTop;
    div.style.zIndex = 1000; 
  });
}

function dragMove(e) {
  if (currentBox) {
    currentBox.style.left = `${e.clientX - offsetX}px`;
    currentBox.style.top = `${e.clientY - offsetY}px`;
  }
}

function dragEnd() {
  if (currentBox) {
    currentBox.style.zIndex = "";
    currentBox = null;
  }
}

document.addEventListener("mousemove", dragMove);
document.addEventListener("mouseup", dragEnd);















// const box = document.getElementById("box")
// box.addEventListener('mousedown',mouseDown)

// function mouseDown(e){
//   startX = e.clientX;
//   startY = e.clientY;
  
//   document.addEventListener('mousemove',mouseMove)
//   document.addEventListener('mouseup',mouseUp)
// }

// function mouseMove(e){
//   newX = startX - e.clientX
//   newY = startY - e.clientY

//   startX = e.clientX
//   startY = e.clientY

//       box.style.top = (box.offsetTop - newY) + "px";
//       box.style.left = (box.offsetLeft - newX) + "px";
// }

// console.log({newX,newY})
// console.log({startX,startY})

// function mouseUp(e) {
//   document.removeEventListener('mousemove', mouseMove);
//   document.removeEventListener('mouseup', mouseUp);
// }
