const divNav = document.getElementById("navBar")
divNav.setAttribute("id","socialNetworkNavigation")
console.log(divNav.id)

const ul = document.querySelector("ul.list");
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);
ul.appendChild(newLi);
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log("First <li> text:", firstLi.textContent);
console.log("Last <li> text:", lastLi.textContent);