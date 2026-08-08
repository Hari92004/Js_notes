// let make a file upload button with hover effect and uploading ----->
let btn=document.querySelector("#btn");
let input=document.querySelector("#fileinput");

btn.addEventListener("click",function(){
   input.click();
});

input.addEventListener("change",function(dets){
const file=dets.target.files[0] 
if(file){
  btn.textContent=file.name;
}
});
