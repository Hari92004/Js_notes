//let discuss another one for the inerloop system ---and also understand how does it work--->
function outer(){
 let counter=0;
 return function(){
 counter++;
 console.log(counter);
 }
}
const counter=outer(); // isme value update hota hai-------------->
counter(); // isse counter ka value 0 se 1 hua and
counter(); // isse counter ka value 1 se 2 hua 