console.log(document); //output all the doucment 
console.log(document.body) //output information of the body 
console.log(document.head)//output informattion from the head

console.log(document.children[0]);//html
html=document.children[0]
console.log(html.children[1])//the number 1 is used to access the body 

body=html.children[1];
div=body.firstElementChild;
console.log(div)// to get the div info

div = document.getElementsByTagName("div")
console.log(div)

ul =document.getElementsByTagName()