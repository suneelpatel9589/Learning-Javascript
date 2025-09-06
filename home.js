
let btn = document.getElementById('btn')
let move = false

function fun(){

if(!move){
    btn.style.cssText = 'position:relative;left:50%'
    move = true
}
else(

    btn.style.cssText = 'left:0'
)


}



let count = 0;  
function inc() {

  document.getElementById('h').innerHTML = ++count

}
function dec() {
  
  document.getElementById('h').innerHTML = --count

}
function res() {

  document.getElementById('h').innerHTML = 0

}

