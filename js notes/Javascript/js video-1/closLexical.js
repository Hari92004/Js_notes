// js me closure  kya hai lets discuss about it------------------->
// closures --> ek function jo return kare  ur ek function and woh function  parents ka avariable use karta ho...

function abcd(){
let b=123;
  return function(){
    console.log(b);
   }
}
abcd();
// what is lexical scoping------------>
//isme ek function ke variable ka access scope bataya gaya hai ---like
function up(){
  let r=234; //---- r ko kebal up ke ander use kar sakte hai and 
  function ht(){
  let f=54;   //---- f ko bhi ht ke ander hin use kar sakte hai
   function h(){
      let v=6534;   //---ise shirp hum h function me hin use kar sakte hai
  }
}
}

//IIFE kya hai ---(>Immediate4 Invoke Function Expressions)
(function(){
console.log("hello gandfu log kaise ho  re ")
})
();  //iife function call 

// Hoisting and different b2in the declaration -------->
// hoisting means we are able to call a function or variable before use it in a function or a operation
Ree();
// out put will be--------------> hui hui hui 


function Ree(){
  console.log("hui hui hui ")
}
// yeh function expression ke liye kaam nhi karta hai---

//q-40
function getscore(...val){
 let total=0;
 val.forEach(function(val){
  total+= val;
});
 return total;
}
console.log("the total value is=",getscore(12,13,45,67,23,76));

// aisa function jo kuch return nhi kar raha hai  woh return karega undefined 
function f(){
 return ;   // ye return karega undefined
}
console.log("mere pass return karne ke liye kuch nhi hia so i return =",f());

// can you assign a function to a variable and call it?

let a =function(){

}
a();