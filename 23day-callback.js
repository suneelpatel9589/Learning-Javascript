
//function demo(function){
    //callback function एक function जिसे आप दूसरे function के अंदर argument (parameter) के रूप में पास करते हो, 
    // और फिर वो function बाद में call किया जाता है, उसे callback function कहते हैं।
//}

//higher order
//settime out two argu pass hoge  timer mini second me likhege


/*
setTimeout(() => {
    alert("img")},5000)

setTimeout(() => {
    let img = document.getElementById('img')
    img.src = 'watch.webp'
    img.style.display ='block'},3000)
    
   setTimeout(() => {
    alert('suneel')
   },2000)
*/

//setinterval(()=>{
    //code
//},500)

let st
 let v = 0
function startt(){
   
    let count = document.querySelector('#count')
    st = setInterval(()=>{
        count.innerHTML = v++
    },500)
}
function stop(){
    clearInterval(st)
}
function res(){
    v = 0
    document.querySelector('#count').innerHTML = v
    stop(v)
}


//event fire arrow function ---> event fire js file
let btn = document.querySelector("#btn")
btn.addEventListener('click',()=>{
    alert('working...')
})
//with out arrow function
let dbtn = document.querySelector("#dbtn")
dbtn.addEventListener('dblclick',function(){
    alert('hello---!')
})
