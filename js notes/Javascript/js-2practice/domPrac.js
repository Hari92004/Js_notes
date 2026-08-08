//what is the DOM? How does it represent the HTML structure?
//-->document object model jo html ka ur ek part ko ek tree ke node jaise behave karta hai 

//Name the types of nodes in the DOM tree.
// node,element node ,text node,

//let add the class to the exizting pargraph----------->
let p=document.querySelector(".hello"); // call back the class name --->
p.textContent="hello ji kaisi ho ap";
let r=document.createElement("h1");
r.textContent="Welcome to Zetron city!";
document.body.prepend(r);
r.classList.add("hello");