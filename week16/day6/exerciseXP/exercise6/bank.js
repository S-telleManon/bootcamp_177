let bank = 5000; 

const VATAmount = 0.17;

const expenses = ["+200", "-100", "+146", "+167", "-2900"];


for (let i = 0; i < expenses.length; i++) {
    let amount = Number(expenses[i]); 
    amount = amount + amount * VATAmount;   
    bank += amount;             
}

console.log(`Current bank account standing: ${bank.toFixed(2)}`);