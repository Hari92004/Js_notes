// let discuss about the this key word ,what is it and what is the role of in js---->
// "this"----> is the a special keyword ---> iy changes its nature based on its use 

//global scope--->
console.log(this) //----->window
//window---> 

//functional scope me this ki value---> 
function abcd(){
 console.log(this)
}
abcd()
//functional scope me this ki value window hin hoti hai

//method me kya hota hai--->ek aisa function jo ek object ke ander ho--->
let obj={
name:"Hari",
hello:function (){
   console.log(this.name)
}
}
obj.hello()
// yaha pe this ki value pura object ho jata hai-->"Hari"
//but agar function arraow function hua then this ki value window ho jayega---> 

//let check it in the addEventlistener--->
let hr=document.querySelector("p")
hr.addEventListener("click" ,function 
(){
  console.log(this.style.color="red")  
})
//method me ander ke ander agarr ek function bana diya  then "this" window me badal jayega and isse rokne ke liye hum internal function ko arrow function likh sakte hai--->
// and class ke ander ek blank object hota hai---->


