// chalo ab hum object ke baare me padhenge ....object kya hota hai and iska kaam kya hai js me---
let obj={
First_name:"Hari",
Last_Name:"Pangi",
age:21,
Branch:"CSE",
Year:"3rd",
Hostle:"APJHR",
roomNo:223,
Gmail:"haripangi@gmail.com"
};
// obj.name="Harry Potter"; // this way we can chnage the property of an object
// console.log(obj)
 // the above one is calles as an object--->
let g="age";
// console.log(obj[g]); // ------------>
// let discuss about teh nested obj----
const user={
 name:"Hari",
 address:{
  city:"Malkangiri",
  pin:764044,
  location:{
      villa:"Sargiguda",
      post:"Pandripani",
      dist:"Malkangiri"
     },
   },
};
// console.log(user.address.location.villa)


//chalo object destructuring ----ko samajte hai------>
let {dist,villa}=user.address.location; // by using this method we can easily acess any elements from the object

// let understand what are the loop technique in object------>
for(let key in obj){
 console.log(obj[key]);
};

//let make another obj about Tata cars----
 let Tata={
 company:"Tata",
 Founder:"Sir Ratan Tata",
 turn_over:"22100Cr",
 location:"India",
 cars:{
   cr1:"Tiago",
   cr2:"Punch",
   cr3:"Xenon",
   cr4:"Be6"
   }
}

for(val in  Tata){
 console.log(Tata[val]);
//  for(data in val){
//     console.log(val[data])
//    }
}
//<------------------------------------obj---------------------------------------->
Object.keys(Tata)
//onject.keys --- saare keys ko array me dal deta hai---
Object.entries(Tata);

///(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) ['company', 'Tata']
// 1: (2) ['Founder', 'Sir Ratan Tata']
// 2: (2) ['turn_over', '22100Cr']
// 3: (2) ['location', 'India']
// 4: (2) ['cars', {…}]

// lets discuss baout the copying objects----->
//1) spread--->
 let spd={...obj}
//2) object.assign----->
 let obj2=Object.assign({height:5.65},obj)

// let discuss about the deep cloning ---->
// ye hum nested object ke liye use karte hai---iske liye hum JSON and stringfy and parse use karte hai----
let ttr=JSON.parse(JSON.stringify(Tata));
ttr.location="Brazile"; 
// isme  pehle ek object ko hum string me convert karte hai then after uske string se object me convert karne ke liy ehum parse ka use karte hai...
// that's how we can copy a nested object deeply---->


// optional chaining---> 
// in future obje ke elements ka spelling badal di jaye toh us sace me error ayega use prevent karne ke liye hum optional chaining use karte hai --->

user?.addresses?.location;
// isme error nhi aata but undefined atta hai----

//
