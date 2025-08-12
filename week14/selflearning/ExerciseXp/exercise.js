// -----------------------Exercise5-------------------------------

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// console.log(building.numberOfAptByFloor)
console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor)
let secondTenant = building.nameOfTenants[1]
let numRooms = building.numberOfRoomsAndRent.dan[0]
console.log(secondTenant,numRooms)
let sarahRent =building.numberOfRoomsAndRent.sarah[1];
let davidRent =building.numberOfRoomsAndRent.david[1]
let sumOfRent = sarahRent+davidRent
let danRent = building.numberOfRoomsAndRent.dan[1]
if(sumOfRent>danRent){
    danRent = 1200
    console.log(danRent)
}
// -----------------------Exercise6-------------------------------
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let finalPhrase = " ";
for(let key in details){
    finalPhrase += key + " "+details[key]+" ";
}
console.log(finalPhrase.trim())
// -----------------------Exercise7-------------------------------
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let i=0;
let secretName =" "
let sortedNames = names.sort()
for(i=0;i<names.length;i++){
    secretName+=sortedNames[i][0];
}
console.log(secretName.trim())
