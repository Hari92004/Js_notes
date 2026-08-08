//let hide the div using the setInterval after 3 second-->
let div1=document.querySelector(".hide");
let h=document.querySelector("h4")
let  count=0;
let close=setInterval(() => {
  console.log(count)
  count++;
     if(count==3){
      div1.style.display="none";
      h.textContent="boxa gayab ho gaya "
     clearInterval(close)
   }
}, 1000);