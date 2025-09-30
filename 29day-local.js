
///local storage:- browser me data 
// setitem-->save , getitem-->acces , removeitem-->single deletion , clear-->whole data deletion
// formate => key:value , type=> string


//set item---> data add karna

// localStorage.setItem('name','suneel')
// localStorage.setItem('age',23)
// localStorage.setItem('place','satna')

//remove item---> single data remove

// localStorage.removeItem('age')

// //getitem--->document me show karne ke liye

// let name = localStorage.getItem('name')
// document.write(name)

 //delete---> all delete

// localStorage.clear()


function form(){
let name = document.querySelector('#name').value
let age = document.querySelector('#age').value
let contact = document.querySelector('#contact').value
let email = document.querySelector('#email').value
localStorage.setItem('name',name)
localStorage.setItem('age',age)
localStorage.setItem('contact',contact)
localStorage.setItem('email',email)
return false
}


function get(){
let get = prompt('enter key value which you want to get')
let pget = localStorage.getItem(get)
document.write(pget)

}
   