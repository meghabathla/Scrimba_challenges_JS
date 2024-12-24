const form = document.getElementsByClassName("signup-form")[0];
const userName = document.querySelector(".input-name");
const email = document.querySelector(".input-email");
console.log(name);
console.log(email);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  if (!userName.value.trim()) {
    alert("Please enter a valid username."); // Display error message
    isValid = false;
  }
  if (!email.value.trim()) {
    alert("Please enter a valid email."); // Display error message
    isValid = false;
  }
  if (isValid) {
    document.getElementsByClassName("message")[0].style.display = "inline";
  }
});
