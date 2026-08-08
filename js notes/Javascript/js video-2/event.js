// lets discuss about the event listerning---->
let p=document.querySelector("p")
p.addEventListener("click",function(){
 p.classList.add("p1")
});
p.addEventListener("dblclick",function abc(){
 p.classList.add("p2")
});

//lets remove the event listerner---.
// p.removeEventListener("dblclick", abc()); // nhi ho raha hai

//
let input=document.querySelector("input")
input.addEventListener("input",function(val){
if(val.data!==null){
 console.log(val.data);
}
});


// lets discuss about the change event listerner--->

