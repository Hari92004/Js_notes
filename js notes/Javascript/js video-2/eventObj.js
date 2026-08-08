// lety understand what is event object and how does it works in js---->
// event object--> 
input.addEventListener("input",function(val){
if(val.data!==null){
 console.log(val.data);
}
})
// here the val is teh event object which stores data for occuring an event---->similarly the other things like target andn type is also stores the event data if the event occurs ---->
// here target is that targeted field which caused by any event---
//type is the type about the event ---->means which kind of event occured
// preventDefault is the method to stop/ prevent a submission of a form--->