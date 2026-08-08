// let discusss what is array and what are the use of it in js ---------------->
// basically array ek variable jo multiple value ko store kar sakta hai woh bhii similar data type ke ------.
// ek array dekhne me kuch aisa hota hai...array r=[1,2,3,4,5,5,6]
// ye satrt index 0 se start hota hai....

// method that help to manipulate the array:
// push:---yeh new element ko push karne me help karta hai last index
// pop:ye existing element ko nikal ne me help kartha hai last index value
// shift:ye shuru se value  ko hata tha hai
// unshift:starting me add karta hai
// splice:ye bhich se value hata tha hai syntax like---->arr.splice(2,4)--index 3 is gonna to delete
// slice:
// reverse:
// sort:

let arr=[1,2,3,4,5,6,7,8,9,10];
arr.push(288);
// (arr.pop())
// arr.splice(2,1); // 3 deleted for 2,2 ---. 3 &4 deleted 

// sclice ka kaam ek new array banana hai ----
let new_arr=arr.slice(1,5); // here 1 is the strating index and 5 is the end and yeh print nhi hota shirf 4 tak hin hota hai
console.log(new_arr)
arr.reverse()
arr.sort(function(a,b){ // ye ek function se chalta hai and uske value ke liek a-b= ascending ,b-a descending order me sort hota hai
  return b-a;
});

//   let discuss about the other basic methods----->
// forEach----> ye ek ek alue deta hai ur ek run pe 
let art=[2,3,4,5,6,2,78,92,78,23];
art.forEach(function (val){
  console.log(val)
});

// map ---. ise hum tabhi use karte jab ek new array banana ho woh bhi purani array se---
let ert= art.map(function (val){
if (val>6) return 33;
});
// kuch nhi return pe ye undfined return karta hai

//use of map function---in code  and when is necessary ti use ---
//jab ek array se new array cretate hone hai usme yeh use hota hai----and new array value rakhega


//<------------------------------filter------------------------------->
//yeh purane array se kuch elemnt lata hai and kuc ko chord deta hai----
let gr=[1,2,3,4,5,6,7,8,9,15];
let grr=gr.filter(function(val){
  if(val>4) return true;
});
//here the new arra that is grr will return only = [5, 6, 7, 8, 9, 15]
//<-----------------------reduce-------------------------->
//ek array ka values ko reduce karke ek single value me convert karne ko reduce process kehte hai
let aar=[1,2,3,4,5,6,7];
// isme reduce saare value ko add karke ek new value provide karta hai
let ans=aar.reduce(function(accumulator,val){
 return accumulator+val;
},0);
// find kya hai and iska kaam kya hai---
let gf=aar.find(function(val){
  return val===5; 
})

// let discuss about the some----i is like some one ----------------->
let yt=[10,20,40,50,30,60]
let any=yt.some(function (tr){
  return tr > 55;  // it returns the true/false
});


// every ---it is just opposite of some here it checks that every one must belonging to rules or not
let we=yt.every(function (tr){
  return tr>20;
});
// here for all it will give true otherwise it will give false----


// let understand what is destructuring -----------
let qw=[1,2,3,4,5,65,67]
let[a,b,,,c]=qw;

// spread operator------->
// let ty=qw;----unsafe method fro copy of an array
let ty=[...qw]; // technique for safe copy from the array 
ty[4]=4542;
console.log(ty)
// fro changing the value from the refence array ,the parents array also changing ----->