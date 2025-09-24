// array of object
//map function--> callback function

let students = [
    {
        st_name : 'suneel',age: 34, contact:1234
    },

     {
        st_name : 'sumit',age: 18, contact:1234
    },

     {
        st_name : 'aman',age: 23, contact:1234
    }
]
 console.log(students);

 let on = {
     
        st_name : 'ritik',age: 23, contact:1234
   }
    students.push(on)          //use add element
    console.log(students)


//callback map() 

 let res = students.map((e)=>{return e}) //return e.age yah value :key ko bhi print karta h (loop ka kam )
console.log(res);

//filter

let data = students.filter((i)=>{return i.age==18}) // search/filter karna
console.log(data);

//filter and operator used
let person = [
    {st_name:'suneel',age: 25, contact:1234},
     {st_name:'suneel',age: 22, contact:1234},
      {st_name:'suneel',age: 16, contact:1234},
       {st_name:'suneel',age: 28, contact:1234},
        {st_name:'suneel',age: 30, contact:1234},
         {st_name:'suneel',age: 27, contact:1234}
]
let dataa = students.filter((i)=>{return i.age>14 && i.age<28}) //return e.age
console.log(dataa);


