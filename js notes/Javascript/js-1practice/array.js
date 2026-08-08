//Replace "Banan" with "Kiwi" in the array above-------------->
let fruits=["Apple","Banana"];
fruits.pop();
fruits.push("Kiwi")

//  what is the different between push and unshidt---
// push ek new wlwmwnt ko last me add karta ha i jab ki unshift array ke shuruajt me new element ko add karta hai 

//Insert "Red" and "Blue" at index 1 in this array----
let colors=["Green","Yellow"];
colors.splice(1,0,"Red","Blue"); // ['Green', 'Red', 'Blue', 'Yellow']
// here  in the above the 1 refers to the desire index u want to add or delet and 0 refers to how many for delete ---

//Extract the three element from the given array---
let items=[1,2,3,4,5,6];
let gt=items.slice(2,5);
console.log(gt)
// sort the given array alphabetically and reverse it----
let names=["Zara","Arjun","Mira","Bhavya"];
names.sort().reverse()

//use map() function to square each number->
let arr=[1,2,3,4];
let tr=arr.map(function(val){
 return val*val
});

//use filter function to keep numbers greater ṭhan 10;
let number=[5,6,12,20,3];
let df=number.filter((val)=>{
 return val>6;
});


//Add "India" to the start of theis array using spread operator------->

let countries=["USA","UK","Afaganistan","Nepal","Russia"]
countries=["India",...countries]
console.log(countries) // the out put is  ['India', 'USA', 'UK', 'Afaganistan', 'Nepal', 'Russia']
// here the three dots called as spread operator but in nornmal function it is calles as rest operator---

//clone this array properly (not by reference)
let rrt=[1,2,3,4,5,6,7]
let copy=[...rrt]
