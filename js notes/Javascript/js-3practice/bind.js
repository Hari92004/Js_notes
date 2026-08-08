//manual binding---bind call and reply--->
//function call karte waqt hum this ki value set karsakte hai --->

let obj={
name:"hari",
age:21
}
function abcd(a,b,c){
  console.log(this,a,b,c,)
}
// abcd.call(obj) // yaha pe function hin call hota hai

//call apply bind--->

let fnc=abcd.bind(obj,1,2,3)
fnc() // 1,2,3 add ho gaya hai--->but object ban gaya hai--->