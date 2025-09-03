
//addition


function add(){

let a = parseInt(prompt("enter 1 number"))
let b = parseInt(prompt("enter 2 number"))
let c = a+b
 let res = document.getElementById('ans')
res.textContent = c
res.style.cssText = 'padding:20px;color:red;border-radius:50%;background-color:pink'
}

//button left move

function fun(){
let p =  document.getElementById('move')
p.style.cssText = 'position:relative;left:50% ; right:50%'
 

}   
function back() {
  let p = document.getElementById('move');
  p.style.left = "0"
}
