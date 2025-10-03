import { displayFileContent } from "./files/read-file.js";
import { greeting } from './greeting.js'
import chalk from "chalk";
import { showColors } from "./colorful-message.js";

greeting("Stelle");
showColors();
displayFileContent();