function data(){

    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value
     let pass = document.querySelector('#pass').value
      let con = document.querySelector('#confirm').value

    if(name==""){
        alert('enter your name')
        document.querySelector('#name').focus()
        return false
    }
    else if(age==""){
        alert('enter your age ')
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert('enter your age is number')
        document.querySelector('#age').focus()
        return false
    }
    else if(contact==""){
        alert('enter your contact number')
        document.querySelector('#contact').focus()
        return false
    }
    else if(isNaN(contact)){
        alert('enter your contact 0 - 9 number')
        document.querySelector('#contact').focus()
        return false
    }
    else if (contact.length!=10){
        alert('please enter your 10 digit number')
         document.querySelector('#contact').focus()
        return false
    
    }
    else if(pass==""){
        alert('enter your password')
        document.querySelector('#pass').focus()
        return false
    }
    else if(!(pass.match(/[@#!$]/))){
        alert('enter your spaical @#$ character')
          document.querySelector('#pass').focus()
        return false
    }
    else if(con==""){
        alert('enter your confirm password')
        document.querySelector('#confirm').focus()
        return false
    }
    else if(pass!=con){
        alert('enter your matched password')
          document.querySelector('#confirm').focus()
        return false
    }
}



let h = document.createElement('h1')
h.textContent = 'suneel patel'
h.style.cssText = 'color:red;background-color:pink;padding:30px;border:2px ,solid,black;text-align:center;'
document.body.append(h)


let btn = document.querySelector('#btn')
let move = false

function one(){
    if(!move){
        btn.style.cssText = 'position:relative;left:50%'
        move = true
    }
    else{
        btn.style.cssText = 'left:0'
        move = true
    }
}

setTimeout( () => {
let img = document.getElementById('img')
img.src = 'pic.png'
img.style.display ='block'

},5000)

 let sec = document.createElement('section')
 let div = document.createElement('div')
 let d = document.createElement('h1')
 d.textContent = 'lorum insor '
div.append(d)
 sec.append(div)
 document.body.append(sec)
 console.log(sec)
