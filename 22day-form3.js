

function formdata(){

    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact= document.querySelector('#contact').value
     let email = document.querySelector('#email').value
      let password = document.querySelector('#password').value
       let confirm = document.querySelector('#confirm').value

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
else if(email==""){
    alert('enter email')
    document.querySelector('#email').focus()
    return false
}
else if(!(email.includes('@gmail.com'))){
    alert('enter @  ')
    document.querySelector('#email').focus()
    return false
}
else if(password==""){
    alert('please enter your password')
    document.querySelector('#password').focus()
    return false
}
else if(!(password.match(/[@#$&]/))){
    alert('enter is a special character')
    document.querySelector('#password').focus()
    return false
}
else if(confirm==""){
    alert('please enter your confirm password')
    document.querySelector('#confirm').focus()
    return false
}
else if(password!=confirm){
    alert('please enter your confirm  correct password')
    document.querySelector('#confirm').focus()
    return false

}


}