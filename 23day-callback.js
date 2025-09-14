
//function demo(function){
    //callback function एक function जिसे आप दूसरे function के अंदर argument (parameter) के रूप में पास करते हो, 
    // और फिर वो function बाद में call किया जाता है, उसे callback function कहते हैं।
//}

//higher order
//settime out two argu pass hoge  timer mini second me likhege



setTimeout(() => {
    alert("img")},5000)

setTimeout(() => {
    let img = document.getElementById('img')
    img.src = 'watch.webp'
    img.style.display ='block'},3000)
    
   setTimeout(() => {
    alert('suneel')
   },2000)