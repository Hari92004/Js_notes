// operators----which perform some logical mathematical operation liek +,-,%,** etc
let b=234;
let v=26535;
let c=v+b;
// remember "+" ye shirf addition nhi karta hai ,ye concatenation bhi kartha hai...
// - (minus shirf subtract kartha hai...)
// comparion like ---> 
// =  asssign any valuue to am variable --(assignment opeerator)
// == (compare operator)
// ===(isme data type check kartha hai)
// != not eaqual to 
// !== (not equal to like both vvalue and data type) example---> ("21"!==9)---.. answer will be true
// >= ---> less  than equal to 
// <=------>greater than equal to 


//<-------------------------------------assignmentoperator-------------------->
// =
// += ( isme value ko + karo and update karo)
// -= (*pehle minus karo and uske baad update karo )--like q-=2,if q=5 then theh value will be 3 (updated value for q)
// /=( isme pehle divide karo then update karo )
// %=(isme pehle ampercent nikalo and then value update karo)
let u=45;
let p=50;
u%=5;
p/=5;

//  <-----------------------logical operator--------------------------->
// &&----->AND GATE
// ||------>OR gate 
//!----> NOT gate 


//<--------------------Unary operator-------------------->
// (+)--->addition and before ek string + lagane se woh ek number me convertho jata hai
// (-)---->
// (++) increment karona hai
// (--)decreament karna hai

let o=23;
++o;// ---> 24(pre increament karo ) opposite us post increament karo means pehle operation karo ythen uske baad value vo badhao
let g=o+2; // g ka value 26 hai 
let r=45;
// --r;// updated value is 44
// r--;updated value is 44

//<----------------------------ternary operator--------->
// ?:
if(12>=13){
 console.log("false")
}
//  but we can write it using terary operator -------------
12>13 ? console.log("true"): console.log("false")

//  -------------insatance ---------------------------------it check teh variable is part of a group like object ,array ,string 
let k=0;
if(k){
console.log("true")
}else{
 console.log("false")
}

let points=35;
let status=points>100 ? "Gold" : points>40 ? "Silver": "Bronze";

console.log(status)