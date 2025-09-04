
function  add(){
let a = parseInt(prompt("enter a 1st number"))
let b = parseInt(prompt('enter a 2nd number'))
let c = a+b
let res = document.getElementById('ans')
res.textContent = c
res.style.cssText = 'padding:20px;color:red;background-color:pink;border-radius:50%'
}

function odd(){
let d = document.getElementById('stt')
d.style.cssText = 'position:relative;left:50%'
    
}

function fun(){
let c = document.getElementById('stt')
c.style.cssText = 'left:0;'
    
}
