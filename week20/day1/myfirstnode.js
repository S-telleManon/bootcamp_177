//first method is to use require
// const greeting = require("./greeting.js");
// const person = require("./person.js")

// const name = "Mike Taylor";

// greeting(name);
// console.log(person.hello())

import { greeting } from './greeting.js'
import { person } from './person.js'
greeting(name);
console.log(person.hello())
