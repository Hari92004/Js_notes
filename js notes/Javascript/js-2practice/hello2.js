// add a highlight class to every even item in a list--->
let lis=document.querySelectorAll("ul li:nth-child(2n)");
lis.forEach(function(val){
  val.classList.add("hightlit")
})
