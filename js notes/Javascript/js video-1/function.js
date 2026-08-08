// toh aaj hum baat karenge function ke baare me---------------->
function operation(a,b){
console.log("the summation of the two number is=:",a+b)
console.log("the division of the  two number is:",a/b)
console.log("the multiplicatioin of the two nubwer is:",a*b)
}
operation(2,3)
// the summation of the  two undefined is NaN ---may confuse but real it is ------------>
//  agar ek function ke liye humne koi argument value nhi diya and function toh default me 0 hoga 

//  jab argument kai saare ho to  humein utne hi parameter banane padenge ,isiliye hum short cut use karenge that is (...val) ye three dots ko hum rest yah spread bolenge------>
// agar ise hum normal function me use kare then ise hume rest bolenge and  for array and object ke liye hum ise spread  bolenge4
function abcd(...val){
console.log(val);
}
abcd(1,2,3,4,5,6,7,8);

function abc(a,b,c,...val){
console.log(val);
}
abc(1,2,3,4,5,6,7,8);

//  return -------- inside the function ----------->
function fg(){
return 235456;
}
let rt=fg();
console.log(rt)// the output is 235456

// chalo fat arrow function kise kehte hai ssmaj te hai---->
// a fucntion which cantains the ()=> is called as fat arrow function---let take an example --
let ret=(a,b)=>{
 console.log("the sum of the two value is :",a+b);
}