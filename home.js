

function sum() {

        let btn = document.getElementById('btn');
        let current = document.body.style.backgroundColor;

        if (current === "red") {
            document.body.style.backgroundColor = "blue";
            btn.textContent = "blue";
        } 
        else if (current === "blue") {
            document.body.style.backgroundColor = "yellow";
           btn.textContent = "yellow";
        } 
        else {
            document.body.style.backgroundColor = "red";
        btn.textContent = "red";
        }
       
    }

    function fun(){
    
        document.body.style.backgroundColor = 'red'
alert('working process...')
    }

    let sec = document.createElement('section')
    let div = document.createElement('div')
    let h = document.createElement('h1')
    h.textContent = 'my name is suneel patel '
    div.append(h)
    sec.append(div)
    sec.style.backgroundColor = 'red'
    document.body.append(sec)
    console.log(sec)

    let btn = document.createElement('button' )
    btn.textContent = 'enter'
    btn.onmouseleave= function(){
        btn.style.backgroundColor = 'yellow'
        alert('working...');
    }
    document.body.append(btn)
    console.log(btn)