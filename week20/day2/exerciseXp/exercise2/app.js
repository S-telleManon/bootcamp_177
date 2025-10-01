let totalAge = 0

import { person } from './data.js';
function calcAge(age){
    for(let i =0;i<person.length;i++){
       totalAge += person[i].age 
    }
    const averageAge =totalAge/person.length
    console.log(averageAge)
}
calcAge()