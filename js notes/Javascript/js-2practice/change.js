//lets discuss about the change event listener--->
let selected=document.querySelector("select");
selected.addEventListener("change",function(val){
if(val.target!==null){
//  console.dir(val.target.value)
let y=val.target.value;
 document.querySelector("p").textContent=`${y} Device selected !`
}
})