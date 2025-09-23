//num length

let num = [2,2,1,4,5,6,7,87,834,34,3,90,76,44,33,223,122,678,334]
for(let i = 0; i<num.length; i++){
    console.log(num[i]);
    
}
    

let student = ["suneel",23,"bhopal"]
student.push("indian")// after me add karne  ke liye
console.log(student)

student.unshift('mr')//before me add karne ke liye
console.log(student)

student.pop()//last element delete karne ke liye(only one)
console.log(student)

student.shift()//first element delete karne ke liye(only one)
console.log(student)

let student = ["ram",23,"satna","cybrom","cs"]
let cut = student.slice(1,4)
console.log(cut);

let digit = [10,15,1,3,8,7,6,5]//print odd number 
let crop = digit.slice(0,5)
console.log(crop)
for(let a= 0;a<crop.length;a++){
    if(crop[a]%2!=0){
        console.log(crop[a]);
    }
}
    
   let digit = [10,15,1,3,8,7,6,5,]//delete.add 3 argument pass hogi splice(index,no. of element ,add elements)
   digit.splice(3,2,"suneel")
   console.log(digit)