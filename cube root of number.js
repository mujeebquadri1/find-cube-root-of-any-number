//program to find cube root of  number with dom
//with validations

function CBRT() {  
var numberFisrt=document.getElementById("number1").value;   //input  values with validation
//var numberSecond=document.getElementById("number2").value;   // input values with validation
var a= parseFloat(numberFisrt);
//var b= parseFloat(numberSecond);

 var data= Math.cbrt(a)  ;
 
 if(isNaN(a ))
 {
	 document.getElementById('mylocation').innerHTML=`please enter the valid number`;  
document.getElementById("mylocation").style.color = "red"; 

 }
 else{
document.getElementById('mylocation').innerHTML=`The square root of ${a} :`+"  "+data;  
document.getElementById("mylocation").style.color = "green"; 

 }
 }  