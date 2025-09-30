
// string ---> word / sentence  /character

let name = 'suneel'
console.log(name);           // suneel

console.log(name[2])         // 'n'  (क्योंकि indexing 0 से होती है: s=0, u=1, n=2)

console.log(name.length)     // 6  (कुल characters)

console.log(name.toUpperCase()) // 'SUNEEL'

console.log(name.toLowerCase()) // 'suneel'

let full_name = ' suneel patel '
console.log(full_name.trim())   // 'suneel patel' (extra spaces हट जाएंगे);

let sent = 'suneel is very bad boy'
let res = sent.replace('bad','good')
console.log(res)


let st1 = "i love php , we learn php"
console.log(st1.replaceAll('php','js'))//php ke jagah js

let st2 = "mujhe ghar jana h..."///repeat bar bar hoga
console.log(st2.repeat(5))

let st3 = 'vaibhav'
console.log(st3.substring(1,4))///slice  copy

//////

// //date modules

let date = new Date()
console.log(date)     //all

console.log(date.getFullYear())  //year only

console.log(date.getMonth()+1)    //month only

console.log(date.toDateString())  //date ,month, day,year

console.log(date.toLocaleTimeString())  // time minutus , second



let dt = new Date()
let tdate = dt.getDate()
console.log(tdate)

document.querySelector('#date').innerHTML = tdate

let v = dt.getFullYear()
 document.querySelector('#month').innerHTML = v









