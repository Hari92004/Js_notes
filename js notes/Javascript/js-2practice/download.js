// lets make a progress bar of downlaod-->
//here the simple founda is that to make a constant that increases  value and add this value to the style section bsed on the increament of the constant it will also increases and so on ,after reaching too 100 it will show a message that is download is completed (that can be done by change the text content of the paragrap which is also in same div of the loading box)....      

let count=0;
let progress=document.querySelector(".progress-bar")
let percent=document.querySelector("#percentText")
let intv=setInterval(() => {
    if(count<=99){
     count++;
     progress.style.width=`${count}%`
     percent.textContent=count
    }
    else{
     document.querySelector("h2").textContent="Downloaded"
     clearInterval(intv);1
      }    
}, 30);

