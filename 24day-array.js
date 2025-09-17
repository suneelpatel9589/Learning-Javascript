
// array-->collection of different type of elements
//[] ordered --> indexing (adderss/position of element)

let person = [ "suneel",23,"satna",5.9,true]
//console.log(person[0]);
//console.log(person[1]);
//console.log(person[4]);
//console.log(person[4]);

//for loop se print

//for(let a = 0; a<5;a++){
   // console.log(person[a])
//}
/*
//// यूज़र से input लेकर array में store करना
let student = []
for(let a = 0; a<5; a++){
    student[a] = prompt('enter elements')
    
}
console.log(student); 
//write a program to print odd number fifteen to one
*/
let odd = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,]
for(let i = 0; i<14;i++){
    if(i%2!==0){
        console.log(odd[i])
    }
}

