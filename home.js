
function fun(){
    let a = parseInt(prompt('enter a 1 first number'))
    let b = parseInt(prompt('enter a  2 second number'))
    let c  = a+b
    let res = document.querySelector('#ans')
    res.textContent = c
    res.style.cssText = 'padding:20px;border-radius:50%;background-color:pink'
}