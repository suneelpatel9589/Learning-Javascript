

 function fun1(){
    let dob = document.querySelector('#date').value
    let ans = document.querySelector('#ans')
    let bday = new Date(dob)
    let today = new Date()

    let year = today.getFullYear() - bday.getFullYear()
    let month = today.getMonth() - bday.getMonth()
    let day = today.getDay() -bday.getDay()
     if(bday<today){
    
    if(day<0){
        month--;
        let day1 = new Date(today.getFullYear(),today.getMonth(),0).getDate()
        day += day1;
    }
    if(month<0){
        year--;
        month+=12;
    }


    ans.innerHTML = `you are ${year} year , ${month} month,  ${day} days old`

}
else{
    ans.innerHTML = 'days not found'
}

 }  
