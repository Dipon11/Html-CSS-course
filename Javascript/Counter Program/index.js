const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const increase = document.getElementById("inc");
const cntlabel = document.getElementById("countlabel");

let count = 0;

increase.onclick = function () {
  count++;
  cntlabel.textContent = count;
};
dec.onclick = function () {
  if (count == 0) {
    return;
  } else {
    count--;
  }
  cntlabel.textContent = count;
};
reset.onclick = function () {
  count = 0;
  cntlabel.textContent = count;
};
