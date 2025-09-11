

function formdata(){

    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact= document.querySelector('#contact').value

    if(name==""){

        alert('please enter your name')
        document.querySelector('#name').focus()
        return false
    }
    else if(age==""){
        document.querySelector('#error').textContent = 'please enter this feild'
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert('please enter number in age')
        document.querySelector('#age').focus()
        return false
    }
    else if(contact==""){
       alert('enter your contact number')
        document.querySelector('#contact').focus()
        return false

}
else if(contact.length!=10){
    alert('enter 10 digit number')
    document.querySelector('#contact').focus()
    return false
}
else if(isNaN(contact)){
    alert('enter 0 -9 digit number')
    document.querySelector('#contact').focus()
    return false
}
}
