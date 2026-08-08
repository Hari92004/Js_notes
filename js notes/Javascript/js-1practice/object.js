// lets practice of objects----.
// create an object for a student with name,age,and isEnrolled.

let std={
 name:"Raj kumaar",
 age:16,
 isEnrolled:true
}

// Can an object key be a number or boolean ?Try this---->
const user1={
 name:"Hari",
 address:{
  city:"Malkangiri",
  pin:764044,
  42:"hey",
  location:{
      villa:"Sargiguda",
      post:"Pandripani",
      dist:"Malkangiri"
     },
   },
};

//Acess the value of "first_name" from this object:
let student={
 "first_name":"Hari"
}
// the above can be acess using two different methods---like--
//student.first_name
//student["first_name"]

// give a dynamic key  let key="age" ,how will you acess user[key]?
let key="age";
let user ={
 age:21
}
user[key]

// from the object below print the latitude:
const location2={
 city:"Malkangiri",
 coordinates:{
  lat:23.67,
  lng:71.42
   }
};

// use object  to print all key-value pairs as
// title: Javascript
//Duration:"4 weeks"
const course={
  title:"Javascript",
 Duration:"4 weeks "
 };
// for(val in course){
//  console.log(val)
// }
Object.entries(course).forEach(function(val){
 console.log(val[0] + ": "+val[1]+" ");
});