let input=document.getElementById("inputBox");
const buttons=document.querySelectorAll('button');

let String = "";
let arr = Array.from(buttons);
var calculated=false;
arr.forEach(button =>{
  button.addEventListener('click', (e) => 
  {
    if(e.target.innerHTML === '=') 
    {
      String=eval(String).toFixed(1);
      input.value = String;
      calculated=true;
    }
    else if(e.target.innerHTML ==='C')
    {
      String = "";
      input.value = String;
    }
    else if(e.target.innerHTML ==='DEL')
    {
      String=String.slice(0,-1);
      input.value = String;
    } 
    else if(e.target.innerHTML == '+/-'){
    String=e.target.innerHTML;
    if(String<0){
      String=String* -1;
      input.value=String;
      }

    }
    else{
      if(calculated == true){
        String="";
        input.value=String;
        calculated=false;
      }
      String+=e.target.innerHTML;
      input.value=String;
    }
    
  })
})