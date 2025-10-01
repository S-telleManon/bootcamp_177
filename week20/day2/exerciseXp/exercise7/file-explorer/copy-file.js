const fs = require("fs");
const path = require("path");


const sourcePath = path.join(__dirname, "source.txt");
const destinationPath = path.join(__dirname, "destination.txt");
 

fs.readFile(sourcePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading source file:", err);
    return;
  }


  fs.writeFile(destinationPath, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing to destination file:", err);
      return;
    }
    console.log("File copied successfully!");
  });
});