// let understand what is mouse move and how  it is workin js----->
let box=document.querySelector("#dabba");
window.addEventListener("mousemove",function(dets){
 box.style.top=dets.clientY + "px";
 box.style.left=dets.clientX + "px";
})