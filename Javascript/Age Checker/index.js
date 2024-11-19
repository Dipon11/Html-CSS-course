const mytxt = document.getElementById("mytxt");
const mysubmit = document.getElementById("mysub");
const result = document.getElementById("res");
let age;
mysubmit.onclick = function () {
  age = mytxt.value;
  age = Number(age);
  if (age >= 100) {
    result.textContent = "You are too old to enter this site";
  } else if (age == 0) {
    result.textContent = "You cant enter this site you were just born";
  } else if (age >= 18) {
    result.textContent = "You can enter this site";
  } else if (age == 0) {
    result.textContent = "You cant enter this site you were just born";
  } else {
    result.textContent = "You must be 18+ to enter this site";
  }
};
