
const containerDiv = document.getElementById("container");
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

const allLis = document.querySelectorAll("ul.list li");
allLis.forEach(li => {
  if (li.textContent === "John") {
    li.style.display = "none"; 
  }
});

allLis.forEach(li => {
  if (li.textContent === "Pete") {
    li.style.border = "2px solid black";
    li.style.padding = "5px"; 
  }
});

document.body.style.fontSize = "18px";