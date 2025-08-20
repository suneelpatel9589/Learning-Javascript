let age = parseFloat(prompt("enter your age"))
if(age>=18){
    let n = parseInt(prompt("press 1 for indian"))
    if(n==1){
        console.log("eligible for voting");
    }
    else{
        console.log("not eligible");

    }
}
else{
    console.log("yor are under age...");
}