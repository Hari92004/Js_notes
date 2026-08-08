//let time for practice more to get more knowledege---->
let input=document.querySelector("input")
let total=document.querySelector("span")
input.addEventListener("input",function(){
 let left=50-input.value.length
total.textContent=left;
 if(left<0){
 total.style.color="red";
 }
else{
 total.style.color="white"; 
}
});

//Event Vs Listener---
// fuction for a event is the listner and the event like click or keydown is the main event

//capturing vs bubling----------->
// capturing is the reverse of bubling and it is by default in inactive state but bubling is the active state ,here when ever an event ocuures and there is no any event is added then it move it's parent to check there any eventlistener or not if not then move its parent and  also if there ,it will move to it's parents after compute it's eventlistener--->

// aur han capturing ko active karne ke liye hume baas ek true likhna hai us function ke last me ,jisne event and eventlistener laga hai....
