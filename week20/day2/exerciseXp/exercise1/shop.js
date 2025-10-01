const products = require("./products.js")
function findingProducts(productName){
    for(let i =0;i<products.length;i++){
        if(products[i].name.toLowerCase()===productName.toLowerCase()){
            return products[i]
        }
    }
    return null
}
const result = findingProducts("Phone")
console.log(result)