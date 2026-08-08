// lets discuss about the mouse over which is an event in js----->
let db=document.querySelector("#dabba")
db.addEventListener("mouseover", function(){
 db.style.backgroundColor="green"
});
db.addEventListener("mouseout", function(){
 db.style.backgroundColor="red"
});