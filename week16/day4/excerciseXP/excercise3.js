let newX = 0, newY = 0, startX = 0 , startY = 0

const box = document.getElementById("box")
box.addEventListener('mousedown',mouseDown)

function mouseDown(e){
  startX = e.clientX;
  startY = e.clientY;
  
  document.addEventListener('mousemove',mouseMove)
  document.addEventListener('mouseup',mouseUp)
}

function mouseMove(e){
  newX = startX - e.clientX
  newY = startY - e.clientY

  startX = e.clientX
  startY = e.clientY

      box.style.top = (box.offsetTop - newY) + "px";
      box.style.left = (box.offsetLeft - newX) + "px";
}

console.log({newX,newY})
console.log({startX,startY})

function mouseUp(e) {
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
}


