// function formdata1(){
  // let num1 = parseInt(document.querySelector('#num1').value)
   //let num2 = parseInt(document.querySelector('#num2').value)
     //document.querySelector('#result').textContent = num1 + num2
    //return false
 //}

//WAP to take 2 input from the user and add both of them the check addition is even or odd if additio is even then print the ans on document 
// page with color red if addition is odd then print the cube of that no. in document page in italic 
// उपयोगकर्ता से दो इनपुट लेता है और दोनों को जोड़ता है। जाँच करें कि जोड़ सम है या विषम। यदि जोड़ सम है, तो उत्तर को दस्तावेज़ पर प्रिंट करें।
// पृष्ठ का रंग लाल है। यदि जोड़ विषम है, तो उस संख्या के घन को दस्तावेज़ पृष्ठ पर इटैलिक में प्रिंट करें।WAP उपयोगकर्ता से दो इनपुट लेता है और दोनों को जोड़ता है। जाँच करें कि जोड़ सम है या विषम। यदि जोड़ सम है, तो उत्तर को दस्तावेज़ पर प्रिंट करें।

function addition(){
    let first = parseInt(document.querySelector('#first').value)
   let second = parseInt(document.querySelector('#second').value)
    let result = first+second
    
    if(result%2==0){
        let result1 = document.querySelector('#result')
        result1.textContent = result
        result1.style.color = "red"
    }
    else{
        let result2 = document.querySelector('#result')
        result2.textContent = result*result*result
        result2.style.fontStyle = "italic"
    }
    return false
}