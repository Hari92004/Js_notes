//let discuss about the first class function what it is and how canwe create it  
// js me first class function bhi hai jo value ki tarah treate kiya jata hai so 
//  fist cls------>
function abfd(val){
    val();
}
abfd(function (){
    console.log("hello world");
})
//   yahni hum ek function ke parameter ke jagah ek function bhi return kar sakte  hai---->
//  the main concept of the function is to use a function as a value in whole the code


//  let discuss about the higher order function -------------------------------------------------->
//  yeh ek aisa ftn hai jo ek function ko return kare yah ek function ko hin accept kare like ----->

function df(val){//------------> yeh ek higher order function 
 val();
// return function(){
//  console.log("kaise ho re bhai log")
// }
}
df(function(){
 console.log("hello world kaise hop reh bhai log")
})

//  let discuss about the what is pure and impure  function -------------->
// ek function jo variable ka value ko badal de raha hai use hum impure function bolenge ad just opposite ko pure function kehnge---