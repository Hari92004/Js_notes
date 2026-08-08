// function scope kya hota hai---function me scope ka matlab hai  ki uske under declare ek variable ko hum kaha tak use kar sakte hai---->
//1) functional scope kya hota hai--->
// ek cheej function ke ander use ho sakti hai

//2) global scope kya hota hai--->
//ye ek variable jo pura code me use kar sakte hai

//3) block scope kya hota hai--->
// ye shirf curly braces ke ander hin use kar sakte hai--->{}
let k=0;
if(k!=10){
 let ver=4
 ver++;
 console.log(ver)
} // ye ek block scope hai---->

//execution context: memory creation and execution phase--->
//here js allocate a space for your code / function and store the varible inside that allocated space and run the space ---> it is named as execution memory creation ,the run part is known as execution phase--->


//lexical scope and dynamic scoping--->
//ye ek varible ko acess karne ka limit bataa hai like ek nested function me first declare variable pura function end hone tak chalega but 2nd declared variable us function ke end tak hin chalega like that and so on--->

//closure  kya hota hai--->
// closure ka matlab hai ek aisa function jo return kare ur ek function and woh returning function us function ka koi varible use karta ho--->


//faayed---
//private variable
//global pollution ko kam kar sakte ho--like code me bahot saare varible ke mix up se bachana

// lye discuss baout how variable are preserved here ---->
function abcd(){
let b=33;
  return function(){
    console.log(b);
     b++;
   }
}
let fnc=abcd();
fnc();

//for any code if the function /code finished its work then all varible also get shutdown ,we cant call them again ...even in js...but it has the closure property where we store the function in variable it's store the copy of the function and after the function end we can print the return alue of that ended function ---> the given above example is that

// uska naam hota hai--.[[environment]]


//private counter--->
//isme function chalape hume koi value nhi milta hai ,balki iske jagah hume ek function milta hai and 2nd time chalape uske ander ka value milta hai and so on but yaad rahe ur ek time us function ko hum ek new variable me store karne pe uske ander ka variable initialized value se start hota hai ---example
fnc()
fnc()

let fnc1=abcd();
console.log("the next function is start");
fnc1()
fnc1()
fnc1()
fnc1()
fnc1()
fnc1()


