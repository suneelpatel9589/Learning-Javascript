//JSON.stringify--->string me convert karne ke liye


function getdata(){
    let frmdata = {
        name: document.querySelector('#name').value,
        contact: document.querySelector('#contact').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#pass').value
    }
    localStorage.setItem('userdata',JSON.stringify(frmdata))
    
}

let localobject = JSON.parse(localStorage.getItem('userdata'))

function logindata(){
    let loginfrm = {
        loginemail : document.querySelector('#loginemail').value,
        loginpassword : document.querySelector('#loginpassword').value
    }
    if(localobject.email != loginfrm.loginemail || localobject.password !=loginfrm.loginpassword){
        alert('user not found')
        return false
    }
}