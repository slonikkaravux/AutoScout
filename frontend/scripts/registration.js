document.addEventListener("DOMContentLoaded", function () {
  console.log("Registration page loaded.");
});


function togglePasswordVisibility() { 
  var passwordInput = document.getElementById("password"); 
  passwordInput.type = (passwordInput.type === "password") ? "text" : "password"; 
} 
