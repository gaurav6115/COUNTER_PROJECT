document.body.style.backgroundColor='black';
document.body.style.marginTop='50px';
document.body.style.marginLeft='40px';
var h = document.getElementById("heading");
var para = document.getElementById("paragraph");
var decrementbtn = document.getElementById("decrement");
var incrementbtn = document.getElementById("increment");
var clearbtn = document.getElementById("clear");
var txt = document.getElementById('alert-text');

document.body.style.color='white';

h.style.color='white';
para.style.color='white';

clearbtn.style.backgroundColor='black';
clearbtn.style.color='white';

var counter = para.innerHTML;

function msg(){
    txt.innerHTML='Error : Cannot go below 0';
}

    function decrement(){
        if(counter>0){
        counter--;     
        console.log(counter);
        para.innerHTML=counter;
    }
    else{        
        console.log(msg());
        counter=0;
        console.log(counter);
        para.innerHTML=counter;
    }
}
    
    function increment(){
        txt.innerHTML='';
        counter++;
        console.log(counter);
        para.innerHTML=counter;
    }
    
    function clear(){
        txt.innerHTML='';
        counter=0;
        console.log(counter);
        para.innerHTML=counter;
    }

decrementbtn.onclick = decrement;

incrementbtn.onclick = increment;

clearbtn.onclick = clear;

