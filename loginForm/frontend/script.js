"use strict";

// Select elements
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginResult = document.getElementById("login-result");

// Eventlistender
form.addEventListener("submit", sendLogin);

// Define login function
function sendLogin(event) {
   // Stops refresh on submit
   event.preventDefault();
   // add fetch section
   // POST as second param- email and password in body object in JSON string

   // localhost is a special host name that points to the same computer as the one requesting it. Anyone using a different computer than yours and trying to connect to localhost will try to connect to its own computer, not yours. As the server is not running on their computer, they quite obviously get a "connection refused" error.

   // You need to replace localhost with a globally accessible address (domain name or IP address). This also implies that you need to have your router map your external IP address to your computer running the server for this port (otherwise they will connect to your router, not your server).

   // fetch("http://127.0.0.1:4000/login-with-fetch", {
   fetch(`http://localhost:3000/login-with-fetch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         email: emailInput.value,
         password: passwordInput.value,
      }),
   }).then((response) => {
      if (response.status === 200) {
         loginResult.innerHTML = `<span style="color:green">Login Successful</span>`;
      } else if (response.status === 401) {
         loginResult.innerHTML = `<span style="color:red">Login Failed</span>`;
      }
   });
}
