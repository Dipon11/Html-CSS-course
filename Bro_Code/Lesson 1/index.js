// console.log(`Hello`);
// console.log("I like pizza");

// window.alert(`This is an alert`);
// window.alert(`I like pizza `);

//comments

// document.getElementById("myh1").textContent = "Hello";
// document.getElementById("myp").textContent = `I like pizza `;

// Variables
// let name = "Dipon";
// let age = 24;
// let price = 18.88;
// let gpa = 2.1;
// let online =false;
// console.log(typeof price);
// console.log(`My name is ${name}`);
// console.log(`You are ${age} years old`);
// console.log(`The price is  ${price}`);
// console.log(`my shit ${gpa}`);
// console.log(`I am a noob ${online}`);

// let fname = `Dipon Das`;
// let age = `24`;
// let student = `false`;

// document.getElementById("p1").textContent = `Your name is ${fname}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Am I  a student  ${student}`;

//scanf /cin

//EASY WAY
// let username;

// username = window.prompt("Whats your username");
// console.log(username);

//Professional  way

// let username;
// document.getElementById("msubmit").onclick = function () {
//   username = document.getElementById("mytxt").value;
//   document.getElementById("myh1").textContent = `Hello ${username}`;
// };

//type conversion

// let age = window.prompt("What is your age");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

//const

// const PI = 3.14159;
// let radius;
// let circumference;
// //PI = 420.29;
// document.getElementById("myh1").textContent = "Input Radius";

// document.getElementById("mysubmit").onclick = function () {
//   radius = document.getElementById("mytxt").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myh3").textContent = circumference;

//};
//Ternary Operator

// let age = 18;

// let message = age >= 18 ? "Your an adult" : " Your a minor ";
// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "Good Morning " : "Good Afternoon";
// console.log(greeting);

//string Method

// let userName = " BroCode";
// userName = userName.trim();
// console.log(userName.charAt(0));
// console.log(userName.charAt(1));
// console.log(userName.indexOf("B")); //index of occurance opf the string
// console.log(userName.lastIndexOf("o")); //last index of occcurance of the string

// console.log(userName); //to remove the space
// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());
// console.log(userName.repeat(5));
// let result = userName.startsWith(" ");
// console.log(result);

//String slicing   string.slice (start,end );

const fullName = "broseph Code";
// let firstname = fullName.slice(0, 3);
// let lastname = fullName.slice(4, 8);

// let firstchar = fullName.slice(0, 1);
// let lastchar = fullName.slice(-4);

// let firstname = fullName.slice(0, fullName.indexOf(" "));

// let lastname = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstname);
// console.log(lastname);
// // console.log(firstchar);
// console.log(lastchar);

//Method Chaining

//-----------No Method Chaining------------

// let username = window.prompt("Enter your username");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;
// console.log(username);

// //----------Method Chaining--------------

// myUsername =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();

// console.log(myUsername);

//=assignment operator
//== comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//!= inequality operator
//!==strict inequality operator

//while loop

// let userName = "";

// while (userName === "" || userName === null) {
//   userName = window.prompt("Enter your username");
// }
// console.log(`hello ${userName}`);

let loggedIN = false;
let username;
let password;

do{
  username = window.prompt("Enter Your USername");
  password = window.prompt("Enter Your password");

  if (username === "myusername" && password === `mypassword`) {
    loggedIN = true;
    console.log(`You are logged in `);
  } else {
    console.log(`Invalid Username `);
  }
}while (!loggedIN) 
