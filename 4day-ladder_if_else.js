/*
let num1 = parseInt(prompt("Enter the First no."))
let num2 = parseInt(prompt("Enter the Second no."))

if(num1>num2){
    console.log("num1 is gerater");
}
else{
    console.log("num2 is greater");
}
*/

/*
let num1 = parseInt(prompt("Enter a number"))

if(num1 == 1){
    console.log("111");
}
else if(num1 == 2){
    console.log("222");
}
if(num1 == 3){
    console.log("333");
}
else{
    console.log("not valid");
}
*/

//Make simple calculator, take 2 integer inputs and one sign input (+-*/) and perfome the calculation

let x = parseInt(prompt("Enter First no."))
let y = parseInt(prompt("Enter Second no."))
let z = prompt("+ - * /")

if(z == "+"){
    console.log(x+y);
}
else if(z == "-"){
    console.log(x-y);
}
else if(z == "*"){
    console.log(x*y);
}
else if(z == "/"){
    console.log(x/y);
}
else{
    console.log("invalid input");
}