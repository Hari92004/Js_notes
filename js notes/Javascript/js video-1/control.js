// let discuss about the control flow of the code using if ,else,switch ---condition
if(12>13 && 14<=53){
console.log("aabe saale ye kya hai be")
}else if(344>23){
console.log("tujhe kya lagta hai ki me pagal hun")
}else{
 console.log("hello rother what are you doing")
}

// <------------------switch case---------->
let a="";
switch(a){
 case 1:
 console.log("tumne 1 entered kiya hai ")
 break;
case 2:
 console.log("tumne 2 entered kiya hai")
  break;
case 3:
 console.log("tumne 3 entered kiya hai")
 break;
case "a":
 console.log("abe saale string nhi dena hai")
 break;
default:
 console.log("abe kuch the value de pehle a ke liye ")
}

// eraly reeturn pattern ----------------------->
function gatVa(val){
 if(val > 100) return "A";
 else if(val > 75) return "B";
 else if(val > 50) return "C";
 else return "D";
}

console.log(gatVa(60))


//  let make a grade system using fuction-------------------->
let tmark=813;

function grade(marks){
if(marks>890) return " garde A";
else if(marks > 760) return "garde B";
else if (marks >680) return "garde C";
else if(marks >550) return "garade D";
else return "You are failed ";
}
console.log(grade(tmark))

//   let make a smalll game using conditional loop and function--------------------->
function game(a,b){
if(a=="rock" && b=="scissor") return "user";
else if( a=="scissor" && b=="rock ") return "computer";
else if (a== "rock"&& b=="paper") return " computer";
else if (a== "rock"&& b=="rock") return " draw";
else if (a== "paper"&& b=="paper") return " draw";
else if (a== "paper"&& b=="rock") return " user";
else if (a== "scissor"&& b=="paper") return " user";
else if (a== "scissor"&& b=="scissor") return " draw";
else return " computer";
}

console.log(game("rock","rock"))