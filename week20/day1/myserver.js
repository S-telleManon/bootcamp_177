const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("<h1>Home page on Estelle Laptop</h1>");
  } else if (request.url === "/about") {
    response.end("<h1>About page on Estelle PC</h1>");

    // let i = 0;
    // do {
    //   i++;
    // } while (i < 10000000000);
  } else {
    response.end("page not found");
  }
});

server.listen(5000, "0.0.0.0", () => {
  console.log("Server is listening at localhost on port 5000");
});