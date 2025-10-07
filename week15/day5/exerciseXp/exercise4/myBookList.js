const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://img.perlego.com/book-covers/2663769/9782291963134_300_450.webp",
    alreadyRead: false
  }
];


const containerDiv = document.querySelector(".listBooks");


const table = document.createElement("table");


allBooks.forEach(book => {
const row = document.createElement("tr");

const imgCell = document.createElement("td");
const img = document.createElement("img");
img.src = book.image;
img.style.width = "100px";
imgCell.appendChild(img);
row.appendChild(imgCell);


const detailsCell = document.createElement("td");
detailsCell.textContent = `${book.title} written by ${book.author}`;


if (book.alreadyRead) {
    detailsCell.style.color = "red";
  }

row.appendChild(detailsCell);

row.querySelectorAll("td").forEach(td => td.style.border = "1px solid black");
  table.appendChild(row);
});


containerDiv.appendChild(table);