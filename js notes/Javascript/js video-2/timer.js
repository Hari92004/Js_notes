// let discuss about the timer and and its interval .What are they and what the function of them in js --->
//setTime,clearTimeout
//setInterrval,clearTInterval--->
setTimeout(() => {
    console.log("yeh shirp ek baar hin aayega")
},5000);
// setTimeout me shirpm ek baar hin  aayega jabki setInterval me ur ek time pe print hoga--->
let interval=setInterval(() => {
    console.log("ye har 4 seconsd baaad ayega")
},4000);

setInterval(()=>{
 console.log("yeh har 3 second ke baad aayega")
},3000)

//clear time out karne pe agar ek time set hai pehle se hin then woh nhi aayega--example
clearInterval(interval)// isne 4 sec wala ko clear kardiya
//it is same as for setTimeout agar koi timeout set hai pehle se then ye clear kar dega 



/// kob konsa use karen---->