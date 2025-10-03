import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function displayFileContent() {
const filePath = path.join(__dirname, "file-data.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading source file:", err);
    return;
  }
  console.log("File Content:\n", data);
  })
}