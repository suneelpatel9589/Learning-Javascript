
<<<<<<< HEAD
function sumitform(){
    let frmdata = {
        name: document.querySelector('#name').value,
        contact: document.querySelector('#contact').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
=======
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
>>>>>>> 42da603 (ra)

    localStorage.setItem('userdata',JSON.stringify(frmdata))

}
<<<<<<< HEAD
let localobject = JSON.parse(localStorage.getItem('userdata'))
function logindata(){
    let loginfrm = {
        loginemail: document.querySelector('#loginpassword').value,
        loginpassword:document.querySelector('#loginpassword').value
    }
    if(localobject.email!=loginfrm.loginemail || localobject.password!=loginfrm.loginpassword){
        alert('user not found')
        return false
    }
}
=======
>>>>>>> 42da603 (ra)

