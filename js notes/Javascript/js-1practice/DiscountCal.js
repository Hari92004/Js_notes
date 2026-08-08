// let make a discount calculator----->
function  discountCalculator(discount){
return  function(price){
   return price-price*(discount/100);
  }
}
let discounter=discountCalculator(10);
console.log("The discounted price is :",discounter(2990));