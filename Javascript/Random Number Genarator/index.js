const mybtn = document.getElementById("btn1");
const mylabel1 = document.getElementById("label1");
const mylabel2 = document.getElementById("label2");
const mylabel3 = document.getElementById("label3");
const min = 1;
const max = 6;
let random1;
let random2;
let random3;

mybtn.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  mylabel1.textContent = randomNum1;
  mylabel2.textContent = randomNum2;
  mylabel3.textContent = randomNum3;
};
