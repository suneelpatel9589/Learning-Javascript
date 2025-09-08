
function color(p){

document.body.style.backgroundColor = p
document.getElementById('h').textContent = p

}

 let btn = document.getElementById('p')
 let move = false
function fun(){
if(!move){
  btn.style.cssText = 'position:relative; left:50%'
  move = true
}
else{
  btn.style.cssText = 'left:0'
}

}

function sum(){
  let a = parseInt(prompt('enter a 1 number'))
  let b = parseInt(prompt('enter a 2 number'))
  let c = a+b
  let res = document.getElementById('ans')
res.textContent = c
res.style.cssText = 'padding:20px;border-radius:50%;background-color:pink;color:red'


}

