
// ques.1 WAP to take string "Hello" from the user and compare it if "Hello" is equal to "Hello" then print "Hello World"?

let num = prompt("enter a string")
if(num == "Hello"){
    console.log("Hello World")
}
else{
    console.log("not equal to hello")
}
    // ques.2 WAP to check user's age is greater then 23 or not ?

    let age = parseInt(prompt("enter your age"))
    if(age>23){
        console.log("age is greater than ")
    }
    else{
        console.log("age is not greater than ")
    }
    
// ques.3WAP to check number is odd or even . if number is odd then find out area of circle if even then square of that number?
let num = parseInt(prompt("enter a number"))
if (num % 2 == 0) {

    console.log("even number = " + (num * num));
} 
    else {

    console.log("odd number area of circle = " + (3.14 * num * num));
}

// ques.4 WAP to make student grade finder Take inputs of 5 subjects then print the grade according to percentage?

let a = parseInt(prompt("Enter your marks: Hindi"))
let b = parseInt(prompt("Enter your marks: English"))
let c = parseInt(prompt("Enter your marks: Physics"))
let d = parseInt(prompt("Enter your marks: Math"))
let e = parseInt(prompt("Enter your marks: Chemistry"))

let total = a + b + c + d + e;
let percentage = total / 5;

console.log("total marks", total)
console.log("parcentage",percentage)

if (percentage >=60) {
    console.log("Grade = A");
}
 else if (percentage >=50) {
    console.log("Grade = B");
 }
else if (percentage >=33) {
    console.log("Grade = C");
} 
else{
    console.log("failed")
}

*/
// ques.5 Take 3 inputs from the user and check 3 is +ve or -ve if number is positive then check it even or odd, if even then add all 3 inputs if number is -ve then multiply of all inputs?

let a = parseInt(prompt("enter 1 number"));
let b = parseInt(prompt("enter 2 number"));
let c = parseInt(prompt("enter 3 number"));

if (c > 0) {
    if (c % 2 === 0) {
        console.log("even of sum", (a + b + c));
    }
     else {
        console.log("odd positive number");
    }
}
else {
    console.log("negetive number ",( a * b * c));
}
