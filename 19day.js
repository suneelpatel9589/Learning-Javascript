function add(){

let a = parseInt(prompt("enter 1 number"))
let b = parseInt(prompt("enter 2 number"))
let c = a+b
 let res = document.getElementById('ans')
res.textContent = c
res.style.cssText = 'padding:20px;color:red;border-radius:50%;background-color:pink'
}





//button left move
let btn1 =  document.getElementById('btn1')
let move = false
function fun(){


if(!move){
  btn1.style.cssText = 'position:relative;left:50%'
  move = true
}
else{

  btn1.style.cssText = 'left:0%'
  move = false
}
 

}

//increment decement reset button

let count = 0;  
function inc() {

  
  let d = document.getElementById('h').innerHTML = ++count

}
function dec() {
  if(count>0){
  document.getElementById('h').innerHTML = --count
  }
}
function res() {
  count =  0;

  document.getElementById('h').innerHTML = 0

}

