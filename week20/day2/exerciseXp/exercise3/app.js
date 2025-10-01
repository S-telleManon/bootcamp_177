const { readFile, writeFile } = require('./fileManager.js');
readFile('Hello World.txt', (err, content) => {
  if (err) {
    console.error("Error reading Hello World.txt:", err);
    return;
  }
  console.log("Content of Hello World.txt:", content);

  // 2️⃣ Write new content to "Bye World.txt"
  writeFile('Bye World.txt', 'Writing to the file', (err) => {
    if (err) {
      console.error("Error writing to Bye World.txt:", err);
    } else {
      console.log("Successfully wrote to Bye World.txt");
    }
  });
});