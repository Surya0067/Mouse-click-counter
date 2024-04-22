const descreasebtn = document.getElementById("descrease_btn");
const resetbtn = document.getElementById("reset_btn");
const increasebtn = document.getElementById("increase_btn");
const Counter = document.getElementById("Counter");
let count=0;

increasebtn.onclick=function(){
  count++;
  Counter.textContent = count;
}

resetbtn.onclick=function(){
  count = 0;
  Counter.textContent = count;
}

descreasebtn.onclick=function(){
  count--;
  Counter.textContent = count;
}