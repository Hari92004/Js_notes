// let's makes an interesting thing using change event listerner----->
let h1=document.querySelector("h1");
console.log(h1.innerHTML)
window.addEventListener("keydown",function(val){
if(val.key === ""){
  console.dir(val.key);
  h1.textContent= "Space";

}else{
  h1.textContent=val.key;
  }
});