async function dataaccess() {
    let data = await fetch('http://localhost:3000/userdetails')
    let res = await data.json()
    console.log(res)
    let finaldata = res.map((i)=>`
        <tr>
        <td> ${i.id} </td>
        <td> ${i.name} </td>
        <td> ${i.city} </td>
        <td> ${i.age} </td>
        <td> ${i.contact} </td>
        <td> ${i.email} </td>
        <td> <button onclick="mydelete('${i.id}')"> Delete </button> </td>
        <td> <button onclick="myedit('${i.id}')"> Edit data </button> </td>
        </tr>
        `).join("")

        document.querySelector('#data').innerHTML = finaldata
}

dataaccess()


//data acces
function storedata(){
    let frmdata = {
        name : document.querySelector('#name').value,
        city : document.querySelector('#city').value,
        contact : document.querySelector('#contact').value,
        email : document.querySelector('#email').value,
        age : document.querySelector('#age').value,
    }
    fetch('http://localhost:3000/userdetails',{
        method : "POST",
        headers : {
            'Content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(()=>alert("Data Inserted"))
    .catch((e)=>console.log(e))
}
//delete data
function mydelete(id){
    fetch(`http://localhost:3000/userdetails/${id}`,{
        method: "DELETE"
    })
    .then(()=>alert("Data Deleted"))
}
///edit data
 async function myedit(id){
    let data = await fetch(`http://localhost:3000/userdetails/${id}`)
    let res = await data.json()
    let frm = `
     <input type="text" value="${res.id}" id="id1" readonly/><br><br>
     <input type="text" value="${res.name}" id="name1"/><br><br>
     <input type="text" value="${res.city}" id="city1"/><br><br>
     <input type="text" value="${res.contact}" id="contact1"/><br><br>
     <input type="text" value="${res.email}"/ id="email1"><br><br>
     <input type="text" value="${res.age}" id="age1"/><br><br>
      <button onclick="finalupdate('${res.id}')"> final update </button> </td>

    `
    document.querySelector('#showform').innerHTML = frm

}
//final update
function finalupdate(id){
    let editdata = {
        id: document.querySelector('#id1').value,
        name: document.querySelector('#name1').value,
        city: document.querySelector('#city1').value,
        contact: document.querySelector('#contact1').value,
        email: document.querySelector('#email1').value,
        age: document.querySelector('#age1').value
        
    }
    fetch(`http://localhost:3000/userdetails/${id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(editdata)
    })
    .then(()=> alert('data updated'))


}


