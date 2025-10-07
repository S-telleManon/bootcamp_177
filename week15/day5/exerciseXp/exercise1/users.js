// Exercise 1 : Users

const containerDiv = document.getElementById("container")
console.log(containerDiv)

const allLis = document.querySelectorAll("ul.list li");
allLis.forEach(li => {
  if (li.textContent === "Pete") {
    li.textContent = "Richard";
  }
});

allLis.forEach(li => {
  if (li.textContent === "Sarah") {
    li.remove(); 
  }
});

const allUl = document.querySelectorAll("ul.list");
for (let ul of allUl) {
  if (ul.firstElementChild) { 
    ul.firstElementChild.textContent = "Estelle"; 
  }
}




