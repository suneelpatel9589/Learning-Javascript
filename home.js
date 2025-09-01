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
