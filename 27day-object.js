
//{} unordered -> key:value

  let person = {
      name : 'suneel',
     age : 23,
     contact : 9589115046,
          city :'satna'

 }
  console.log(person);
  person.email =  'suneelpatel9589@gmail.com'  // add element
  person.age = 24  //  element update
  console.log(person)


// user se input leke  key ki value me store karna

   let emp = {
   emp_name : prompt('enter a name'),
   emp_position : prompt('enter a name')
}
 console.log(emp);

 
//JavaScript Object with Nested Object, Array, and Function

 let person = {
    name : 'suneel',
    age : 23,
    contact : 9589115046,
    city :'satna',

    nested :{
        aera: 'indp',
        sector : 'c'
   },

    add : function(){
        return 2+8
    },
     ar : [12,23,34],

 }
 console.log(person)
 console.log(person.nested.aera);   //  PRINT "indp"
  console.log(person.nested.sector); //  print "c"
 console.log(person.add());  // 10 (2 + 8)
  console.log(person.ar[2]);  // 34 (index 2)

 for(let k in person){
     console.log(person[k])//array type me vaaribale and value print 
   }

 let k = Object.keys(person)// only key ko return karta h [name,age] etc.
  console.log(k[0])

  let v = Object.values(person) // only value ko return  [suneel,23.satna] etc.
 console.log(v)
