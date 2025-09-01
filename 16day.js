
//one line css

let hero = document.getElementById('hero')
hero.style.cssText = "color:red;background-color:yellow"

//creat new element/tag from js

let head2 = document.createElement('h2')
console.log(head2);
head2.textContent = "welcome to css"
document.body.append(head2)

//create list 

let ullist = document.createElement('ul')
let listitem = document.createElement('li')

listitem.textContent = "home"
ullist.append(listitem)
 document.body.append(ullist)

 let img = document.createElement('img')
 img.src = "pic.png"
 document.body.append(img);