const emailInput = document.getElementById("emain-input");
const suscribeButton = document.getElementById("button");
const emailError = document.getElementById("email-error");

suscribeButton.addEventListener("click", handlerButtonclick);
emailInput.addEventListener("focus", handlerInputClick);

function handlerButtonclick() {
  email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  if (isValidEmail) {
    window.location.href = "finalPage.html";
  } else {
    emailError.textContent = "Valid email required";
    emailInput.classList.add("error");
  }
}

function handlerInputClick() {
  emailInput.value = "";
  emailInput.classList.remove("error");
}
