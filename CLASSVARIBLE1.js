
//Declare a variable using var, assign it a value, then reassign it with a new value and print both.
// var से variable बनाना, value देना और फिर बदलना

var num1  = 10;
console.log("Initial value:", num1);
 num2 = 20;
console.log("New value:", num2);

// inputs from the user and find the area of triangle
//यूज़र से base और height लेना और triangle का area निकालना

let b = parseInt(prompt("Enter the base"));
let h = parseInt(prompt("Enter the height"));
let triangleArea = (b*h) / 2;
console.log("Area of triangle:", triangleArea);

//Create two variables usinglet, assign them numbers, then swap their values using a temporary variable?
//let से 2 variables बनाना और temporary variable से swap करना

let a = 15;
let b = 25;

console.log("after:", a, b );

let c = a;
a = b;
b = c;

console.log("before:", a,b);

//. Make simple calculator, take 2 integer inputs and one sign input (+-*/) //and perfome the calculation ?
//simple calculator

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

//Take radius from the user and find area of circle.
// यूज़र से radius लेना और circle का area निकालना?
//π=3.14
let radius = parseInt(prompt("enter the radius"));
let area = 3.14 * r * r;
console.log("circle area", area);

// Take a Celsius temperature in a variable and convert it to Fahrenheit.
// Celsius को Fahrenheit में बदलना
let c = parseInt(prompt("enter the celsius"));
let f = (c * 9/5) + 32;
console.log(f);
