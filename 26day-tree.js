//d stucture 

 let [name,age,place] = ["suneel",90,"satna"]
console.log(name);

//spread operator-->  ...//rest oprator

 let emp = ["suneel","msc"]
 let empdetails = ["bhopal",9589115046]

let fulldetails = [...emp,...empdetails]
console.log(fulldetails)

//write a program to make an empty aarey with 5 student user input with 5 subject mark the user 

let student = []
for(let a = 0; a<5; a++){
    student[a] = prompt('enter your student ')
}

 let subject  = []
 for(let i = 0; i<5; i++){
    subject[i] = parseInt(prompt("enter your  marks"))
}

 let total = [...student,...subject]
 console.log(total)

//  for...of → values पर चलता है
// for...in → keys/index पर चलता 

let emp = ["suneel", 39,34,22,11,11,]//for  of loop used 
for(let v1 of emp){
    console.log(v1);
}

// for(let k in emp){//in loops used in index value
//     console.log(k);
// }

//write a program to sum of all number in an arry

let num = [15,14,13,12,11,10,9,8,7,6,5,4,3,2]
let sum = 0
for(let p of num){

    sum = p+sum
}

console.log(sum)
