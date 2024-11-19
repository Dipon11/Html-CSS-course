const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mscard = document.getElementById("mscard");
const paypal = document.getElementById("paypal");
const mysub = document.getElementById("mysub");
const subres = document.getElementById("subres");
const payres = document.getElementById("payres");

mysub.onclick = function () {
  if (mycheckbox.checked) {
    subres.textContent = `You are Subscribed !`;
  } else {
    subres.textContent = `You are Not Subscribed !`;
  }

  if (visabtn.checked) {
    payres.textContent = `You are paying with visa`;
  } else if (mscard.checked) {
    payres.textContent = `You are paying with MasterCard`;
  } else if (paypal.checked) {
    payres.textContent = `You are paing with Paypal`;
  } else {
    payres.textContent = `You have not selected a payment method`;
  }
};
