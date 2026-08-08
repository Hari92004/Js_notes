// let's discuss about the dynamic DOM manipulation----->
//createElement(),appenChilde(),removeChilde(),prepend()
let h1=document.createElement("h1")
h1.textContent="Hello my cutie girl";
document.body.appendChild(h1);//--->ye script ke niche  aa rah ahai
// document.body.prepend(h1);// ---> ye karpe pe script ke upper aaraha hai

// chalo style update ke baare mem padhte hai---->
// js se css badal na ---->
// h1.style.color="red";
// h1.style.backgroundColor="";
// h1.style.fontFamily="Gilroy";
// h1.style.textTransform="capitalize";

//let add the class to a paragraph---->
let p=document.querySelector("p");
p.classList.add("hello") // no need to call the css class,id or something
// for remove any class or is just use classList.remove("classname")

//use another thing is called "toggle" agar class lagi hui hai then hata deta hai aur nhi hai to laga deta hai
p.classList.toggle("hello"); // iska kaaam yeh hota hai