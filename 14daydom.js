//dom--document object model
//elements--node
//text--textnode

document.write("<h1>hello<br>world !!</h1>")

let hd = document.getElementById("head")
//console.log("hd")
//hd.textContent = " mr. suneel patel"
let h = hd.textContent
console.log(h);
hd.innerHTML = "<u>again</u>"

let head2 = document.getElementById("head2")
head2.setAttribute("align","center")

document.body.removeAttribute('bgcolor')