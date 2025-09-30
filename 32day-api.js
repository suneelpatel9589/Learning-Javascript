

//fetch(url, {method}) uniform resoce loceter

//http methods (req)
// get  - data acces
// ,post -insert
//  ,put - 
//  patch  -
// delete --
//sync -- 5s-10s-3s-2s-1s   //async -- 5s-10s-3s-2s-1s-- kam data ki hi line pahle acces hoti h
//sync js -- api -sever slow hoga to ye js wait nhi karega
//   promise-- 1.reject 2.pending 3.fulfill //object h  .then() , .catch()
// async/ await fech()

//`` template literal js me html element add karne ke liye
//${} --variable ko stor kar sakte h

 async function acces(){
    let data =  await fetch('https://jsonplaceholder.typicode.com/comments')
    let res = await data.json()
    let finaldata = res.map((e)=>`
        <tr>
             <td> ${e.id}</td>
             <td> ${e.name}</td>
             <td> ${e.email}</td>
        </tr>
    
    `).join("")

    document.querySelector('#showdata').innerHTML = finaldata

    console.log(res)
}

acces()

// let str = 'welcome'
// let str1 = 'cybrom'

// let str2 = str1+str2
// let str4 = "hi welcome \n to the js class"
// console.log(str4);

let str5 = `hi welcome
js class ${str1}`
console.log(str5)
