// lets discuss about the local storage and the cookies ,and their use in and how can we use that ---->

//1) What is local storag--->
//local storage store the local data/ browser data even if the browser gonna close down--->

// how to store the data in it---->
localStorage.setItem("harsh","ye local storage ka data hai")
//data fetch kaise kare----->
let val=localStorage.getItem("harsh")
//data remove kaise kare----->
localStorage.removeItem("harsh","friend","name of the data","naam")
// data update kaise karen----->
localStorage.setItem("harsh","hari naam hai mera")

// how to remove all data from the localStorage---->
localStorage.setItem("friends",JSON.stringify(['hari',"promad","rabi","akash"]))  
let get=JSON.parse(localStorage.getItem("friends"))

//2)session storage ---->
//ye data store toh karta lekin app close kaerne ke baad woh data earase ho jata hai---->like it stores the data temporarely
// all same as the localStorage for it ,by using the setItem,getItem,removeItem we can set ,update and remove the data from it--->
sessionStorage.setItem("Hari","ka haal chal hai bhai");
sessionStorage.removeItem("Hari");
sessionStorage.setItem("Harini","hello cutie kya haal chal hai");
sessionStorage.clear()

//3) what is cookies in browser---->
let value=document.cookie="naam=Hari";

// browser ke chota data store karne ke liye use hota hai ,isme page reload pe cookies ka data automatically server per chala jayega
// its stores the data in the cooki storage---
// it handlels the less data ---(like around 4kb only) it is for light data

