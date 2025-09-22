let shoppingList =[]
const root = document.getElementById("root");
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item";
form.appendChild(input)

const addBtn = document.createElement("button");
addBtn.type = "button";
addBtn.textContent = "AddItem";
form.appendChild(addBtn)

const clearBtn = document.createElement("button");
clearBtn.type = "button";
clearBtn.textContent = "ClearAll";
form.appendChild(clearBtn)

const shopList = document.createElement("ul")

root.appendChild(form)
root.appendChild(shopList)


function renderList() {
  shopList.innerHTML = ""; 
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    shopList.appendChild(li);
  });
}

function addItem() {
  const value = input.value.trim();
  if (value) {
    shoppingList.push(value);
    input.value = "";
    renderList();
  }
}

function clearAll() {
  shoppingList = [];
  renderList();
}

addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);