//arrow function (2015) es6 const
//arrow function without parameter
//syntax
//()=>{return} return sirf curli brecet per lagega /arrow function jo implicity return karta h/
//()=>()
//=>

    //arrow function without parameter

    let fun = () => {return"inside function"}
    console.log(fun());

    let fun1 = () => (4+2)
    console.log(fun1());

    //with fuction with parameter//

    let fun2 =(a,b) => (a*b)
    console.log(fun2(4,5))
//3
    let fun3 = name => name
    console.log(fun3("suneel"))
    //write a program aera of circle using arrow function wth parameter

let circle = (r) =>(3.14*r*r)

console.log(circle(5));




    //write to input from the user and prints its squre using with function with parameter
let x = parseInt(prompt("Enter a number"));

let y = () => (x * x);

console.log(y());    // input का square देगा

