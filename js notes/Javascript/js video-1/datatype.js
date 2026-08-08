//  data tyep do tarah ke hote hai like primitive and reference--------

//  primitive -----> aisi saari value jinko copy karne pe hume real copy milta hai----
//  iske under humem number ,string ,boolean,null,undefined,symbol,bigint -----------milte hai


let b=23;
let a=b;
 a=a+2;
let h; // it is undefined 
let t=null; // iska value null hai matlab  humne janbhuj kar koi data nhi di-----
//  symbol ek immutablel unique value hai--------------
let fg=Symbol("uid")
//  bigint---
let r=9007199254740991n;
r=r+2342n;

//  reference ---> inko copy karne pe real copy nhi milta  ,shirpp reference hin milta hai....
//  isme me hume array,object,function hai ----------------------------[],{},()
let c=[1,2,3,4]
let y=c;
y.pop();

// Dynamic typing ---> data type change kar sakte ho....like
let i=12;
i="Hari"
//  isme koi error nhi aata hai...

// type quirks-----means check the data type of a given data ------
// type corcion-->. type automatically convert ho jata hai....concate and  addition jaisi chije kartha hai....
//  like ek number ko string me convert kar na or number ko string me econvert karna ho-------


