
let wrapper=document.querySelector(".wrapper")
let btn=document.getElementById("btn")
let btnok=document.getElementById("ok")
btn.addEventListener("click",popup)
btnok.addEventListener("click",popdown)
function popup(){
    wrapper.classList.add("move")
  
}
function popdown(){
    wrapper.classList.remove("move")
}