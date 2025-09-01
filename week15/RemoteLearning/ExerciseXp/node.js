//Excercise1 
//Answer =10
var num = 8;
var num = 10;
console.log(num);

//Exercise2
// function numbers() {
//   for ( i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();
// console.log(i)


//Exercise3
let balance = 100;
let vat = 0.15;
let revenue = 400;
let expenses = 60;
let expenseWithVat= expenses * (1+vat);
balance = balance + revenue - expenseWithVat;

console.log('Expense without Vat:'+expenses)
console.log('Expense with Vat:'+expenseWithVat)
console.log('Revenue: '+ revenue)
console.log('New Balance:'+ balance)
