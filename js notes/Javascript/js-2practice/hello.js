const { createElement } = require("react");

//select all <li> element and print their text using a loop ----->
let li=document.querySelectorAll("li");
li.forEach(function(val){
 console.log(val.innerHTML);
});

//what are the different between innerText,textContent,,innerHtml,---->
// here the first two are same as but their priority is different--like for nnerText has more priority then the other then the taxtContent and then innerHtml 
//but there is theh twist is here that the innerHtml can add the  html content means we can write the html content in it but for them it does not gonna work---

//when should you use textContent instead of innerText?
// for textContext it can change every thing like the hidden one also but in innerText it can't change every thing and innerTexthas the more priority then the textContent.
//text content retrive the visible data only and text content is faster then innertext---it is always recommened fr all to use the textConetent


//Q3) Select a paragrap and replace its content with:
let para=document.querySelector(".hello");
para.textContent="Hello ji kaisi ho app😊";

//how do u get src of an image--->
// we can get the src of an image by using the like--
let image=document.querySelector(".image").getAttribute("src");

// how to set the setAttribute for an elemnt---->
let h3=document.querySelector("h3");
h3.setAttribute("class","hello1"); 

//select a link and update its href---
let f=document.querySelector("a");
f.setAttribute("href","kya haal hai madamji")

// Add a tittle attribute to a div dynamically--->
document.querySelector(".hlw").setAttribute("title","some info");

//remove the disable attribute from a button---->
let btn=document.querySelector("button");
btn.removeAttribute("disabled");// for active the btn will  responds properly---->

//what does create element do?
// createElement ek html element (node) create karne ke liye use ki aata hai--->

//what is the diffenet between appeChild and prepend--->
//ans---> appenChild ek elelemnt ko last me add karta hai but prepend shuruat add karta hai

//can u remove an elelment using removeChild()?
// yes we can ----example--->

let rmv=document.querySelector(".dv")
rmv.removeChild("h5");// nhi ho raha hai----> 

// how to change the background color of an element---->done

//what is the diffrence between classList.add() and classList.toggle()--->
// classList.add---> it adds the class t the element while the toggle do its opposite like if there exist it will remove ,if not exist then it will add the class

