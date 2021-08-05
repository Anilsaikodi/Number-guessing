function calc()
{
var num=document.getElementById('input').value;
if(num%3==0 && num%5==0)
{
  measure="FIZZ-BUZZ"
  
}  
else if(num%3==0){
    measure= "FIZZ"
}
else if(num%5==0)
{
    measure="BUZZ"
}
 
else
{
    measure= num ;
}
document.getElementById("result").innerHTML = measure;
}