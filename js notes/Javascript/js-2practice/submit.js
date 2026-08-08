// lets us discuss about the submit ---with an example--->
let form=document.querySelector("form")
let main=document.querySelector("#main")
let doc=document.querySelectorAll("input")


form.addEventListener("submit",function(dets){
  dets.preventDefault();

let card=document.createElement("div");
card.classList.add("card")

let profile=document.createElement("div");
profile.classList.add('profile');

card.appendChild(profile)
console.log(card);

let img=document.createElement("img")
img.setAttribute("src","D:\webDev\new journy\js-2practice\IMG-20240307-WA0001.jpg")

let h3=doc.createElement("h3")
h3.textContent="Ghoda ghudiya"
let h5=doc.createElement("h5")
h5.textContent="Ghoda"
let p=doc.createElement("p")
p.textContent="ghoa is very good jumper & animal"


profile.appendChild(img)
card.appendChild(profile)

card.appendChild(h3)
card.appendChild(h5)
card.appendChild(p

main.appendChild(card)
});