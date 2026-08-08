//what is encapsulation in js---->
//main inner logic hide karlena and un cheejo ka acess dena jiska jarurat hai---ye bhi closure ke liye use karte hai-->
function abcd(){
let click=0;
  return function(){
   if(click<5){
   click++;
   console.log(`clicked : ${click} times`)
   }
  else{
   console.log("aabe 5 bar ho chuka hai ur click nhi kar sakta tuh--")
   }
 }
}
let fnc=abcd();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();
