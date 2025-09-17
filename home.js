let st;
let count = 0
function stt(){
     let p = document.querySelector('#h')
    
    st= setInterval(()=>{
        p.innerHTML = count++

    },500)
}
function stop(){
    clearInterval(st)
}
function res(){
    count = 0
    document.querySelector('#h').innerHTML = count
    stop()
}



function btn(){
let a = parseInt(prompt('enter a number'))
let b = parseInt(prompt('enter 2number'))
let c = a+b
alert(c)
}